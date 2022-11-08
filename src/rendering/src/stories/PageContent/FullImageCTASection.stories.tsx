import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Default as FullImageCTASection } from '../../components/PageContent/FullImageCTASection';

export default {
  title: 'Components/PageContent/FullImageCTASection',
  component: FullImageCTASection,
} as ComponentMeta<typeof FullImageCTASection>;

const Template: ComponentStory<typeof FullImageCTASection> = () => (
  <FullImageCTASection rendering={{ componentName: '' }} params={{}} />
);

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'FullImageCTASection',
  },
};
