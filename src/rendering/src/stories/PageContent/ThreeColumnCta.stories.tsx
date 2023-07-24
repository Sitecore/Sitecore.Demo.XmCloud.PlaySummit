import { Meta } from '@storybook/react';

import { Default as ThreeColumnCta } from '../../components/PageContent/ThreeColumnCta';

export default {
  title: 'Components/PageContent/ThreeColumnCta',
  component: ThreeColumnCta,
} as Meta<typeof ThreeColumnCta>;

export const Default = {
  args: {
    fields: {
      leftHeading: {
        value: '200,000+',
      },
      leftDescription: {
        value: 'Visitors',
      },
      middleHeading: {
        value: '90+',
      },
      middleDescription: {
        value: 'Globally recognised speakers',
      },
      rightHeading: {
        value: '300+',
      },
      rightDescription: {
        value: 'Exhibitors',
      },
    },
    rendering: {
      componentName: 'Rendering',
      dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
    },
  },
};
