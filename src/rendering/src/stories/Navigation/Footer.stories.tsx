import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Default as Footer } from '../../components/Navigation/Footer';
import { mockFooterProps } from '../Pages/PageStoriesCommon';

export default {
  title: 'Components/Navigation/Footer',
  component: Footer,
} as Meta<typeof Footer>;

const Template: StoryFn<typeof Footer> = (args) => {
  return (
    <footer>
      <Footer {...args} />
    </footer>
  );
};

export const Default = {
  render: Template,
  args: mockFooterProps,
};
