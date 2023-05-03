import { Meta } from '@storybook/react';

import AddressCard from '../../components/Checkout/AddressCard';

export default {
  title: 'Components/Checkout/AddressCard',
  component: AddressCard,
} as Meta<typeof AddressCard>;

export const Default = {
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

export const WithStreet2 = {
  args: {
    address: {
      AddressName: 'Mr. H Potter',
      Street1: 'The Cupboard under the Stairs',
      Street2: '4 Privet Drive',
      City: 'Little Whinging',
      State: 'SY',
      Zip: '12345',
      Country: 'GB',
    },
  },
};

export const IsActive = {
  args: {
    address: {
      AddressName: 'Mr. H Potter',
      Street1: 'The Cupboard under the Stairs',
      Street2: '4 Privet Drive',
      City: 'Little Whinging',
      State: 'SY',
      Zip: '12345',
      Country: 'GB',
    },
  },
};

export const WithLeastData = {
  args: {
    address: {
      Street1: '4 Privet Drive',
      City: 'Little Whinging',
      State: 'SY',
      Zip: '12345',
      Country: 'GB',
    },
  },
};
