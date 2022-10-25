import Link from 'next/link';
import SessionCard, { SessionCardProps } from './SessionCard';

export type SessionListProps = {
  title?: string;
  list: SessionCardProps[];
};

const VIEW_ALL_SESSIONS_URL = '/en/sessions';

const PreviewSearchSessionList = (props: SessionListProps): JSX.Element => {
  const { title, list } = props;
  return (
    <section className={`session-list item-grid sessions-grid`}>
      <span className={`session-list-title`}>
        {title}
        <Link href={VIEW_ALL_SESSIONS_URL}>
          <a className={`view-all`}>View All</a>
        </Link>
      </span>
      <div className={`grid-content session-list-content`}>
        {list.length > 0
          ? list.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <SessionCard {...item} />
            ))
          : null}
      </div>
    </section>
  );
};

export default PreviewSearchSessionList;
