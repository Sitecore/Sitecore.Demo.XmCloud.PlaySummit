import { Meta } from '@storybook/react';

import { Default as HeaderBanner } from '../../components/PageContent/HeaderBanner';

export default {
  title: 'Components/PageContent/HeaderBanner',
  component: HeaderBanner,
} as Meta<typeof HeaderBanner>;

const fieldsWithoutImage = {
  eyebrow: {
    value: 'Eyebrow text',
  },
  title: {
    value: 'Title text',
  },
  subtitle: {
    value: 'Subtitle text',
  },
  backgroundImage: {
    value: {
      src: '',
    },
  },
};

const fieldsWithImage = {
  ...fieldsWithoutImage,
  backgroundImage: {
    value: {
      src: '/assets/img/tickets/come-play.jpg',
    },
  },
};

export const WithImage = {
  args: {
    fields: fieldsWithImage,
    rendering: {
      componentName: 'Rendering',
      dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
    },
  },
};

export const WithoutImage = {
  args: {
    fields: fieldsWithoutImage,
    rendering: {
      componentName: 'Rendering',
      dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
    },
  },
};
