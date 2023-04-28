import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import LineItemList from '../../components/Checkout/LineItemList';
import { MockSlice, MockStore } from '../mock-store';
import { loggedInAuthSlice, cartSlice, productCacheSlice } from './CheckoutCommon';

export default {
  title: 'Components/Checkout/LineItemList',
  component: LineItemList,
} as Meta<typeof LineItemList>;

const slices: MockSlice[] = [cartSlice, productCacheSlice, loggedInAuthSlice];

export const Loading = {
  decorators: [
    (Story: StoryFn) => (
      <MockStore sliceOrSlices={{ name: 'ocCurrentCart', state: loadingState }}>
        <Story />
      </MockStore>
    ),
  ],
};

const loadingState = {
  initialized: false,
};

export const Editable = {
  args: {
    editable: true,
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
  },

  decorators: [
    (Story: StoryFn) => (
      <MockStore sliceOrSlices={slices}>
        <Story />
      </MockStore>
    ),
  ],
};
