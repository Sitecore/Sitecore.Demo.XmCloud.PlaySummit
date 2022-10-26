import router from 'next/router';
import NewsCard, { NewsCardProps } from './NewsCard';

export type NewsListProps = {
  title?: string;
  list: NewsCardProps[];
  closePopup: () => void;
};

const VIEW_ALL_NEWS_URL = '/news';

const PreviewSearchNewsList = (props: NewsListProps): JSX.Element => {
  const { title, list, closePopup } = props;

  const viewAllClick = () => {
    closePopup();
    router.push(`${VIEW_ALL_NEWS_URL}`);
  };

  return (
    <section className={`news-list item-grid sessions-grid`}>
      <span className={`news-list-title`}>
        {title}
        <a className={`view-all`} onClick={viewAllClick}>
          View All
        </a>
      </span>
      <div className={`grid-content news-list-content`}>
        {list.length > 0 &&
          list.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <NewsCard {...item} />
          ))}
      </div>
    </section>
  );
};

export default PreviewSearchNewsList;
