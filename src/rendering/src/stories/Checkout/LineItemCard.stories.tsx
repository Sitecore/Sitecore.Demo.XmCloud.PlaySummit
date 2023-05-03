import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import LineItemCard from '../../components/Checkout/LineItemCard';
import { MockStore } from '../mock-store';
import { DLineItem } from '../../models/ordercloud/DLineItem';
import { loggedInAuthSlice, cartState, orderSlice, productCacheSlice } from './CheckoutCommon';

export default {
  title: 'Components/Checkout/LineItemCard',
  component: LineItemCard,
} as Meta<typeof LineItemCard>;

const slices = [orderSlice, loggedInAuthSlice, productCacheSlice];

export const Default = {
  args: {
    editable: true,
    lineItem: cartState.lineItems[0] as DLineItem,
  },

  decorators: [
    (Story: StoryFn) => (
      <MockStore sliceOrSlices={slices}>
        <Story />
      </MockStore>
    ),
  ],
};

export const NonEditable = {
  args: {
    editable: false,
    lineItem: cartState.lineItems[0] as DLineItem,
  },

  decorators: [
    (Story: StoryFn) => (
      <MockStore sliceOrSlices={slices}>
        <Story />
      </MockStore>
    ),
  ],
};

export const WithSpecs = {
  args: {
    editable: true,
    lineItem: cartState.lineItems[2] as DLineItem,
  },

  decorators: [
    (Story: StoryFn) => (
      <MockStore sliceOrSlices={slices}>
        <Story />
      </MockStore>
    ),
  ],
};

export const WithRestrictedQuantities = {
  args: {
    editable: true,
    lineItem: cartState.lineItems[3] as DLineItem,
  },

  decorators: [
    (Story: StoryFn) => (
      <MockStore sliceOrSlices={slices}>
        <Story />
      </MockStore>
    ),
  ],
};
