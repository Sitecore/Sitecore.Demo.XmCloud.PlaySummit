import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Default as FullImageCTASection } from '../../components/PageContent/FullImageCTASection';

export default {
  title: 'Components/PageContent/FullImageCTASection',
  component: FullImageCTASection,
} as Meta<typeof FullImageCTASection>;

const Template: StoryFn<typeof FullImageCTASection> = () => (
  <FullImageCTASection rendering={{ componentName: '' }} params={{}} />
);

export const Default = {
  render: Template,

  args: {
    params: {
      name: 'FullImageCTASection',
    },
  },
};
