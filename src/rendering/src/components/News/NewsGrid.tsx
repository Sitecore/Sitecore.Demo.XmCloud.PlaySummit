import profile from '../../../public/assets/img/news/profile-pic.jpg';
import Link from 'next/link';
import {
  Image,
  withDatasourceCheck,
  LayoutServicePageState,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { News } from 'src/types/news';
import { getPublicAssetUrl } from '../../../src/helpers/PublicUrlHelper';

type NewsGridProps = ComponentProps & {
  fields: {
    items: News[];
  };
};

const NewsGrid = (props: NewsGridProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();

  const isPageEditing = sitecoreContext.pageState === LayoutServicePageState.Edit;
  const hasNews = !!props.fields;
  const publicUrl = getPublicAssetUrl();

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
        <div key={index} className="news-grid-item">
          <Link href={news.url} passHref>
            <img
              className="item-image"
              src={news.fields.Image?.value?.src}
              alt="News"
              width="465px"
              height="260px"
              loading="lazy"
            />
            {news.fields.Title?.value}
          </Link>
        </div>
      ));

  const newsGrid = hasNews && (
    <div className={`section-news-grid ${sxaStyles}`}>
      <div className="news-tweet">
        <img
          src={`${publicUrl}/assets/img/news/conference-image.jpg`}
          alt="News"
          width="465px"
          height="388px"
          className="tweet-img"
          loading="lazy"
        />
        <div className="tweet-content">
          <div className="tweet-profile">
            <Image
              src={profile}
              alt="News"
              width="60px"
              className="tweet-profile-pic"
              loading="lazy"
            />
            <div className="tweet-profile-content">
              <p>John Doe - @jdoe</p>
              <p>2h ago</p>
            </div>
          </div>
          <p className="tweet-content-body">Hyped for this year&apos;s edition of Play! Summit</p>
          <p className="tweet-content-link">#play! #sports</p>
          <p className="tweet-content-comments">View all 50 comments</p>
        </div>
      </div>
      <div className="news-grid-container">
        <div className="news-grid">{newsCards}</div>
      </div>
    </div>
  );

  return (
    <>
      {newsGrid}
      {pageEditingMissingDatasource}
    </>
  );
};

export const Default = withDatasourceCheck()<NewsGridProps>(NewsGrid);
