import { Meta } from '@storybook/react';

import { Default as FeaturedVendors } from '../../components/Vendors/FeaturedVendors';
import { Vendor } from 'src/types/vendor';

export default {
  title: 'Components/Vendors/FeaturedVendors',
  component: FeaturedVendors,
} as Meta<typeof FeaturedVendors>;

const vendor = {
  Name: 'Item Name',
  fields: {
    Name: {
      value: 'Fitbit',
    },
    Level: {
      value: 'Gold',
    },
    Logo: {
      value: {
        src: '/assets/img/sponsors/sponsors-fitbit.svg',
        alt: '',
      },
    },
  },
  url: '/vendors/test',
} as Vendor;

export const Default = {
  args: {
    fields: {
      Title: {
        value: 'FEATURED VENDORS',
      },
      Subtitle: {
        value:
          'Road-test the world’s most trusted sports and fitnessequipment–we’ll be welcoming 2,000 brands at this year’s PLAY! Summit.',
      },
      Vendors: [vendor],
    },
    rendering: {
      componentName: 'Rendering',
      dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
    },
  },
};
