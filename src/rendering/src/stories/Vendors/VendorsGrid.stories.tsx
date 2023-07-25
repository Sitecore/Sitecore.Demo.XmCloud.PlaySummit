import { Meta } from '@storybook/react';

import { Default as VendorsGrid } from '../../components/Vendors/VendorsGrid';
import { Vendor } from 'src/types/vendor';

export default {
  title: 'Components/Vendors/VendorsGrid',
  component: VendorsGrid,
} as Meta<typeof VendorsGrid>;

const fitbit = {
  Name: 'Fitbit',
  fields: {
    Name: {
      value: 'Fitbit',
    },
    Level: {
      value: 'Vendor Level',
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

const sports = {
  Name: 'Sports',
  fields: {
    Name: {
      value: 'Sports',
    },
    Level: {
      value: 'Vendor Level',
    },
    Logo: {
      value: {
        src: '/assets/img/sponsors/sponsors-sports.svg',
        alt: '',
      },
    },
  },
  url: '/vendors/test',
} as Vendor;

export const Default = {
  args: {
    fields: {
      items: [fitbit, sports],
    },
    rendering: {
      componentName: 'Rendering',
      dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
    },
  },
};
