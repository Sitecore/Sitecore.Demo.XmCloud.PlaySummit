import React, { PropsWithChildren, useCallback } from 'react';
import { useRouter } from 'next/router';
import SearchEntityTabs, { Tab } from './SearchEntityTabs';
import SearchFilters, { SearchFiltersProps } from './SearchFilters';
import PreviewSearchInput from '../PreviewSearchContent/PreviewSearchInput';
import PreviewSearchIcon from '../PreviewSearchContent/PreviewSearchIcon';
import PreviewSearchContextProvider from '../PreviewSearchContent/PreviewSearchContextProvider';
import { SEARCH_PAGE, SESSION_SEARCH_RESULT_TYPE } from '../../helpers/ContentSearchHelper';
import Questions from './Questions';

type SearchResultsProps = PropsWithChildren & {
  selectedTab: string;
  filterOptions: SearchFiltersProps['options'];
  tabs: Tab[];
  keyphrase: string;
  totalItems: number;
  onFilterClick: (id: string, value: string) => void;
  onKeyphraseChange: (value: string) => void;
};

const SearchResults = ({
  selectedTab,
  filterOptions,
  tabs,
  keyphrase,
  totalItems,
  onFilterClick,
  onKeyphraseChange,
}: SearchResultsProps): JSX.Element => {
  const router = useRouter();

  const onSearch = useCallback(
    (keyphrase: string) => {
      router.push(`${SEARCH_PAGE}?q=${keyphrase}`);
    },
    [router]
  );

  return (
    <div className="search-results">
      <div className="search-results-header">Search Results</div>
      <div className="search-results-header-search">
        <PreviewSearchContextProvider defaultKeyphrase={keyphrase}>
          <PreviewSearchInput
            placeholder="Search..."
            onEnter={onSearch}
            className="search-results-header-search-input"
          />
          <PreviewSearchIcon onClick={onSearch} className="search-results-header-search-icon" />
        </PreviewSearchContextProvider>
      </div>
      {keyphrase && (
        <Questions rfkId="rfkid_qa" keyphrase={keyphrase} defaultRelatedQuestions={4} />
      )}
      <SearchFilters
        options={filterOptions}
        onChange={onFilterClick}
        className="search-results-filters"
      />
      <SearchEntityTabs
        selected={selectedTab || SESSION_SEARCH_RESULT_TYPE}
        tabs={tabs}
        className="search-results-tabs"
        totalItems={totalItems}
      />
    </div>
  );
};

export default SearchResults;
