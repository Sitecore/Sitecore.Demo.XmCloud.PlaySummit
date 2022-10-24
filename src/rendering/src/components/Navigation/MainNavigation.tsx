import { Action, ActionPropPayload } from '@sitecore-discover/core';
import { PreviewSearchSuggestionChangedActionPayload, PreviewSearchTrendingCategoryChangedActionPayload, PreviewSearchKeyphraseChangedActionPayload, PreviewSearchCategoryChangedActionPayload } from '@sitecore-discover/widgets';
import { Image, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import PreviewSearch, { PreviewSearchProps } from '../PreviewSearchContent/PreviewSearch';
import { ComponentProps } from 'lib/component-props';
import Link from 'next/link';
import { useState } from 'react';
import { isCommerceEnabled } from '../../helpers/CommerceHelper';
import debounce from '../../helpers/Debounce';

export type MainNavigationProps = ComponentProps & {
  fields: {
    data: {
      item: {
        headerLogo: {
          jsonValue: ImageField;
          alt: string;
        };
      };
      links: {
        children: {
          results: [
            {
              displayName: string;
              field: {
                jsonValue: {
                  value: {
                    anchor: string;
                    href: string;
                    linktype: string;
                    target: string;
                    text: string;
                    url: string;
                  };
                };
              };
            }
          ];
        };
      };
    };
  };
  previewSearchProps?: PreviewSearchProps; // For Storybook support
};

const MainNavigation = (props: MainNavigationProps): JSX.Element => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const shopLink = isCommerceEnabled && (
    <li className="text-menu-item">
      <Link href="/shop">
        <a>Shop</a>
      </Link>
    </li>
  );

  const searchContent: (text: string) => void = debounce(
    (text) => {
      // TODO PSC: Must add request
      /*
      const changeKeyphraseAction: Action = {
        type: PreviewSearchActions.KEYPHRASE_CHANGED,
        payload: { keyphrase: text || '' },
      };
      */
      //dispatch(changeKeyphraseAction); //setViewAllUrl(`/shop/products/?q=${text || ''}`);
    },
    500,
    null
  );

  // TODO PSC: Review component logic
  const previewSearchWidget = (
    <PreviewSearch searchContent={searchContent} {...props.previewSearchProps} />
  );

  return (
    <nav className="main-navigation">
      <div className="navigation-content">
        <div className="controls-container">
          <Link href="/">
            <a className="logo-link">
              <Image
                field={props.fields.data.item.headerLogo.jsonValue}
                alt={props.fields.data.item.headerLogo.alt}
              />
            </a>
          </Link>
          <button
            className="items-toggle"
            aria-label="open menu"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className={'items-container' + (navbarOpen ? ' opened' : ' closed')}>
          <ul>
            {props.fields?.data?.links?.children?.results?.map((item, index) => (
              <li className="text-menu-item" key={index}>
                <Link href={item.field?.jsonValue?.value?.href ?? '#'} prefetch={false}>
                  <a>{item.displayName}</a>
                </Link>
              </li>
            ))}
            {shopLink}
            <li className="button-menu-item">
              <Link href="/tickets">
                <a className="btn-main">Book Tickets</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="shop-search-input-container">
          <div id="search-input-container">{previewSearchWidget}</div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
