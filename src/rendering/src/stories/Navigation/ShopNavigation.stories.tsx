import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import ShopNavigation from '../../components/Navigation/ShopNavigation';
import { initialize as initializeDiscover } from '../../services/DiscoverService';
import { mockDiscoverData } from '../mock-discover-data';
import { MockStore } from '../mock-store';
import { cartSlice, loggedInAuthSlice } from '../Checkout/CheckoutCommon';

export default {
  title: 'Components/Navigation/ShopNavigation',
  component: ShopNavigation,
} as Meta<typeof ShopNavigation>;

initializeDiscover({
  isStorybook: true,
});

export const Default = {
  args: {
    previewSearchProps: mockDiscoverData.previewSearchProps,
  },

  decorators: [
    (Story: StoryFn) => (
      <MockStore sliceOrSlices={[cartSlice, loggedInAuthSlice]}>
        <Story />
      </MockStore>
    ),
  ],
};
