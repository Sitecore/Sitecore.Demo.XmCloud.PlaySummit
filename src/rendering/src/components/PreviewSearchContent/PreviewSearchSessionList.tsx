import SessionCard, { SessionCardProps } from './SessionCard';

export type SessionListProps = {
  resultsUrl: string;
  list?: SessionCardProps[];
};

const PreviewSearchSessionList = (props: SessionListProps): JSX.Element => {
  const { resultsUrl, list = [] } = props;

  return (
    <section className="session-list item-grid sessions-grid">
      <span className="search-list-title session-list-title">
        <span>Sessions</span>
        <a href={`${resultsUrl}&tab=session`} className="view-all">
          View All
        </a>
      </span>
      <div className="grid-content session-list-content">
        {list.length > 0 && list.map((item) => <SessionCard key={item.id} {...item} />)}
      </div>
    </section>
  );
};

export default PreviewSearchSessionList;
