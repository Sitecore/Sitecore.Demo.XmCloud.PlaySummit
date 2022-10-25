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

const NEWS_LENGTH = 4,
  SESSIONS_LENGTH = 4,
  SPEAKERS_LENGTH = 4,
  SUGGESTIONS_LENGTH = 4;

const PreviewSearch = (): JSX.Element => {
  const [keyphrase, setKeyphrase] = useState('');
  const [news, sessions, speakers, suggestions] = useDiscoverQueries<
    [DiscoverNews[], DiscoverSession[], DiscoverSpeaker[], Result]
  >(['content', 'session', 'speaker', 'free'], {
    keyphrase,
    widgetId: 'rfkid_6',
  });

  const changeKeyphrase: (text: string) => void = debounce(
    (text) => {
      if (text !== '') setKeyphrase(text);
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

  const suggestionsAvailable = false, // suggestions && suggestions.data?.content?.length > 0, // TODO: Review suggestions
    sessionsAvailable = sessions && sessions.data?.content?.length > 0,
    speakersAvailable = speakers && speakers.data?.content?.length > 0,
    newsAvailable = news && news.data?.content?.length > 0;
  const openedPopup = open &&
    (suggestionsAvailable || sessionsAvailable || speakersAvailable || newsAvailable) && (
      <div className={`preview-search-content-popup`}>
        {suggestionsAvailable && (
          <SuggestionList
            title={`Do you mean?`}
            list={suggestions.data.content.slice(0, SUGGESTIONS_LENGTH)}
          />
        )}
        {sessionsAvailable && (
          <PreviewSearchSessionList
            title={`Sessions`}
            list={sessions.data.content.slice(0, SESSIONS_LENGTH)}
          />
        )}
        {speakersAvailable && (
          <PreviewSearchSpeakerList
            title={`Speakers`}
            list={speakers.data.content.slice(0, SPEAKERS_LENGTH)}
          />
        )}
        {newsAvailable && (
          <PreviewSearchNewsList title={`News`} list={news.data.content.slice(0, NEWS_LENGTH)} />
        )}
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
