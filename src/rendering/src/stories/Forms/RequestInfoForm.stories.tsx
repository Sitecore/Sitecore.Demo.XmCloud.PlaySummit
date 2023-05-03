import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Default as RequestInfoForm } from '../../components/Forms/RequestInfoForm';

export default {
  title: 'Components/Forms/RequestInfoForm',
  component: RequestInfoForm,
} as Meta<typeof RequestInfoForm>;

const Template: StoryFn<typeof RequestInfoForm> = () => (
  <RequestInfoForm rendering={{ componentName: '' }} params={{}} />
);

export const Default = {
  render: Template,

  args: {
    params: {
      name: 'RequestInfoForm',
    },
  },
};
