import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import PreviewSearchContainer from './PreviewSearchContainer';
import ClickOutside from '../ShopCommon/ClickOutside';
import PreviewSearchInput from './PreviewSearchInput';
import PreviewSearchContextProvider from './PreviewSearchContextProvider';
import PreviewSearchIcon from './PreviewSearchIcon';
import { SEARCH_PAGE } from '../../helpers/ContentSearchHelper';

const PreviewSearchContent = (): JSX.Element => {
  const { events, push, pathname } = useRouter();
  const [openPreviewSearch, setPreviewSearchOpen] = useState(false);
  const ref = useRef(null);
  const inputRef = useRef(null);

  const onClose = useCallback(() => setPreviewSearchOpen(false), []);

  useEffect(() => {
    // subscribe to next/router event
    events.on('routeChangeStart', onClose);
    return () => {
      // unsubscribe to event on unmount to prevent memory leak
      events.off('routeChangeStart', onClose);
    };
  }, [events, onClose]);

  useEffect(() => {
    if (openPreviewSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [openPreviewSearch]);

  const onRedirect = useCallback(
    (keyphrase: string) => {
      push(`${SEARCH_PAGE}?q=${keyphrase || ''}`);
    },
    [push]
  );

  const onSearchIconClick = useCallback(
    (keyphrase: string) => {
      setPreviewSearchOpen((openPreviewSearch) => {
        if (openPreviewSearch) {
          onRedirect(keyphrase);
        }
        return !openPreviewSearch;
      });
    },
    [onRedirect]
  );

  ClickOutside([ref], onClose);

  // hide preview search when on search page
  if (pathname === SEARCH_PAGE) {
    return null;
  }

  return (
    <div ref={ref}>
      <PreviewSearchContextProvider>
        {openPreviewSearch && <PreviewSearchContainer />}
        <PreviewSearchInput
          ref={inputRef}
          placeholder="Search content"
          onEnter={onRedirect}
          className={`search-input-play ${!openPreviewSearch ? 'search-input-play-hidden' : ''}`}
        />
        <PreviewSearchIcon onClick={onSearchIconClick} className="search-play-icon" />
      </PreviewSearchContextProvider>
    </div>
  );
};

export default PreviewSearchContent;
