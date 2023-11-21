import { Meta } from '@storybook/react';

import { Default as Questionnaire } from '../../components/Questionnaire/Questionnaire';

export default {
  title: 'Components/Questionnaire/Questionnaire',
  component: Questionnaire,
} as Meta<typeof Questionnaire>;

export const Default = {
  args: {
    fields: {},
    rendering: {
      componentName: 'Rendering',
      dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
    },
  },
};
