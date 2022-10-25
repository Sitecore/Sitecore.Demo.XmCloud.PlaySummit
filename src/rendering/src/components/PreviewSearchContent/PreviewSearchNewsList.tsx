import Link from 'next/link';
import NewsCard, { NewsCardProps } from './NewsCard';

export type NewsListProps = {
  title?: string;
  list: NewsCardProps[];
};

const VIEW_ALL_NEWS_URL = '/en/news';

const PreviewSearchNewsList = (props: NewsListProps): JSX.Element => {
  const { title, list } = props;
  return (
    <section className={`news-list item-grid sessions-grid`}>
      <span className={`news-list-title`}>
        {title}
        <Link href={VIEW_ALL_NEWS_URL}>
          <a className={`view-all`}>View All</a>
        </Link>
      </span>
      <div className={`grid-content news-list-content`}>
        {list.length > 0
          ? list.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <NewsCard {...item} />
            ))
          : null}
      </div>
    </section>
  );
};

export default PreviewSearchNewsList;
