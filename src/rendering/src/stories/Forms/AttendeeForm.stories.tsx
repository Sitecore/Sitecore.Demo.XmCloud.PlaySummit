import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Default as AttendeeForm } from '../../components/Forms/AttendeeForm';

export default {
  title: 'Components/Forms/AttendeeForm',
  component: AttendeeForm,
} as Meta<typeof AttendeeForm>;

const Template: StoryFn<typeof AttendeeForm> = () => (
  <AttendeeForm rendering={{ componentName: '' }} params={{}} />
);

export const Default = {
  render: Template,
  args: {},
};
