import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import SearchEntityTabs from '../../components/ContentSearch/SearchEntityTabs';
import { tabsProp } from '../mock-search-data';

export default {
  title: 'Components/ContentSearch/SearchEntityTabs',
  component: SearchEntityTabs,
} as Meta<typeof SearchEntityTabs>;

const Template: StoryFn<typeof SearchEntityTabs> = (args) => <SearchEntityTabs {...args} />;

export const Default = {
  render: Template,

  args: {
    selected: tabsProp[0].id,
    tabs: tabsProp,
  },
};
