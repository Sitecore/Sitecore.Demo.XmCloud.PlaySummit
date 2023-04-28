import { Meta } from '@storybook/react';

import CreditCardCard from '../../components/Checkout/CreditCardCard';

export default {
  title: 'Components/Checkout/CreditCardCard',
  component: CreditCardCard,
} as Meta<typeof CreditCardCard>;

export const Default = {
  args: {
    creditCard: {
      CardType: 'Visa',
      CardholderName: 'Jon Snow',
      PartialAccountNumber: '6123',
      ExpirationDate: new Date().toISOString(),
    },
  },
};
