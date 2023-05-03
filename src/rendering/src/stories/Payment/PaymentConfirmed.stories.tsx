import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Default as PaymentConfirmed } from '../../components/Payment/PaymentConfirmed';

export default {
  title: 'Components/Payment/PaymentConfirmed',
  component: PaymentConfirmed,
} as Meta<typeof PaymentConfirmed>;

const Template: StoryFn<typeof PaymentConfirmed> = () => (
  <PaymentConfirmed rendering={{ componentName: '' }} params={{}} />
);

export const Default = {
  render: Template,

  args: {
    params: {
      name: 'PaymentConfirmed',
    },
  },
};
