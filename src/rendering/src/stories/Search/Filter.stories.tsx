import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import SearchFilter from '../../components/Search/SearchFilter';

export default {
  title: 'Components/Search/SearchFilter',
  component: SearchFilter,
} as ComponentMeta<typeof SearchFilter>;

const Template: ComponentStory<typeof SearchFilter> = (args) => <SearchFilter {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Schedule',
  options: [
    {
      value: 'day1-3pm',
      label: 'Day 1: 3:00pm - 3:55pm',
    },
    {
      value: 'day1-5pm',
      label: 'Day 1: 5:00pm - 6:55pm',
    },
    {
      value: 'day1-6pm',
      label: 'Day 1: 6:00pm - 6:55pm',
    },
    {
      value: 'day2-9am',
      label: 'Day 2: 4:00am - 5:55',
    },
    {
      value: 'day2-4pm',
      label: 'Day 2: 4:00pm - 4:55',
    },
  ],
};
