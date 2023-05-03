import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import SearchEntityTabs from '../../components/ContentSearch/SearchEntityTabs';
import SearchProvider from '../../components/ContentSearch/SearchProvider';
import { tabsProp } from '../mock-search-data';

export default {
  title: 'Components/ContentSearch/SearchEntityTabs',
  component: SearchEntityTabs,
} as Meta<typeof SearchEntityTabs>;

const Template: StoryFn<typeof SearchEntityTabs> = (args) => (
  <SearchProvider keyphrase="">
    <SearchEntityTabs {...args} />
  </SearchProvider>
);

export const Default = {
  render: Template,

  args: {
    selected: tabsProp[0].id,
    tabs: tabsProp,
  },
};
