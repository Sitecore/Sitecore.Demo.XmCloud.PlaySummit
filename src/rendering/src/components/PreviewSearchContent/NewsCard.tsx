import Link from 'next/link';
import { getAbsoluteUrlPath } from '../../helpers/UrlHelper';

export type NewsCardProps = {
  id: string;
  image_url: string;
  name: string;
  url: string;
  publish_date: string;
};

const NewsCard = (props: NewsCardProps): JSX.Element => {
  const { image_url, name, url, publish_date } = props;

  return (
    <Link href={getAbsoluteUrlPath(url)} className="grid-item news-item">
      <div className="item-details item-details-left">
        <div className="item-title">{name}</div>
        <span className="news-date">{new Date(publish_date).toLocaleString()}</span>
      </div>
      <img className="news-image" src={image_url} alt="News image" height="100" width="100" />
    </Link>
  );
};

export default NewsCard;
