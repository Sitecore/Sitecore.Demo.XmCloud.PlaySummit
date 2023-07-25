import { Meta } from '@storybook/react';

import {
  Default as SummitFeature,
  SummitFeatureProps,
} from '../../components/PageContent/SummitFeature';

export default {
  title: 'Components/PageContent/SummitFeature',
  component: SummitFeature,
} as Meta<typeof SummitFeature>;

export const Default = {
  args: {
    fields: {
      Title: {
        value: 'Sports and Recreation Expo',
      },
      Description: {
        value:
          'This year’s theme is ‘Raise Your Game’ –join us over two days for a global gathering of brands, sports professionals,and innovators.',
      },
      Link: {
        value: {
          href: '/tickets',
          text: 'Book Tickets',
        },
      },
      Logo: {
        value: {
          src: '/assets/img/categories/hiking.jpg',
        },
      },
    },
    rendering: {
      componentName: 'Rendering',
      dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
    },
  } as SummitFeatureProps,
};
