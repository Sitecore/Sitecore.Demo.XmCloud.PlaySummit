import { useRef, useState } from 'react';
import debounce from '../../helpers/Debounce';
import useDiscoverQueries from '../../hooks/useDiscoverQueries';
import { DiscoverNews } from '../../interfaces/DiscoverNews';
import { DiscoverSession } from '../../interfaces/DiscoverSession';
import { DiscoverSpeaker } from '../../interfaces/DiscoverSpeaker';
import ClickOutside from '../ShopCommon/ClickOutside';
import PreviewSearchNewsList from './PreviewSearchNewsList';
import PreviewSearchSessionList from './PreviewSearchSessionList';
import PreviewSearchSpeakerList from './PreviewSearchSpeakerList';
import SearchInput from './SearchInput';
import SuggestionList from './SuggestionList';

export type Result = {
  title?: string;
  list: unknown[];
};

export type PreviewSearchProps = {
  sessions: DiscoverSession[];
  speakers: DiscoverSpeaker[];
  news: DiscoverNews[];
  suggestions: Result;
};

const PreviewSearch = (): JSX.Element => {
  const [keyphrase, setKeyphrase] = useState('');
  const [news, sessions, speakers, suggestions] = useDiscoverQueries<
    [DiscoverNews[], DiscoverSession[], DiscoverSpeaker[], Result]
  >(['content', 'session', 'speaker', 'free'], {
    keyphrase,
    widgetId: 'rfkid_6',
  });

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
      {sessions && sessions.length > 0 && <PreviewSearchSessionList list={sessions} />}
      {speakers && speakers.length > 0 && <PreviewSearchSpeakerList list={speakers} />}
      {news && news.length > 0 && <PreviewSearchNewsList list={news} />}
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
