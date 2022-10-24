import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PreviewSearch from '../../components/PreviewSearchContent/PreviewSearch';
import { mockPreviewSearchFields } from '../Pages/PageStoriesCommon';

export default {
  title: 'Components/PreviewSearchContent/PreviewSearch',
  component: PreviewSearch,
} as ComponentMeta<typeof PreviewSearch>;

const Template: ComponentStory<typeof PreviewSearch> = (args) => <PreviewSearch {...args} />;

export const Default = Template.bind({});
Default.args = mockPreviewSearchFields;
