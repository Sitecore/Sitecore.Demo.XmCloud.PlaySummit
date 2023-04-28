import React from 'react';
import { Meta } from '@storybook/react';

import AddressBookForm from '../../components/Forms/AddressBookForm';
import { formAddress } from './FormsCommon';

export default {
  title: 'Components/Forms/AddressBookForm',
  component: AddressBookForm,
  decorators: [
    (Story) => (
      <section className="shop-container section address-book-form-section">
        <div className="form-wrapper">
          <Story />
        </div>
      </section>
    ),
  ],
} as Meta<typeof AddressBookForm>;

export const Default = {
  args: {},
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
  },
};
