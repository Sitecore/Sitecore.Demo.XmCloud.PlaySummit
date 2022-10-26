import router from 'next/router';
import SessionCard, { SessionCardProps } from './SessionCard';

export type SessionListProps = {
  title?: string;
  list: SessionCardProps[];
  closePopup: () => void;
};

const VIEW_ALL_SESSIONS_URL = '/sessions';

const PreviewSearchSessionList = (props: SessionListProps): JSX.Element => {
  const { title, list, closePopup } = props;

  const viewAllClick = () => {
    closePopup();
    router.push(`${VIEW_ALL_SESSIONS_URL}`);
  };

  return (
    <section className={`session-list item-grid sessions-grid`}>
      <span className={`session-list-title`}>
        {title}
          <a className={`view-all`} onClick={viewAllClick}>
            View All
          </a>
      </span>
      <div className={`grid-content session-list-content`}>
        {list.length > 0 &&
          list.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <SessionCard {...item} />
          ))}
      </div>
    </section>
  );
};

export default PreviewSearchSessionList;
