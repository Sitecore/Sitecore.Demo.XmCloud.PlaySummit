import Link from 'next/link';
import {
  Image,
  Text,
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
          <Image className="item-image" field={news?.fields?.Image} alt="News" loading="lazy" />
          <div className="item-data">
            <Text tag="h3" field={news?.fields?.Title} />
            <Link href={news.url} passHref className="item-data-button">
              Read More
            </Link>
          </div>
        </div>
      ));

  const newsGrid = hasNews && <div className={`news-grid ${sxaStyles}`}>{newsCards}</div>;

  return (
    <>
      {newsGrid}
      {pageEditingMissingDatasource}
    </>
  );
};

export default NewsGrid;
