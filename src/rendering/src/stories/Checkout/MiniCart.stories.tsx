import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import MiniCart from '../../components/Checkout/MiniCart';
import { MockStore } from '../mock-store';
import { cartSlice, loggedInAuthSlice } from './CheckoutCommon';

export default {
  title: 'Components/Checkout/MiniCart',
  component: MiniCart,
} as Meta<typeof MiniCart>;

export const Default = {
  args: {},

  decorators: [
    (Story: StoryFn) => (
      <MockStore sliceOrSlices={[cartSlice, loggedInAuthSlice]}>
        <Story />
      </MockStore>
    ),
  ],
};
