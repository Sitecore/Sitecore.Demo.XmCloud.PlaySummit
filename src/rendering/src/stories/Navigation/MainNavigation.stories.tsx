import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MainNavigation, { MainNavigationProps } from '../../components/Navigation/MainNavigation';
import { mockMainNavigationFields, mockPreviewSearchFields } from '../Pages/PageStoriesCommon';

export default {
  title: 'Components/Navigation/MainNavigation',
  component: MainNavigation,
} as ComponentMeta<typeof MainNavigation>;

const Template: ComponentStory<typeof MainNavigation> = (args) => <MainNavigation {...args} />;

export const Default = Template.bind({});
Default.args = {
  fields: mockMainNavigationFields,
  previewSearchProps: mockPreviewSearchFields,
} as unknown as MainNavigationProps;
