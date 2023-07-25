import { Meta } from '@storybook/react';

import { Default as SelectedSponsorsGrid } from '../../components/Sponsors/SelectedSponsorsGrid';
import { Sponsor } from 'src/types/sponsor';

export default {
  title: 'Components/Sponsors/SelectedSponsorsGrid',
  component: SelectedSponsorsGrid,
} as Meta<typeof SelectedSponsorsGrid>;

const sponsor1 = {
  fields: {
    Name: {
      value: 'Fitbit',
    },
    Logo: {
      value: {
        src: '/assets/img/sponsors/sponsors-fitbit.svg',
      },
    },
  },
  url: '/sponsors/test',
} as Sponsor;

const sponsor2 = {
  Name: 'Item Name',
  fields: {
    Name: {
      value: 'Sports',
    },
    Logo: {
      value: {
        src: '/assets/img/sponsors/sponsors-sports.svg',
      },
    },
  },
  url: '/sponsors/test',
} as Sponsor;

const sponsor3 = {
  Name: 'Item Name',
  fields: {
    Name: {
      value: 'Fitbit',
    },
    Logo: {
      value: {
        src: '/assets/img/sponsors/sponsors-fitbit.svg',
      },
    },
  },
  url: '/sponsors/test',
} as Sponsor;

export const Default = {
  args: {
    fields: {
      Sponsors: [sponsor1, sponsor2, sponsor3],
    },
    rendering: {
      componentName: 'SelectedSponsorsGrid',
      dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
    },
  },
};
