import { Meta } from '@storybook/react';

import { Default as Google } from '../../components/Channels/Google';

export default {
  title: 'Components/Channels/Google',
  component: Google,
} as Meta<typeof Google>;

export const Default = {
  args: {
    rendering: {
      componentName: 'Rendering',
      dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
    },
  },
};
