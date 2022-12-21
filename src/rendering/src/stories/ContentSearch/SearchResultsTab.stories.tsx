import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import SearchResultsTab from '../../components/ContentSearch/SearchResultsTab';
import { mockSearchResultsTabCommonArgs } from './ResultsTabArgs';

export default {
  title: 'Components/ContentSearch/SearchResultsTab',
  component: SearchResultsTab,
} as ComponentMeta<typeof SearchResultsTab>;

const Template: ComponentStory<typeof SearchResultsTab> = (args) => (
  <SearchResultsTab {...args}>My content</SearchResultsTab>
);

export const Default = Template.bind({});
Default.args = {
  ...mockSearchResultsTabCommonArgs,
};
