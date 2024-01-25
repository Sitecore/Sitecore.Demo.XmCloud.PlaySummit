import { PropsWithChildren, FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';

import Spinner from '../ShopCommon/Spinner';
import SearchFacets, { SearchFacetsProps } from './SearchFacets';
import Pagination, { SearchPaginationProps } from './SearchPagination';

type SortOption = {
  name: string;
  label: string;
};

export type SearchResultsListingProps = PropsWithChildren &
  SearchFacetsProps &
  SearchPaginationProps & {
    onResultsPerPageChange: (perPage: number) => void;
    onSortChange: (sortChoice: string) => void;
    sort: string;
    sortOptions: SortOption[];
    loading: boolean;
  };

const SearchResultsListing: FC<SearchResultsListingProps> = (props) => {
  const [toggle, setToggle] = useState(false);

  const onToggleClick = () => {
    const isVisible = !toggle;
    setToggle(isVisible);
    document.body.classList.toggle('search-facet-panel-open', isVisible);
  };

  return (
    <div className="search-results-listing">
      <div className="facet-panel-mask"></div>
      <div className="search-results-listing-facets">
        <div className="facets-container">
          <button className="btn-secondary search-results-facets-toggle" onClick={onToggleClick}>
            <FontAwesomeIcon icon={faSlidersH} />
            Filter
          </button>
          <SearchFacets
            facets={props.facets}
            onFacetValueClick={props.onFacetValueClick}
            onClearFilters={props.onClearFilters}
            selectedFacets={props.selectedFacets}
            onRemoveFilter={props.onRemoveFilter}
          />
        </div>
        <div className="button-container">
          <button className="btn-main" onClick={onToggleClick}>
            Show {props.totalItems} results
          </button>
        </div>
      </div>

      <div className="search-results-listing-content">
        <div className="search-results-listing-header">
          {props.sortOptions.length > 0 && (
            <div className="search-results-listing-sort">
              <label>Sort by:</label>
              {props.sortOptions.map(({ name, label }) => (
                <button
                  key={name}
                  value={name}
                  onClick={(e) => {
                    props.onSortChange(e.currentTarget.value);
                  }}
                  className={props.sort === name ? 'active' : ''}
                >
                  {label}
                </button>
              ))}
            </div>
          )}
          <div className="search-results-listing-filter-toggle">
            <button className="btn-main search-results-facets-toggle" onClick={onToggleClick}>
              <FontAwesomeIcon icon={faSlidersH} />
              Filter
            </button>
          </div>
        </div>

        <div className="search-results-listing-results">
          {props.loading ? (
            <div className="search-results-spinner">
              <Spinner loading={props.loading} />
            </div>
          ) : (
            <ul className="search-results-list">{props.children}</ul>
          )}
        </div>

        <div className="search-results-listing-footer">
          <div>
            <label>Results Per Page</label>
            <select
              value={props.perPage}
              className="search-results-listing-per-page"
              onChange={(e) => {
                props.onResultsPerPageChange(Number(e.currentTarget.value));
              }}
            >
              <option value={6}>6</option>
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

export default SearchResultsListing;
