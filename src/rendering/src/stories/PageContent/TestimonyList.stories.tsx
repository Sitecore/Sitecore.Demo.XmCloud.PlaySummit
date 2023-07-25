import { Meta } from '@storybook/react';

import { Default as TestimonyList } from '../../components/PageContent/TestimonyList';
import { Testimony } from 'src/types/testimony';

export default {
  title: 'Components/PageContent/TestimonyList',
  component: TestimonyList,
} as Meta<typeof TestimonyList>;

const testimony1 = {
  fields: {
    Provider: {
      value: 'Fitbit',
    },
    Testimony: {
      value:
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales mi in magna accumsan, vitae finibus libero fringilla. Duis posuere a lorem quis pretium. Sed varius dolor non mi ornare pulvinar.</p>',
    },
    Logo: {
      value: {
        src: '/assets/img/sponsors/sponsors-fitbit.svg',
      },
    },
  },
  rendering: {
    componentName: 'Rendering',
    dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
  },
} as Testimony;

const testimony2 = {
  fields: {
    Provider: {
      value: 'Striva',
    },
    Testimony: {
      value:
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales mi in magna accumsan, vitae finibus libero fringilla. Duis posuere a lorem quis pretium. Sed varius dolor non mi ornare pulvinar.</p>',
    },
    Logo: {
      value: {
        src: '/assets/img/sponsors/sponsors-fitbit.svg',
      },
    },
  },
  rendering: {
    componentName: 'Rendering',
    dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
  },
} as Testimony;

const testimony3 = {
  fields: {
    Provider: {
      value: 'Alba',
    },
    Testimony: {
      value:
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales mi in magna accumsan, vitae finibus libero fringilla. Duis posuere a lorem quis pretium. Sed varius dolor non mi ornare pulvinar.</p>',
    },
    Logo: {
      value: {
        src: '/assets/img/sponsors/sponsors-fitbit.svg',
      },
    },
  },
  rendering: {
    componentName: 'Rendering',
    dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
  },
} as Testimony;

export const Default = {
  args: {
    fields: {
      Title: {
        value: 'TESTIMONIES',
      },
      Subtitle: {
        value:
          'Curabitur sodales mi in magna accumsan, vitae finibus libero fringilla. Duis posuere a lorem quis pretium.',
      },
      Companies: [testimony1, testimony2, testimony3],
    },
    rendering: {
      componentName: 'Rendering',
      dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
    },
  },
};
