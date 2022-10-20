import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import debounce from '../../helpers/Debounce';
import PreviewSearchContainer from './PreviewSearchContainer';
import SearchInput from './SearchInput';
import ClickOutside from '../ShopCommon/ClickOutside';

const PreviewSearch = (): JSX.Element => {
  const { events } = useRouter();
  const [openPreviewSearch, setPreviewSearchOpen] = useState(false);
  const [keyphrase, setKeyphrase] = useState('');

  useEffect(() => {
    // subscribe to next/router event
    events.on('routeChangeStart', () => setPreviewSearchOpen(false));
    return () => {
      // unsubscribe to event on unmount to prevent memory leak
      events.off('routeChangeStart', () => setPreviewSearchOpen(false));
    };
  }, [setPreviewSearchOpen, events]);

  const changeKeyphrase: (text: string) => void = debounce(
    (text) => {
      if (text !== '') setKeyphrase(text);
    },
    500,
    null
  );

  const onFocus = useCallback(
    (keyphrase: string) => {
      changeKeyphrase(keyphrase);
    },
    [changeKeyphrase]
  );

  const ref = useRef(null);
  ClickOutside([ref], () => setPreviewSearchOpen(false));

  return (
    <div ref={ref}>
      {openPreviewSearch && (
        <PreviewSearchContainer keyphrase={keyphrase} close={() => setPreviewSearchOpen(false)} />
      )}
      <SearchInput
        placeholder="Search content"
        redirectUrl="search"
        keyphrase={keyphrase}
        setSearchString={changeKeyphrase}
        onFocus={onFocus}
        setOpen={setPreviewSearchOpen}
        open={openPreviewSearch}
      />
    </div>
  );
};

export default PreviewSearch;
