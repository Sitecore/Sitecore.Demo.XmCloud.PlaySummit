import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import ThankYouSection from '../../components/Checkout/ThankYouSection';
import { MockStore } from '../mock-store';
import { anonymousAuthSlice, cartSlice, loggedInAuthSlice } from './CheckoutCommon';

export default {
  title: 'Components/Checkout/ThankYouSection',
  component: ThankYouSection,
} as Meta<typeof ThankYouSection>;

const Template: StoryFn<typeof ThankYouSection> = () => <ThankYouSection />;

export const LoggedIn = {
  render: Template,
  args: {},

  decorators: [
    (Story: StoryFn) => (
      <MockStore sliceOrSlices={[loggedInAuthSlice, cartSlice]}>
        <Story />
      </MockStore>
    ),
  ],
};

export const Anonymous = {
  render: Template,
  args: {},

  decorators: [
    (Story: StoryFn) => (
      <MockStore sliceOrSlices={[anonymousAuthSlice, cartSlice]}>
        <Story />
      </MockStore>
    ),
  ],
};
