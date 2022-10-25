import { useRef, useState } from 'react';
import { PreviewSearchWidgetProps } from '@sitecore-discover/ui';
import { Action } from '@sitecore-discover/react';
import { PreviewSearchActions } from '@sitecore-discover/widgets';
import ClickOutside from '../ShopCommon/ClickOutside';
import debounce from '../../helpers/Debounce';
import SearchInput from './SearchInput';
import SuggestionList from './SuggestionList';
import SessionList from './SessionList';
import SpeakerList from './SpeakerList';
import NewsList from './NewsList';

export interface PreviewSearchProps extends PreviewSearchWidgetProps {
  rfkId: string;
}

const PreviewSearch = ({
  sessions,
  speakers,
  news,
  suggestions,
  searchContent,
}: PreviewSearchProps): JSX.Element => {
  const [keyphrase, setKeyphrase] = useState('');

  // TODO PSC: Under development
  const changeKeyphrase: (text: string) => void = debounce(
    (text) => {
      /*
      const changeKeyphraseAction: Action = {
        type: PreviewSearchActions.KEYPHRASE_CHANGED,
        payload: { keyphrase: text || '' },
      };
      
      dispatch(changeKeyphraseAction); //setViewAllUrl(`/shop/products/?q=${text || ''}`);
      searchContent(text);
      */
      setKeyphrase(text);
    },
    500,
    null
  );

  const onFocus = (keyphrase: string) => {
    changeKeyphrase(keyphrase);
  };

  const [open, setOpen] = useState(false);
  const popupRef = useRef(null);
  const inputRef = useRef(null);

  const closePopup = () => setOpen(false);
  ClickOutside([popupRef, inputRef], closePopup);

  const openedPopup = open && (
    <div className={`preview-search-content-popup`}>
      {suggestions && suggestions.list?.length > 0 && <SuggestionList {...suggestions} />}
      {sessions && sessions.list?.length > 0 && <SessionList {...sessions} />}
      {speakers && speakers.list?.length > 0 && <SpeakerList {...speakers} />}
      {news && news.list?.length > 0 && <NewsList {...news} />}
    </div>
  );

  return (
    <div>
      <div className={`preview-search-content-container`}>
        <div className={`preview-search-content`} ref={popupRef}>
          {openedPopup}
        </div>
      </div>
      <div ref={inputRef}>
        <SearchInput
          placeholder="Search content"
          redirectUrl={`search`}
          keyphrase={keyphrase}
          setSearchString={changeKeyphrase}
          onFocus={onFocus}
          setOpen={setOpen}
          open={open}
        />
      </div>
    </div>
  );
};

export default PreviewSearch;
