import { sessionAdapter } from '../../helpers/ContentSearchHelper';
import { ContentSearchSession } from '../../interfaces/contentSearch/ContentSearchSession';
import SessionItem from '../Sessions/SessionItem';
import SearchResultsTab, { SearchResultsTabProps } from './SearchResultsTab';

type SearchSessionResultsTabProps = SearchResultsTabProps & {
  items: ContentSearchSession[];
};

const SearchSessionResultsTab = (props: SearchSessionResultsTabProps): JSX.Element => {
  return (
    <SearchResultsTab
      loading={props.loading}
      facets={props.facets}
      filters={props.filters}
      perPage={props.perPage}
      currentPage={props.currentPage}
      onResultsPerPageChange={props.onResultsPerPageChange}
      onSortChange={props.onSortChange}
      sort={props.sort}
      sortOptions={props.sortOptions}
      onPageChange={props.onPageChange}
      totalItems={props.totalItems}
      onClearFilters={props.onClearFilters}
      onFacetValueClick={props.onFacetValueClick}
      onFilterClick={props.onFilterClick}
    >
      <div className="item-grid sessions-grid">
        <div className="grid-content">
          {props.items.map((session, index) => (
            <SessionItem key={index} session={sessionAdapter(session)} />
          ))}
        </div>
      </div>
    </SearchResultsTab>
  );
};

export default SearchSessionResultsTab;
