import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import PaymentAndBillingForm from '../../components/Payment/PaymentAndBillingForm';

export default {
  title: 'Components/Payment/PaymentAndBillingForm',
  component: PaymentAndBillingForm,
} as Meta<typeof PaymentAndBillingForm>;

const Template: StoryFn<typeof PaymentAndBillingForm> = () => <PaymentAndBillingForm />;

export const Default = {
  render: Template,

  args: {
    params: {
      name: 'PaymentAndBillingForm',
    },
  },
};
