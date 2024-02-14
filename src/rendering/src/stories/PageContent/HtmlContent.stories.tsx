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
        value:
          '<h1>Lorem ipsum</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>',
      },
    },
    rendering: {
      componentName: 'Rendering',
      dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
    },
  },
};
