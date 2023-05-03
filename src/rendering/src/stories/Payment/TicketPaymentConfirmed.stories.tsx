import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import TicketPaymentConfirmed from '../../components/Payment/TicketPaymentConfirmed';

export default {
  title: 'Components/Payment/TicketPaymentConfirmed',
  component: TicketPaymentConfirmed,
} as Meta<typeof TicketPaymentConfirmed>;

const Template: StoryFn<typeof TicketPaymentConfirmed> = () => <TicketPaymentConfirmed />;

export const Default = {
  render: Template,

  args: {
    params: {
      name: 'TicketPaymentConfirmed',
    },
  },
};
