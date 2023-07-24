import { Meta } from '@storybook/react';

import { Default as SponsorsGrid } from '../../components/Sponsors/SponsorsGrid';
import { Sponsor } from 'src/types/sponsor';

export default {
  title: 'Components/Sponsors/SponsorsGrid',
  component: SponsorsGrid,
} as Meta<typeof SponsorsGrid>;

const fitbit = {
  Name: 'Fitbit',
  fields: {
    Name: {
      value: 'Fitbit',
    },
    Logo: {
      value: {
        src: '/assets/img/sponsors/sponsors-fitbit.svg',
        alt: '',
      },
    },
  },
  url: '/sponsors/test',
} as Sponsor;

const sports = {
  Name: 'Sports',
  fields: {
    Name: {
      value: 'Sports',
    },
    Logo: {
      value: {
        src: '/assets/img/sponsors/sponsors-sports.svg',
        alt: '',
      },
    },
  },
  url: '/sponsors/test',
} as Sponsor;

export const Default = {
  args: {
    fields: {
      items: [fitbit, sports],
    },
    rendering: {
      componentName: 'SponsorsGrid',
      dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
    },
  },
};
