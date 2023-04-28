import React from 'react';
import { Meta } from '@storybook/react';
import PromoInput from '../../components/Checkout/PromoInput';
import { MockStore } from '../mock-store';
import { cartSlice, productCacheSlice, promotionCartSlice } from './CheckoutCommon';

export default {
  title: 'Components/Checkout/PromoInput',
  component: PromoInput,
} as Meta<typeof PromoInput>;

export const WithoutAppliedPromotions = {
  args: {},

  decorators: [
    (Story) => (
      <MockStore sliceOrSlices={[cartSlice, productCacheSlice]}>
        <div className="cart-details">
          <Story />
        </div>
      </MockStore>
    ),
  ],
};

export const WithAppliedPromotions = {
  args: {},

  decorators: [
    (Story) => (
      <MockStore sliceOrSlices={[promotionCartSlice, productCacheSlice]}>
        <div className="cart-details">
          <Story />
        </div>
      </MockStore>
    ),
  ],
};
