import { PaginationProps } from 'components/Search/Pagination';
import { GraphQLSession } from '../../types/session';
import SessionItem from '../Sessions/SessionItem';
import { FacetsProps } from './Facets';
import ResultsTab from './ResultsTab';

export type SessionResultsTabProps = FacetsProps &
  PaginationProps & {
    items: GraphQLSession[];
  };

const SessionResultsTab = (props: SessionResultsTabProps): JSX.Element => {
  return (
    <ResultsTab
      facets={props.facets}
      filters={props.filters}
      productsPerPage={props.productsPerPage}
      currentPage={props.currentPage}
      onPageChange={props.onPageChange}
      totalItems={props.totalItems}
      onClearFilters={props.onClearFilters}
      onFacetValueClick={props.onFacetValueClick}
      onFilterClick={props.onFilterClick}
    >
      {props.items.map((session, index) => (
        <SessionItem key={index} session={session} />
      ))}
    </ResultsTab>
  );
};

export default SessionResultsTab;
