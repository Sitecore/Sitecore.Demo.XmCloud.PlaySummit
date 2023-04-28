import React from 'react';
import { Meta } from '@storybook/react';

import CreditCardForm, { CreditCardFormProps } from '../../components/Forms/CreditCardForm';

export default {
  title: 'Components/Forms/CreditCardForm',
  component: CreditCardForm,
  decorators: [
    (Story) => (
      <section className="shop-container">
        <Story />
      </section>
    ),
  ],
} as Meta<typeof CreditCardForm>;

export const Loading = {
  args: {
    loading: true,
  },
};

export const NewCreditCard = {
  args: {
    onSubmit: (creditcard) => {
      alert(`Credit Card submitted successfully:\n${JSON.stringify(creditcard, null, 4)}`);
    },
  } as CreditCardFormProps,
};

export const ExistingCreditCard = {
  args: {
    onSubmit: (creditcard) => {
      alert(`Credit Card submitted successfully:\n${JSON.stringify(creditcard, null, 4)}`);
    },
    creditCard: {
      ID: 'mockcreditcard',
      CardType: 'Visa',
      CardholderName: 'Jon Snow',
      PartialAccountNumber: '6123',
      ExpirationDate: new Date().toISOString(),
    },
  } as CreditCardFormProps,
};
