import { PropsWithChildren, FC } from 'react';
import { DiscoverResponseSortChoice } from '../../interfaces/discover/DiscoverResponse';
import Spinner from '../../components/ShopCommon/Spinner';
import SearchFacets, { FacetsProps } from './SearchFacets';
import Pagination, { PaginationProps } from './SearchPagination';

export type ResultsTabProps = PropsWithChildren &
  FacetsProps &
  PaginationProps & {
    onResultsPerPageChange: (perPage: number) => void;
    onSortChange: (sortChoice: string) => void;
    sort: DiscoverResponseSortChoice['name'];
    sortOptions: DiscoverResponseSortChoice[];
    loading: boolean;
  };

const SearchResultsTab: FC<ResultsTabProps> = (props) => {
  return (
    <div className="search-results-tab">
      <div className="search-results-tab-facets">
        <SearchFacets
          facets={props.facets}
          filters={props.filters}
          onFacetValueClick={props.onFacetValueClick}
          onFilterClick={props.onFilterClick}
          onClearFilters={props.onClearFilters}
        />
      </div>
      <div className="search-results-tab-content">
        <div className="search-results-tab-header">
          {props.sortOptions.length > 0 && (
            <div className="search-results-tab-sort">
              <label>Sort by:</label>
              <select
                value={props.sort}
                onChange={(e) => {
                  props.onSortChange(e.currentTarget.value);
                }}
              >
                {props.sortOptions.map(({ name, label }) => (
                  <option key={name} value={name}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
        <div className="search-results-tab-results">
          {props.loading ? (
            <div className="search-results-spinner">
              <Spinner loading={props.loading} />
            </div>
          ) : (
            props.children
          )}
        </div>
        <div className="search-results-tab-footer">
          <div>
            <label>Results Per Page</label>
            <select
              defaultValue={10}
              className="search-results-tab-per-page"
              onChange={(e) => {
                props.onResultsPerPageChange(Number(e.currentTarget.value));
              }}
            >
              <option value={12}>12</option>
              <option value={24}>24</option>
              <option value={48}>48</option>
              <option value={72}>72</option>
            </select>
          </div>
          <Pagination
            currentPage={props.currentPage}
            totalItems={props.totalItems}
            perPage={props.perPage}
            onPageChange={props.onPageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchResultsTab;
