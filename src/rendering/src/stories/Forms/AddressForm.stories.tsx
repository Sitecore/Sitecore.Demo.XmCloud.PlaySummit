import { Meta } from '@storybook/react';

import AddressForm from '../../components/Forms/AddressForm';

export default {
  title: 'Components/Forms/AddressForm',
  component: AddressForm,
} as Meta<typeof AddressForm>;

export const Loading = {
  args: {
    loading: true,
  },
};

export const Default = {
  args: {},
};

export const WithAddress = {
  args: {
    address: {
      AddressName: 'Marty Byrde Home',
      Street1: '6818 Gaines Ferry Road',
      City: 'Flowery Branch',
      State: 'GA',
      Zip: '30542',
      Country: 'US',
    },
  },
};
