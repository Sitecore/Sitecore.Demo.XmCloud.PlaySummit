import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import ProductCard, { ProductCardProps } from '../../components/ShopCommon/ProductCard';

export default {
  title: 'Components/ShopCommon/ProductCard',
  component: ProductCard,
} as Meta<typeof ProductCard>;

export const Default = {
  args: {
    brand: 'CenterCycle',
    final_price: '6.99',
    final_price_min_formatted: 6.99,
    final_price_max_formatted: 6.99,
    image_url: 'https://ch.sitecoredemo.com/api/public/content/bike-hand-pump-product?v=4e0023e4',
    name: 'CenterCycle Hand Pump',
    product_url: '/shop/products/centercycle-hand-pump',
    onClick: () => {
      return null;
    },
    price: '6.99',
  } as ProductCardProps,

  decorators: [
    (Story: StoryFn) => (
      <ul className="product-list">
        <li className="product-list-item">
          <Story />
        </li>
      </ul>
    ),
  ],
};

export const AlternativeTheme = {
  args: {
    brand: 'CenterCycle',
    final_price: '6.99',
    final_price_min_formatted: 6.99,
    final_price_max_formatted: 6.99,
    image_url: 'https://ch.sitecoredemo.com/api/public/content/bike-hand-pump-product?v=4e0023e4',
    name: 'CenterCycle Hand Pump',
    product_url: '/shop/products/centercycle-hand-pump',
    onClick: () => {
      return null;
    },
    price: '6.99',
    altTheme: true,
  } as ProductCardProps,

  decorators: [
    (Story: StoryFn) => (
      <ul className="product-list">
        <li className="product-list-item">
          <Story />
        </li>
      </ul>
    ),
  ],
};
