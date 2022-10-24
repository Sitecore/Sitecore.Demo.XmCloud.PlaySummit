import Link from 'next/link';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';

export type ItemCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  url: string;
};

const ItemCard = (props: ItemCardProps): JSX.Element => {
  return (
    <Link href={props.url}>
      <a className={`item`}>
        <img className={`item-img`} src={props.imageSrc} alt={`Item img`} />
        <div className={`item-details item-details-left`}>
          <Text tag="div" className={`item-title`} field={{ value: props.title }} />
        </div>
      </a>
    </Link>
  );
};

export default ItemCard;
