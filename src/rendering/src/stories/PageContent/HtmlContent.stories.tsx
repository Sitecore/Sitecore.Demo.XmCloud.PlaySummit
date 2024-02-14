import { Meta } from '@storybook/react';

import { Default as TextCta } from '../../components/PageContent/HtmlContent';

export default {
  title: 'Components/PageContent/HtmlContent',
  component: TextCta,
} as Meta<typeof TextCta>;

export const Default = {
  args: {
    fields: {
      Html: {
        value: '<h1>Test</h1>',
      }
    },
    rendering: {
      componentName: 'Rendering',
      dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
    },
  },
};
