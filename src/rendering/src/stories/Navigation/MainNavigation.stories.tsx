import { ComponentMeta, ComponentStory } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

import MainNavigation, { MainNavigationProps } from '../../components/Navigation/MainNavigation';
import { mockMainNavigationFields, mockPreviewSearchFields } from '../Pages/PageStoriesCommon';

export default {
  title: 'Components/Navigation/MainNavigation',
  component: MainNavigation,
} as ComponentMeta<typeof MainNavigation>;

const queryClient = new QueryClient();

const Template: ComponentStory<typeof MainNavigation> = (args) => (
  <QueryClientProvider client={queryClient}>
    <MainNavigation {...args} />
  </QueryClientProvider>
);

export const Default = Template.bind({});
Default.args = {
  fields: mockMainNavigationFields,
  previewSearchProps: mockPreviewSearchFields,
} as unknown as MainNavigationProps;
