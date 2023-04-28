import React from 'react';
import { Meta } from '@storybook/react';
import GiftCheckboxOrder from '../../components/Checkout/GiftCheckboxOrder';
import { MockStore } from '../mock-store';
import { cartSlice } from './CheckoutCommon';

export default {
  title: 'Components/Checkout/GiftCheckboxOrder',
  component: GiftCheckboxOrder,
} as Meta<typeof GiftCheckboxOrder>;

export const IsGift = {
  args: {
    order: {
      xp: {
        IsGift: true,
      },
    },
  },

  decorators: [
    (Story) => (
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
    order: {
      xp: {
        IsGift: false,
      },
    },
  },

  decorators: [
    (Story) => (
      <MockStore sliceOrSlices={cartSlice}>
        <div className="cart-details">
          <Story />
        </div>
      </MockStore>
    ),
  ],
};
