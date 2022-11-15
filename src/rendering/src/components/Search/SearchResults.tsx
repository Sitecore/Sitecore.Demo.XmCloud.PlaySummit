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

  const headerText = keyphrase ? `Results for: "${keyphrase}"` : 'Search Results';

  return (
    <div className="search-results">
      <div className="search-results-header">{headerText}</div>
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
