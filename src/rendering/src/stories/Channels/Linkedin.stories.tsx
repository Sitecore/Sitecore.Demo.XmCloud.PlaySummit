import { Meta } from '@storybook/react';

import { Default as Linkedin } from '../../components/Channels/Linkedin';

export default {
  title: 'Components/Channels/Linkedin',
  component: Linkedin,
} as Meta<typeof Linkedin>;

export const Default = {
  args: {
    rendering: {
      componentName: 'Rendering',
      dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
    },
  },
};
