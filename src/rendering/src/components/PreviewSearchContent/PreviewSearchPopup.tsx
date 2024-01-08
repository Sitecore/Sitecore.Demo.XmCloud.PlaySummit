import PreviewSearchNewsList from './PreviewSearchNewsList';
import PreviewSearchSessionList from './PreviewSearchSessionList';
import PreviewSearchSpeakerList from './PreviewSearchSpeakerList';
import SuggestionList from './SuggestionList';
import { SearchResponseSuggestion } from '@sitecore-search/react';
import { NewsCardProps } from './NewsCard';
import { SpeakerCardProps } from './SpeakerCard';
import { SessionCardProps } from './SessionCard';

type PreviewSearchPopupProps = {
  resultsUrl: string;
  sessions: unknown[];
  speakers: unknown[];
  news: unknown[];
  suggestions: SearchResponseSuggestion[];
  close?: () => void;
  widgetRef: (node: Element) => void;
};

const PreviewSearchPopup = ({
  resultsUrl,
  sessions,
  speakers,
  news,
  suggestions,
  widgetRef,
}: PreviewSearchPopupProps): JSX.Element => {
  return (
    <div className="preview-search-content-container" ref={widgetRef}>
      <div className="preview-search-content">
        <div className="preview-search-content-popup">
          {suggestions?.length > 0 && <SuggestionList title="Do you mean?" list={suggestions} />}
          {sessions?.length > 0 && (
            <PreviewSearchSessionList
              resultsUrl={resultsUrl}
              list={sessions as unknown as SessionCardProps[]}
            />
          )}
          {speakers?.length > 0 && (
            <PreviewSearchSpeakerList
              resultsUrl={resultsUrl}
              list={speakers as unknown as SpeakerCardProps[]}
            />
          )}
          {news?.length > 0 && (
            <PreviewSearchNewsList
              resultsUrl={resultsUrl}
              list={news as unknown as NewsCardProps[]}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviewSearchPopup;
