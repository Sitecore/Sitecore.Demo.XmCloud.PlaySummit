import { PropsWithChildren } from 'react';
import Facets, { FacetsProps } from './Facets';
import Pagination, { PaginationProps } from './Pagination';

export type ResultsTabProps = PropsWithChildren & FacetsProps & PaginationProps;

const ResultsTab = (props: ResultsTabProps): JSX.Element => {
  return (
    <div className="search-results-tab">
      <div className="search-results-tab-filters">
        <Facets
          facets={props.facets}
          filters={props.filters}
          onFacetValueClick={props.onFacetValueClick}
          onFilterClick={props.onFilterClick}
          onClearFilters={props.onClearFilters}
        />
      </div>
      <div className="search-results-tab-content">
        <div className="item-grid sessions-grid">
          <div className="grid-content">{props.children}</div>
        </div>
        <div className="search-results-footer">
          <div>
            <label>Results Per Page</label>
            <select defaultValue={10} className="search-results-per-page">
              <option value={10}>10</option>
              <option value={24}>24</option>
              <option value={48}>48</option>
              <option value={72}>72</option>
            </select>
          </div>
          <Pagination
            currentPage={props.currentPage}
            totalItems={props.totalItems}
            productsPerPage={props.productsPerPage}
            onPageChange={props.onPageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ResultsTab;
