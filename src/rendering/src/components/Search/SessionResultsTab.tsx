import { GraphQLSession } from '../../types/session';
import SessionItem from '../Sessions/SessionItem';
import { FacetsProps } from './Facets';
import ResultsTab from './ResultsTab';

export type SessionResultsTabProps = FacetsProps & {
  items: GraphQLSession[];
};

const SessionResultsTab = (props: SessionResultsTabProps): JSX.Element => {
  return (
    <ResultsTab facets={props.facets} filters={props.filters}>
      {props.items.map((session, index) => (
        <SessionItem key={index} session={session} />
      ))}
    </ResultsTab>
  );
};

export default SessionResultsTab;
