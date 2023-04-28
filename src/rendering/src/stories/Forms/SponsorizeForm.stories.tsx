import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Default as SponsorizeForm } from '../../components/Forms/SponsorizeForm';

export default {
  title: 'Components/Forms/SponsorizeForm',
  component: SponsorizeForm,
} as Meta<typeof SponsorizeForm>;

const Template: StoryFn<typeof SponsorizeForm> = () => (
  <SponsorizeForm rendering={{ componentName: '' }} params={{}} />
);

export const Default = {
  render: Template,

  args: {
    params: {
      name: 'SponsorizeForm',
    },
  },
};
