import React, { PropsWithChildren, useCallback, useContext } from 'react';
import { useRouter } from 'next/router';
import SearchEntityTabs, { Tab } from './SearchEntityTabs';
import SearchFilters, { SearchFiltersProps } from './SearchFilters';
import { SearchContext } from './SearchProvider';
import PreviewSearchInput from '../PreviewSearchContent/PreviewSearchInput';
import PreviewSearchIcon from '../PreviewSearchContent/PreviewSearchIcon';
import PreviewSearchContextProvider from '../PreviewSearchContent/PreviewSearchContextProvider';
import { SEARCH_PAGE, SESSION_SEARCH_RESULT_TYPE } from '../../helpers/ContentSearchHelper';
import Questions from './Questions';

type SearchResultsProps = PropsWithChildren & {
  selectedTab: string;
  filterOptions: SearchFiltersProps['options'];
  tabs: Tab[];
};

const SearchResults = (props: SearchResultsProps): JSX.Element => {
  const router = useRouter();
  const { keyphrase, onChangeFilter } = useContext(SearchContext);

  const onSearch = useCallback(
    (keyphrase: string) => {
      router.push(`${SEARCH_PAGE}?q=${keyphrase}`);
    },
    [router]
  );

  return (
    <div className="search-results">
      <div className="search-results-header">
        <div className="container">
          <div className="search-results-header-content">
            <h6>FAST, ACCURATE, PERSONALIZED, MULTI-SITE SEARCH</h6>
            <h1>FIND THE MOST RELEVANT CONTENT</h1>
          </div>
          <div className="search-results-header-container">
            <div className="search-results-header-search">
              <PreviewSearchContextProvider defaultKeyphrase={keyphrase}>
                <PreviewSearchInput
                  placeholder="Search..."
                  onEnter={onSearch}
                  className="search-results-header-search-input"
                />
                <PreviewSearchIcon
                  onClick={onSearch}
                  className="search-results-header-search-icon"
                />
              </PreviewSearchContextProvider>
            </div>
            {keyphrase && (
              <Questions rfkId="rfkid_qa" keyphrase={keyphrase} defaultRelatedQuestions={4} />
            )}
          </div>
        </div>
      </div>
      <div className="component container col-12 my-8">
        <div className="component-content">
          <div className="row">
            <SearchFilters
              options={props.filterOptions}
              onChange={onChangeFilter}
              className="search-results-filters"
            />
            <SearchEntityTabs
              selected={props.selectedTab || SESSION_SEARCH_RESULT_TYPE}
              tabs={props.tabs}
              className="search-results-tabs"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
