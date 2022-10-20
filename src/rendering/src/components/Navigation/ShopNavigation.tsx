import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import MiniCart from '../Checkout/MiniCart';
import CartBadge from '../ShopCommon/CartBadge';
import { isAuthenticationEnabled } from '../../services/AuthenticationService';
import ClickOutside from '../ShopCommon/ClickOutside';
import AccountPopup from './AccountPopup';
import { getPublicAssetUrl } from '../../../src/helpers/PublicUrlHelper';

const ShopNavigation = (): JSX.Element => {
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);
  const miniCartRef = useRef(null);
  const closeMinicart = () => setIsMiniCartOpen(false);
  ClickOutside([miniCartRef], closeMinicart);

  const [isAccountPopupOpen, setIsAccountPopupOpen] = useState(false);
  const accountPopupRef = useRef(null);
  const closeAccountPopup = () => setIsAccountPopupOpen(false);
  ClickOutside([accountPopupRef], closeAccountPopup);

  const publicUrl = getPublicAssetUrl();

  const accountPopupActiveClass = isAccountPopupOpen ? 'active' : '';
  const accountPopupOpenClass = isAccountPopupOpen ? 'open' : '';
  const accountMenuItem = isAuthenticationEnabled && (
    <li className={`shop-navigation-menu-item ${accountPopupActiveClass}`} ref={accountPopupRef}>
      <button onClick={() => setIsAccountPopupOpen(!isAccountPopupOpen)}>
        <FontAwesomeIcon id="user-icon" icon={faUserCircle} />
      </button>
      <div className={`account-popup-wrapper ${accountPopupOpenClass}`}>
        <AccountPopup onNavigatingAway={closeAccountPopup} />
      </div>
    </li>
  );

  const handleCartIconClick = () => {
    setIsMiniCartOpen(!isMiniCartOpen);
  };

  const miniCartActiveClass = isMiniCartOpen ? 'active' : '';
  const miniCartOpenClass = isMiniCartOpen ? 'open' : '';

  return (
    <nav className="shop-navigation">
      <div className="shop-container shop-navigation-content">
        <div className="logo-container">
          <Link href="/shop">
            <a className="logo-link">
              <img src={`${publicUrl}/assets/img/shop/play-shop-logo.svg`} alt="PLAY! SHOP" />
            </a>
          </Link>
        </div>
        <div className="items-container">
          <ul>
            <li
              className={`shop-navigation-menu-item cart-menu-item ${miniCartActiveClass}`}
              ref={miniCartRef}
            >
              <button onClick={handleCartIconClick}>
                <FontAwesomeIcon id="cart-icon" icon={faShoppingCart} />
                <CartBadge />
              </button>
              <div className={`mini-cart-wrapper ${miniCartOpenClass}`}>
                <MiniCart onNavigatingAway={closeMinicart} />
              </div>
            </li>
            {accountMenuItem}
          </ul>
        </div>
        <div className="shop-search-input-container">
          <div id="search-input-container"></div>
        </div>
      </div>
    </nav>
  );
};

export default ShopNavigation;
