import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import PanelDeliveryOptions from '../../components/Checkout/PanelDeliveryOptions';
import { MockStore } from '../mock-store';
import { DeliveryTypes } from '../../models/ordercloud/DOrder';

export default {
  title: 'Components/Checkout/PanelDeliveryOptions',
  component: PanelDeliveryOptions,
} as Meta<typeof PanelDeliveryOptions>;

const Template: StoryFn<typeof PanelDeliveryOptions> = () => (
  <section className="checkout-details shop-container">
    <PanelDeliveryOptions />
  </section>
);

const mockState = {
  order: {
    xp: {
      DeliveryType: DeliveryTypes.Ship,
    },
  },
};

export const Default = {
  render: Template,
  args: {},

  decorators: [
    (Story: StoryFn) => (
      <MockStore sliceOrSlices={{ name: 'ocCurrentCart', state: mockState }}>
        <Story />
      </MockStore>
    ),
  ],
};
