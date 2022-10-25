import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Filters from '../../components/Search/Filters';
import { filterOptionsProp } from '../mock-discover-data';

export default {
  title: 'Components/Search/Filters',
  component: Filters,
} as ComponentMeta<typeof Filters>;

const Template: ComponentStory<typeof Filters> = (args) => <Filters {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: filterOptionsProp,
};
