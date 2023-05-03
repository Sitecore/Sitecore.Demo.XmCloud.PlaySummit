import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import PanelUserDetails from '../../components/Checkout/PanelUserDetails';

export default {
  title: 'Components/Checkout/PanelUserDetails',
  component: PanelUserDetails,
} as Meta<typeof PanelUserDetails>;

const Template: StoryFn<typeof PanelUserDetails> = (args) => (
  <section className="checkout-details shop-container">
    <PanelUserDetails {...args} />
  </section>
);

export const Default = {
  render: Template,
  args: {},
};
