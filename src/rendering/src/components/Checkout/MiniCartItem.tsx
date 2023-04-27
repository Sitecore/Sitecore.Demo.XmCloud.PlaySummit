import { DLineItem } from '../../models/ordercloud/DLineItem';
import Link from 'next/link';
import { useAppDispatch } from '../../redux/store';
import { useCallback, useState } from 'react';
import { removeLineItem } from '../../redux/ocCurrentCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { getImageUrl, getProductSpecs } from '../../helpers/LineItemsHelpers';
import { logAddToCart } from '../../services/CdpService';
import { getPublicAssetUrl } from '../../../src/helpers/PublicUrlHelper';

type MiniCartItemProps = {
  lineItem: DLineItem;
};

const MiniCartItem = (props: MiniCartItemProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const publicUrl = getPublicAssetUrl();

  const handleRemoveItem = useCallback(async () => {
    setLoading(true);
    await dispatch(removeLineItem(props.lineItem.ID));

    logAddToCart(props.lineItem, -props.lineItem.Quantity);
  }, [dispatch, props.lineItem]);

  const btnRemove = (
    <button
      className="item-remove"
      aria-label="Remove Item"
      title="Remove Item"
      type="button"
      disabled={loading}
      onClick={handleRemoveItem}
    >
      <FontAwesomeIcon icon={faTrashAlt} />
    </button>
  );

  const productImage = (
    <img
      src={getImageUrl(props.lineItem) || `${publicUrl}/assets/img/shop/category-placeholder.png`}
      alt={props.lineItem.Product.Name}
    ></img>
  );

  const productSpecs = getProductSpecs(props.lineItem).map((obj) => {
    const [key, value] = Object.entries(obj)[0];
    return <p key={key}>{value}</p>;
  });

  return (
    <li>
      {btnRemove}
      <Link href={props.lineItem.Product.xp?.ProductUrl} className="mini-cart-list-item">
        <div className="item-image">{productImage}</div>
        <div className="item-details">
          <h4 className="item-name">{props.lineItem.Product.Name}</h4>
          <p>{props.lineItem.Product.xp?.Brand}</p>
          {productSpecs}
          <p>Quantity: {props.lineItem.Quantity}</p>
          <p className="item-price">${props.lineItem.LineSubtotal}</p>
        </div>
      </Link>
    </li>
  );
};

export default MiniCartItem;
