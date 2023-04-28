import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import CategoryBreadcrumb from '../../components/Navigation/CategoryBreadcrumb';
import { categoriesData } from '../../temp/categoriesData';

export default {
  title: 'Components/Navigation/CategoryBreadcrumb',
  component: CategoryBreadcrumb,
} as Meta<typeof CategoryBreadcrumb>;

const Template: StoryFn<typeof CategoryBreadcrumb> = (args) => (
  <div className="bg-blue">
    <CategoryBreadcrumb {...args} />
  </div>
);

export const NoCategory = {
  render: Template,
  args: {},
};

export const RootCategory = {
  render: Template,

  args: {
    category: categoriesData[0],
  },
};

export const FirstLevelCategory = {
  render: Template,

  args: {
    category: categoriesData[1],
  },
};

export const SecondLevelCategory = {
  render: Template,

  args: {
    category: categoriesData[2],
  },
};
