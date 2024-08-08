import Link from 'next/link';
import {
  withDatasourceCheck,
  LayoutServicePageState,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { News } from 'src/types/news';

type NewsGridProps = ComponentProps & {
  fields: {
    items: News[];
  };
};

const NewsGrid = (props: NewsGridProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();

  const isPageEditing = sitecoreContext.pageState === LayoutServicePageState.Edit;
  const hasNews = !!props.fields;

  const sxaStyles = `${props.params?.styles || ''}`;

  !hasNews && console.warn('Missing Datasource Item');

  const pageEditingMissingDatasource = !hasNews && isPageEditing && <p>Missing Datasource Item</p>;

  const newsCards =
    props.fields?.items &&
    props.fields.items
      .sort((a, b) => a.fields.PublishDate.value.localeCompare(b.fields.PublishDate.value))
      .reverse()
      .slice(0, 4)
      .map((news, index) => (
        <div key={index} className="news-grid-item bg-[#fff]">
          <img
            className="item-image"
            src={news.fields.Image?.value?.src}
            alt="News"
            width="465px"
            height="260px"
            loading="lazy"
          />
          <div className="item-data">
            <h3>{news.fields.Title?.value}</h3>
            <Link href={news.url} passHref className="item-data-button">
              Read More
            </Link>
          </div>
        </div>
      ));

  const newsGrid = hasNews && (
    <section className={`section-news ${sxaStyles} bg-[#f8f8f8]`}>
      <div className="container section-news-container">
        <div className="news-tweet">
          <h2 className="NewsHeading">NEWS HIGHLIGHTS</h2>
          <Link href={'/news'} className="news-tweet-button">
            Visit The Newsroom
          </Link>
        </div>
        <div className="news-grid-container">
          <div className="news-grid">{newsCards}</div>
        </div>
      </div>
    </section>
  );

  return (
    <>
      {newsGrid}
      {pageEditingMissingDatasource}
    </>
  );
};

export const Default = withDatasourceCheck()<NewsGridProps>(NewsGrid);
