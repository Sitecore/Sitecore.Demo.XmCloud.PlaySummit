import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import GiftCheckboxLineItem from '../../components/Checkout/GiftCheckboxLineItem';
import { MockStore } from '../mock-store';
import { cartSlice } from './CheckoutCommon';

export default {
  title: 'Components/Checkout/GiftCheckboxLineItem',
  component: GiftCheckboxLineItem,
} as Meta<typeof GiftCheckboxLineItem>;

const mockLineItem = {
  ProductID: 'product123',
  Quantity: 1,
  ID: 'mocklineitem',
};

export const IsGift = {
  args: {
    lineItem: {
      ...mockLineItem,
      xp: {
        IsGift: true,
      },
    },
  },

  decorators: [
    (Story: StoryFn) => (
      <MockStore sliceOrSlices={cartSlice}>
        <div className="cart-details">
          <Story />
        </div>
      </MockStore>
    ),
  ],
};

export const IsNotGift = {
  args: {
    lineItem: {
      ...mockLineItem,
      xp: {
        IsGift: false,
      },
    },
  },

  decorators: [
    (Story: StoryFn) => (
      <MockStore sliceOrSlices={cartSlice}>
        <div className="cart-details">
          <Story />
        </div>
      </MockStore>
    ),
  ],
};
