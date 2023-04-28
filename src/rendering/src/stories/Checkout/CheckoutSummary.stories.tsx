import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import CheckoutSummary from '../../components/Checkout/CheckoutSummary';
import { MockStore } from '../mock-store';
import { cartSlice, cartState, loggedInAuthSlice } from './CheckoutCommon';

export default {
  title: 'Components/Checkout/CheckoutSummary',
  component: CheckoutSummary,
} as Meta<typeof CheckoutSummary>;

export const WithoutShippingOptionSelected = {
  args: {
    buttonText: 'Review order',
  },

  decorators: [
    (Story: StoryFn) => (
      <MockStore sliceOrSlices={[cartSlice, loggedInAuthSlice]}>
        <Story />
      </MockStore>
    ),
  ],
};

export const WithFreeShippingCost = {
  args: {
    buttonText: 'Review order',
  },

  decorators: [
    (Story: StoryFn) => (
      <MockStore
        sliceOrSlices={[{ name: 'ocCurrentCart', state: freeShippingState }, loggedInAuthSlice]}
      >
        <Story />
      </MockStore>
    ),
  ],
};

const freeShippingState = {
  ...cartState,
  shipEstimateResponse: {
    ShipEstimates: [
      {
        SelectedShipMethodID: 'mock-shipping-option',
      },
    ],
  },
  order: {
    ShippingCost: 0,
    Subtotal: 123.45,
    LineItemCount: 3,
  },
};

export const WithShippingCost = {
  args: {
    buttonText: 'Review order',
  },

  decorators: [
    (Story: StoryFn) => (
      <MockStore
        sliceOrSlices={[{ name: 'ocCurrentCart', state: paidShippingState }, loggedInAuthSlice]}
      >
        <Story />
      </MockStore>
    ),
  ],
};

const paidShippingState = {
  ...cartState,
  shipEstimateResponse: {
    ShipEstimates: [
      {
        SelectedShipMethodID: 'mock-shipping-option',
      },
    ],
  },
  order: {
    ShippingCost: 12.99,
    Subtotal: 123.45,
    LineItemCount: 3,
  },
};
