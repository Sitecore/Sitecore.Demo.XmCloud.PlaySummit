import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Results from '../../components/Search/Results';
import { filterOptionsProp } from '../mock-discover-data';

export default {
  title: 'Components/Search/Results',
  component: Results,
} as ComponentMeta<typeof Results>;

const Template: ComponentStory<typeof Results> = (args) => <Results {...args}>My content</Results>;

export const Default = Template.bind({});
Default.args = {
  filterOptions: filterOptionsProp,
};
