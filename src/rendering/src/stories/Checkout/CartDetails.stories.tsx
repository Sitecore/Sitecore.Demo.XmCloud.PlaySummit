import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CartDetails from '../../components/Checkout/CartDetails';
import { MockSlice, MockStore } from '../mock-store';
import {
  loggedInAuthSlice,
  cartSlice,
  notInitializedCartSlice,
  productCacheSlice,
  promotionCartSlice,
} from './CheckoutCommon';

export default {
  title: 'Components/Checkout/CartDetails',
  component: CartDetails,
} as Meta<typeof CartDetails>;

const slices: MockSlice[] = [cartSlice, productCacheSlice, loggedInAuthSlice];
const promoSlices: MockSlice[] = [promotionCartSlice, productCacheSlice, loggedInAuthSlice];
const loadingSlices: MockSlice[] = [notInitializedCartSlice, productCacheSlice, loggedInAuthSlice];

export const Editable = {
  args: {},

  decorators: [
    (Story: StoryFn) => (
      <MockStore sliceOrSlices={slices}>
        <Story />
      </MockStore>
    ),
  ],
};

export const WithPromotions = {
  args: {},

  decorators: [
    (Story: StoryFn) => (
      <MockStore sliceOrSlices={promoSlices}>
        <Story />
      </MockStore>
    ),
  ],
};

export const Loading = {
  args: {
    editable: true,
  },

  decorators: [
    (Story: StoryFn) => (
      <MockStore sliceOrSlices={loadingSlices}>
        <Story />
      </MockStore>
    ),
  ],
};
