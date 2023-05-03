import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Default as PaymentForm } from '../../components/Payment/PaymentForm';

export default {
  title: 'Components/Payment/PaymentForm',
  component: PaymentForm,
} as Meta<typeof PaymentForm>;

const Template: StoryFn<typeof PaymentForm> = () => (
  <PaymentForm rendering={{ componentName: '' }} params={{}} />
);

export const Default = {
  render: Template,

  args: {
    params: {
      name: 'PaymentForm',
    },
  },
};
