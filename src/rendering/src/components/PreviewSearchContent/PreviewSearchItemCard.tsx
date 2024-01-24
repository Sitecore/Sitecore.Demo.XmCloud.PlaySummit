import Link from 'next/link';

import { getSearchItemHref } from '../../helpers/UrlHelper';
import { useCallback } from 'react';

export type PreviewSearchItemCardProps = {
  id: string;
  name: string;
  url: string;
  image_url: string;
  type: string;
  description?: string;
  publish_date?: string;
};

const PreviewSearchItemCard = ({
  name,
  url,
  image_url,
  type,
  publish_date,
}: PreviewSearchItemCardProps): JSX.Element => {
  const transformPublishDate = useCallback(
    (date?: string) =>
      date
        ? new Date(publish_date).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })
        : '',
    [publish_date]
  );

  return (
    <Link href={getSearchItemHref(type, url)} className="preview-search-item-card">
      <img className="item-image" src={image_url} alt={`${name} image`} />
      <div className="item-details">
        <div className="item-info">
          <span className="item-type">{type}</span>
          {transformPublishDate(publish_date)}
        </div>
        <div className="item-name">{name}</div>
      </div>
    </Link>
  );
};

export default PreviewSearchItemCard;
