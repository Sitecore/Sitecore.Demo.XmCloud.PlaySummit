import React, { PropsWithChildren } from 'react';
import { SearchResponseSuggestion } from '@sitecore-search/react';

import PreviewSearchInput from '../PreviewSearchContent/PreviewSearchInput';
import PreviewSearchIcon from '../PreviewSearchContent/PreviewSearchIcon';
import Questions from './Questions';
import SuggestionList from '../../components/PreviewSearchContent/SuggestionList';

type SearchResultsLayoutProps = PropsWithChildren & {
  keyphrase: string;
  onKeyphraseChange: (value: string) => void;
  onKeyphraseClear: () => void;
  suggestions: SearchResponseSuggestion[];
};

const SearchResultsLayout = ({
  children,
  keyphrase,
  onKeyphraseChange,
  onKeyphraseClear,
  suggestions,
}: SearchResultsLayoutProps): JSX.Element => {
  return (
    <>
      <div className="search-results-header">
        <div className="container">
          <div className="search-results-header-content">
            <h6>FAST, ACCURATE, PERSONALIZED, MULTI-SITE SEARCH</h6>
            <h1>FIND THE MOST RELEVANT CONTENT</h1>
          </div>
          <div className="search-results-header-container">
            <div className="search-results-header-search">
              <PreviewSearchInput
                placeholder="Search..."
                onEnter={onKeyphraseChange}
                className="search-results-header-search-input"
                value={keyphrase}
                onChange={onKeyphraseChange}
                onClear={onKeyphraseClear}
              />
              <PreviewSearchIcon
                onClick={onKeyphraseChange}
                className="search-results-header-search-icon"
                keyphrase={keyphrase}
              />
            </div>
            {keyphrase && (
              <Questions rfkId="rfkid_qa" keyphrase={keyphrase} defaultRelatedQuestions={4} />
            )}
            {suggestions?.length > 0 && <SuggestionList title="Did you mean?" list={suggestions} />}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="search-results-content">{children}</div>
      </div>
    </>
  );
};

export default SearchResultsLayout;
