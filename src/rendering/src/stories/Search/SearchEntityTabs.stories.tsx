import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import SearchEntityTabs from '../../components/Search/SearchEntityTabs';
import SearchProvider from '../../components/Search/SearchProvider';
import { tabsProp } from '../mock-search-data';

export default {
  title: 'Components/Search/SearchEntityTabs',
  component: SearchEntityTabs,
} as ComponentMeta<typeof SearchEntityTabs>;

const Template: ComponentStory<typeof SearchEntityTabs> = (args) => (
  <SearchProvider keyphrase="">
    <SearchEntityTabs {...args} />
  </SearchProvider>
);

export const Default = Template.bind({});
Default.args = {
  selected: tabsProp[0].id,
  tabs: tabsProp,
};
