import { PropsWithChildren, FC, useState } from 'react';
import { ContentSearchWidgetResponseSortChoice } from '../../interfaces/contentSearch/ContentSearchWidgetResponse';
import Spinner from '../ShopCommon/Spinner';
import SearchFacets, { SearchFacetsProps } from './SearchFacets';
import Pagination, { SearchPaginationProps } from './SearchPagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';

export type SearchResultsTabProps = PropsWithChildren &
  SearchFacetsProps &
  SearchPaginationProps & {
    onResultsPerPageChange: (perPage: number) => void;
    onSortChange: (sortChoice: string) => void;
    sort: ContentSearchWidgetResponseSortChoice['name'];
    sortOptions: ContentSearchWidgetResponseSortChoice[];
    loading: boolean;
  };

const SearchResultsTab: FC<SearchResultsTabProps> = (props) => {
  const [toggle, setToggle] = useState(false);

  const onToggleClick = () => {
    const isVisible = !toggle;
    setToggle(isVisible);
    document.body.classList.toggle('search-facet-panel-open', isVisible);
  };

  return (
    <div className="search-results-tab">
      <div className="facet-panel-mask"></div>
      <div className="search-results-tab-facets">
        <div className="facets-container">
          <button className="btn-secondary search-results-facets-toggle" onClick={onToggleClick}>
            <FontAwesomeIcon icon={faSlidersH} />
            Filter
          </button>
          <SearchFacets
            facets={props.facets}
            filters={props.filters}
            onFacetValueClick={props.onFacetValueClick}
            onFilterClick={props.onFilterClick}
            onClearFilters={props.onClearFilters}
          />
        </div>
        <div className="button-container">
          <button className="btn-main" onClick={onToggleClick}>
            Show {props.totalItems} results
          </button>
        </div>
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
          <div className="search-results-tab-filter-toggle">
            <button className="btn-main search-results-facets-toggle" onClick={onToggleClick}>
              <FontAwesomeIcon icon={faSlidersH} />
              Filter
            </button>
          </div>
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
              value={props.perPage}
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
