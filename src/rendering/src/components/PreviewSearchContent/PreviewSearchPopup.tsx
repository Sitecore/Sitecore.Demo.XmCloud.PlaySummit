import { forwardRef } from 'react';
import { ContentSearchNews } from '../../interfaces/contentSearch/ContentSearchNews';
import { ContentSearchWidgetResponse } from '../../interfaces/contentSearch/ContentSearchWidgetResponse';
import { ContentSearchSession } from '../../interfaces/contentSearch/ContentSearchSession';
import { ContentSearchSpeaker } from '../../interfaces/contentSearch/ContentSearchSpeaker';
import PreviewSearchNewsList from './PreviewSearchNewsList';
import PreviewSearchSessionList from './PreviewSearchSessionList';
import PreviewSearchSpeakerList from './PreviewSearchSpeakerList';
import SuggestionList from './SuggestionList';

type PreviewSearchPopupProps = {
  resultsUrl: string;
  news: ContentSearchWidgetResponse<ContentSearchNews>;
  sessions: ContentSearchWidgetResponse<ContentSearchSession>;
  speakers: ContentSearchWidgetResponse<ContentSearchSpeaker>;
  close?: () => void;
};

type Suggestion = {
  text: string;
  freq: number;
};

type SuggestionMap = {
  [key: string]: Array<Suggestion>;
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

const PreviewSearchPopup = forwardRef<HTMLDivElement, PreviewSearchPopupProps>(
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

export default PreviewSearchPopup;
