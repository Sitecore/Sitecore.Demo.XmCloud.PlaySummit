import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CartSummary from '../../components/Checkout/CartSummary';
import { MockStore } from '../mock-store';
import { cartSlice, notInitializedCartSlice } from './CheckoutCommon';

export default {
  title: 'Components/Checkout/CartSummary',
  component: CartSummary,
} as Meta<typeof CartSummary>;

export const Default = {
  args: {
    order: {},
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

export const Loading = {
  args: {
    order: {},
  },

  decorators: [
    (Story: StoryFn) => (
      <MockStore sliceOrSlices={notInitializedCartSlice}>
        <div className="cart-details">
          <Story />
        </div>
      </MockStore>
    ),
  ],
};
