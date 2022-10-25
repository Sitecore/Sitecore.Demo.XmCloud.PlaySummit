import Link from 'next/link';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';

export type NewsCardProps = {
  id: string;
  image_url: string;
  name: string;
  url: string;
  publish_date: string;
};

const SessionCard = (props: NewsCardProps): JSX.Element => {
  const { image_url, name, url, publish_date } = props;

  return (
    <Link href={url}>
      <a className={`grid-item news-item`}>
        <div className={`item-details item-details-left`}>
          <Text tag="div" className={`item-title`} field={{ value: name }} />
          <span className={`news-date`}>{publish_date}</span>
        </div>
        <img className={`news-image`} src={image_url} alt={`News image`} height="100" width="100" />
      </a>
    </Link>
  );
};

export default SessionCard;
