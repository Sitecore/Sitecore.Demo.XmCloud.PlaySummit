import React from 'react';
import { Meta } from '@storybook/react';

import CheckoutAddressForm from '../../components/Forms/CheckoutAddressForm';
import { formAddress } from './FormsCommon';

export default {
  title: 'Components/Forms/CheckoutAddressForm',
  component: CheckoutAddressForm,
  decorators: [
    (Story) => (
      <section className="shop-container">
        <Story />
      </section>
    ),
  ],
} as Meta<typeof CheckoutAddressForm>;

export const Default = {
  args: {},
};

export const Loading = {
  args: {
    loading: true,
  },
};

export const SaveToAddressBook = {
  args: {
    showSaveToAddressBook: true,
  },
};

export const WithAddress = {
  args: {
    address: formAddress,
  },
};

export const Editing = {
  args: {
    address: formAddress,
    isEditing: true,
    showSaveToAddressBook: true,
  },
};
