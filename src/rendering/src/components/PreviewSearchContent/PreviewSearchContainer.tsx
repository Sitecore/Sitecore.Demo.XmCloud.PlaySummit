import PreviewSearchPopup from './PreviewSearchPopup';
import { SEARCH_PAGE } from '../../helpers/ContentSearchHelper';
import { SearchResponseSuggestion } from '@sitecore-search/react';

type PreviewSearchContainerProps = {
  close?: () => void;
  sessions: unknown[];
  speakers: unknown[];
  news: unknown[];
  suggestions: SearchResponseSuggestion[];
  keyphrase: string;
  widgetRef: (node: Element) => void;
};

const PreviewSearchContainer = ({
  close,
  sessions,
  speakers,
  news,
  suggestions,
  keyphrase,
  widgetRef,
}: PreviewSearchContainerProps): JSX.Element => {
  return (
    <PreviewSearchPopup
      // we want to generate the correct search results url based on the current response keyphrase to avoid unnecessary re-renders
      resultsUrl={`${SEARCH_PAGE}?q=${keyphrase}`}
      sessions={sessions}
      speakers={speakers}
      news={news}
      suggestions={suggestions}
      close={close}
      widgetRef={widgetRef}
    />
  );
};

export default PreviewSearchContainer;
