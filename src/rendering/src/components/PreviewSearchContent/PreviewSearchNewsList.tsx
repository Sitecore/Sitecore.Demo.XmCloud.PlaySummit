import NewsCard, { NewsCardProps } from './NewsCard';

export type NewsListProps = {
  resultsUrl: string;
  list?: NewsCardProps[];
};

const PreviewSearchNewsList = (props: NewsListProps): JSX.Element => {
  const { resultsUrl, list = [] } = props;

  return (
    <section className="news-list item-grid">
      <span className="search-list-title news-list-title">
        <span>News</span>
        <a href={`${resultsUrl}&tab=content`} className="view-all">
          View All
        </a>
      </span>
      <div className="grid-content news-list-content">
        {list.length > 0 && list.map((item) => <NewsCard key={item.id} {...item} />)}
      </div>
    </section>
  );
};

export default PreviewSearchNewsList;
