import useDiscoverQueries from '../../hooks/useDiscoverQueries';
import { DiscoverNews } from '../../interfaces/DiscoverNews';
import { DiscoverSession } from '../../interfaces/DiscoverSession';
import { DiscoverSpeaker } from '../../interfaces/DiscoverSpeaker';
import PreviewSearchNewsList from './PreviewSearchNewsList';
import PreviewSearchSessionList from './PreviewSearchSessionList';
import PreviewSearchSpeakerList from './PreviewSearchSpeakerList';
import SuggestionList from './SuggestionList';

export type Result = {
  title?: string;
  list: unknown[];
};

export type PreviewSearchContainerProps = {
  keyphrase?: string;
  closePopup?: () => void;
};

export type PreviewSearchProps = {
  sessions: DiscoverSession[];
  speakers: DiscoverSpeaker[];
  news: DiscoverNews[];
  suggestions: Result;
};

const PreviewSearchContainer = ({
  keyphrase,
  closePopup,
}: PreviewSearchContainerProps): JSX.Element => {
  const [news, sessions, speakers, suggestions] = useDiscoverQueries<
    [DiscoverNews[], DiscoverSession[], DiscoverSpeaker[], Result]
  >(['content', 'session', 'speaker', 'free'], {
    keyphrase,
    limit: 4,
    widgetId: 'rfkid_6',
  });

  const suggestionsAvailable = false, // suggestions && suggestions.data?.content?.length > 0, // TODO: Review suggestions
    sessionsAvailable = sessions && sessions.data?.content?.length > 0,
    speakersAvailable = speakers && speakers.data?.content?.length > 0,
    newsAvailable = news && news.data?.content?.length > 0;

  return (
    (suggestionsAvailable || sessionsAvailable || speakersAvailable || newsAvailable) && (
      <div className={`preview-search-content-popup`}>
        {suggestionsAvailable && (
          <SuggestionList
            title={`Do you mean?`}
            list={suggestions.data.content}
            closePopup={closePopup}
          />
        )}
        {sessionsAvailable && (
          <PreviewSearchSessionList
            title={`Sessions`}
            list={sessions.data.content}
            closePopup={closePopup}
          />
        )}
        {speakersAvailable && (
          <PreviewSearchSpeakerList
            title={`Speakers`}
            list={speakers.data.content}
            closePopup={closePopup}
          />
        )}
        {newsAvailable && (
          <PreviewSearchNewsList title={`News`} list={news.data.content} closePopup={closePopup} />
        )}
      </div>
    )
  );
};

export default PreviewSearchContainer;











