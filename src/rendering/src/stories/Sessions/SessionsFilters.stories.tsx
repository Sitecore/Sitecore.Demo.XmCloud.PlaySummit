import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Default as SessionsFilters } from '../../components/Sessions/SessionsFilters';

export default {
  title: 'Components/Sessions/SessionsFilters',
  component: SessionsFilters,
} as Meta<typeof SessionsFilters>;

const Template: StoryFn<typeof SessionsFilters> = () => (
  <SessionsFilters rendering={{ componentName: '' }} params={{}} />
);

export const Default = {
  render: Template,

  args: {
    params: {
      name: 'SessionsFilters',
    },
  },
};
