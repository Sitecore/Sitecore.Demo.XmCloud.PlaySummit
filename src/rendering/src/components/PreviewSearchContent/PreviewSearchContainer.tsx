import { useEffect, useRef, forwardRef } from 'react';
import useDiscoverQueries from '../../hooks/useDiscoverQueries';
import { DiscoverNews } from '../../interfaces/discover/DiscoverNews';
import { DiscoverResponse } from '../../interfaces/discover/DiscoverResponse';
import { DiscoverSession } from '../../interfaces/discover/DiscoverSession';
import { DiscoverSpeaker } from '../../interfaces/discover/DiscoverSpeaker';
import PreviewSearchNewsList from './PreviewSearchNewsList';
import PreviewSearchSessionList from './PreviewSearchSessionList';
import PreviewSearchSpeakerList from './PreviewSearchSpeakerList';
import SuggestionList from './SuggestionList';

export type PreviewSearchPopupProps = {
  resultsUrl: string;
  news: DiscoverResponse<DiscoverNews>;
  sessions: DiscoverResponse<DiscoverSession>;
  speakers: DiscoverResponse<DiscoverSpeaker>;
  close?: () => void;
};

export type PreviewSearchContainerProps = {
  keyphrase: string;
  close?: () => void;
};

type Suggestion = {
  text: string;
  freq: number;
};

type SuggestionMap = {
  [key: string]: Array<Suggestion>;
};

const discoverSuggestionByEntity = {
  session: [{ name: 'session_name_context_aware' }],
  content: [{ name: 'content_name_context_aware' }],
  speaker: [{ name: 'speaker_name_context_aware' }],
};

const getSuggestions = (
  newsSuggestions: SuggestionMap,
  sessionsSuggestions: SuggestionMap,
  speakersSuggestions: SuggestionMap
) => [
  ...((newsSuggestions && newsSuggestions['content_name_context_aware']) || []),
  ...((sessionsSuggestions && sessionsSuggestions['session_name_context_aware']) || []),
  ...((speakersSuggestions && speakersSuggestions['speaker_name_context_aware']) || []),
];

export const PreviewSearchPopup = forwardRef<HTMLDivElement, PreviewSearchPopupProps>(
  (
    { resultsUrl, news, sessions, speakers }: PreviewSearchPopupProps,
    forwardedRef
  ): JSX.Element => {
    const suggestions = getSuggestions(
      news?.suggestion as unknown as SuggestionMap,
      sessions?.suggestion as unknown as SuggestionMap,
      speakers?.suggestion as unknown as SuggestionMap
    );
    const sessionsAvailable = sessions && sessions.total_item > 0;
    const speakersAvailable = speakers && speakers.total_item > 0;
    const newsAvailable = news && news.total_item > 0;

    return (
      ((suggestions && suggestions.length > 0) ||
        sessionsAvailable ||
        speakersAvailable ||
        newsAvailable) && (
        <div className="preview-search-content-container" ref={forwardedRef}>
          <div className="preview-search-content">
            <div className="preview-search-content-popup">
              {suggestions && suggestions.length > 0 && (
                <SuggestionList title="Do you mean?" list={suggestions} />
              )}
              {sessionsAvailable && (
                <PreviewSearchSessionList resultsUrl={resultsUrl} list={sessions.content} />
              )}
              {speakersAvailable && (
                <PreviewSearchSpeakerList resultsUrl={resultsUrl} list={speakers.content} />
              )}
              {newsAvailable && (
                <PreviewSearchNewsList resultsUrl={resultsUrl} list={news.content} />
              )}
            </div>
          </div>
        </div>
      )
    );
  }
);
PreviewSearchPopup.displayName = 'PreviewSearchPopup';

const PreviewSearchContainer = ({ keyphrase, close }: PreviewSearchContainerProps): JSX.Element => {
  const {
    isLoading,
    result: [news, sessions, speakers],
  } = useDiscoverQueries<
    [
      DiscoverResponse<DiscoverNews>,
      DiscoverResponse<DiscoverSession>,
      DiscoverResponse<DiscoverSpeaker>
    ]
  >(
    ['content', 'session', 'speaker'],
    {
      keyphrase,
      limit: 4,
      widgetId: 'rfkid_6',
    },
    {
      session: {
        search: {
          suggestion: discoverSuggestionByEntity.session,
        },
      },
      speaker: {
        search: {
          suggestion: discoverSuggestionByEntity.speaker,
        },
      },
      content: {
        search: {
          suggestion: discoverSuggestionByEntity.content,
        },
      },
    }
  );

  const keyphraseRef = useRef<string>();
  useEffect(() => {
    if (!isLoading) {
      keyphraseRef.current = keyphrase;
    }
  }, [isLoading, keyphrase]);

  return (
    <PreviewSearchPopup
      // we want to generate the correct search results url based on the current response keyphrase to avoid unnecessary re-renders
      resultsUrl={`/search?q=${keyphraseRef.current}`}
      news={news}
      sessions={sessions}
      speakers={speakers}
      close={close}
    />
  );
};

export default PreviewSearchContainer;
