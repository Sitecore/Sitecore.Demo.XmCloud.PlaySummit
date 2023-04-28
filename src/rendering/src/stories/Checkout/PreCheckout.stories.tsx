import React from 'react';
import { Meta } from '@storybook/react';
import PreCheckout from '../../components/Checkout/PreCheckout';
import { MockStore } from '../mock-store';
import { anonymousAuthSlice, cartSlice } from './CheckoutCommon';

export default {
  title: 'Components/Checkout/PreCheckout',
  component: PreCheckout,
} as Meta<typeof PreCheckout>;

export const Default = {
  decorators: [
    (Story) => (
      <MockStore sliceOrSlices={[anonymousAuthSlice, cartSlice]}>
        <Story />
      </MockStore>
    ),
  ],

  args: {},
};
