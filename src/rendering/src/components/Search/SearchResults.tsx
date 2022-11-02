import React, { PropsWithChildren, useContext } from 'react';
import SearchEntityTabs, { Tab } from './SearchEntityTabs';
import SearchFilters, { SearchFiltersProps } from './SearchFilters';
import { SearchContext } from './SearchProvider';

type SearchResultsProps = PropsWithChildren & {
  selectedTab: string;
  filterOptions: SearchFiltersProps['options'];
  tabs: Tab[];
};

const SearchResults = (props: SearchResultsProps): JSX.Element => {
  const { keyphrase, onChangeFilter } = useContext(SearchContext);

  return (
    <div className="search-results">
      {keyphrase && (
        <div className="search-results-header">Results for: &quot;{keyphrase}&quot;</div>
      )}
      <SearchFilters
        options={props.filterOptions}
        onChange={onChangeFilter}
        className="search-results-filters"
      />
      <SearchEntityTabs
        selected={props.selectedTab || 'session'}
        tabs={props.tabs}
        className="search-results-tabs"
      />
    </div>
  );
};

export default SearchResults;
