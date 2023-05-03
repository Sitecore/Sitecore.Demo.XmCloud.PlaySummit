import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import OrderReviewDetails from '../../components/Checkout/OrderReviewDetails';
import { MockStore } from '../mock-store';
import {
  cartState,
  productCacheSlice,
  loggedInAuthSlice,
  shipEstimateResponse,
} from './CheckoutCommon';
import { LineItem } from 'ordercloud-javascript-sdk';

export default {
  title: 'Components/Checkout/OrderReviewDetails',
  component: OrderReviewDetails,
} as Meta<typeof OrderReviewDetails>;

const Template: StoryFn<typeof OrderReviewDetails> = () => <OrderReviewDetails />;

export const Default = {
  render: Template,

  decorators: [
    (Story: StoryFn) => (
      <MockStore
        sliceOrSlices={[
          { name: 'ocCurrentCart', state: defaultCartState },
          productCacheSlice,
          loggedInAuthSlice,
        ]}
      >
        <Story />
      </MockStore>
    ),
  ],
};

const defaultCartState = {
  ...cartState,
  shipEstimateResponse,
};

export const NoLineItems = {
  render: Template,

  decorators: [
    (Story: StoryFn) => (
      <MockStore
        sliceOrSlices={[{ name: 'ocCurrentCart', state: noLineItemsState }, loggedInAuthSlice]}
      >
        <Story />
      </MockStore>
    ),
  ],
};

const noLineItemsState = {
  ...cartState,
  lineItems: [] as LineItem[],
  shipEstimateResponse,
  order: {
    ...cartState.order,
    Subtotal: 0,
    TaxCost: 0,
    Total: 4.99,
    LineItemCount: 0,
  },
};

export const WithAdditionalComments = {
  render: Template,

  decorators: [
    (Story: StoryFn) => (
      <MockStore
        sliceOrSlices={[
          { name: 'ocCurrentCart', state: withAdditionalCommentsState },
          productCacheSlice,
          loggedInAuthSlice,
        ]}
      >
        <Story />
      </MockStore>
    ),
  ],
};

const withAdditionalCommentsState = {
  ...cartState,
  shipEstimateResponse,
  order: {
    ...cartState.order,
    Comments: 'Please deliver it after 15h',
  },
};
