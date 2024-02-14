import { Meta } from '@storybook/react';

import OrderSummary from '../../components/Payment/OrderSummary';

export default {
  title: 'Components/Payment/OrderSummary',
  component: OrderSummary,
} as Meta<typeof OrderSummary>;

export const WithFees = {
  args: {
    ticketID: 0,
  },
};

export const WithoutFees = {
  args: {
    ticketID: 3,
  },
};
