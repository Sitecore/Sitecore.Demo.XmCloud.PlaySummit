import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Default as PaymentConfirmed } from '../../components/Payment/PaymentConfirmed';

export default {
  title: 'Components/Payment/PaymentConfirmed',
  component: PaymentConfirmed,
} as ComponentMeta<typeof PaymentConfirmed>;

const Template: ComponentStory<typeof PaymentConfirmed> = () => (
  <PaymentConfirmed rendering={{ componentName: '' }} params={{}} />
);

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'PaymentConfirmed',
  },
};
