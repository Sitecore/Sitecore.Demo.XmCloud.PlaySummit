import { Meta } from '@storybook/react';

import { Default as HeroImage } from '../../components/PageContent/HeroImage';

export default {
  title: 'Components/PageContent/HeroImage',
  component: HeroImage,
} as Meta<typeof HeroImage>;

export const WithImage = {
  args: {
    fields: {
      hero: {
        value: {
          src: '/assets/img/tickets/come-play.jpg',
        },
      },
    },
    rendering: {
      componentName: 'Rendering',
      dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
    },
  },
};

export const WithoutImage = {
  args: {
    fields: {
      hero: {
        value: {
          src: '',
        },
      },
    },
    rendering: {
      componentName: 'Rendering',
      dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
    },
  },
};
