import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Default as RequestInfoForm } from '../../components/Forms/RequestInfoForm';

export default {
  title: 'Components/Forms/RequestInfoForm',
  component: RequestInfoForm,
} as ComponentMeta<typeof RequestInfoForm>;

const Template: ComponentStory<typeof RequestInfoForm> = () => (
  <RequestInfoForm rendering={{ componentName: '' }} params={{}} />
);

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'RequestInfoForm',
  },
};
