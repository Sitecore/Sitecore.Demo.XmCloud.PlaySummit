import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import SearchResultsTab from '../../components/ContentSearch/SearchResultsTab';
import { mockSearchResultsTabCommonArgs } from './ResultsTabArgs';

export default {
  title: 'Components/ContentSearch/SearchResultsTab',
  component: SearchResultsTab,
} as Meta<typeof SearchResultsTab>;

const Template: StoryFn<typeof SearchResultsTab> = (args) => (
  <SearchResultsTab {...args}>My content</SearchResultsTab>
);

export const Default = {
  render: Template,

  args: {
    ...mockSearchResultsTabCommonArgs,
  },
};
