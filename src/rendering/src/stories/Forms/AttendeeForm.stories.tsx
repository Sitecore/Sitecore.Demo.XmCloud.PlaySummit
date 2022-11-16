import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Default as AttendeeForm } from '../../components/Forms/AttendeeForm';

export default {
  title: 'Components/Forms/AttendeeForm',
  component: AttendeeForm,
} as ComponentMeta<typeof AttendeeForm>;

const Template: ComponentStory<typeof AttendeeForm> = () => (
  <AttendeeForm rendering={{ componentName: '' }} params={{}} />
);

export const Default = Template.bind({});
Default.args = {};
