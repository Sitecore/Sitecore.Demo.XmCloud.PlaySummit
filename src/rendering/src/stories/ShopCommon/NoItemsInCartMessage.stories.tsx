import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import NoItemsInCartMessage from '../../components/ShopCommon/NoItemsInCartMessage';

export default {
  title: 'Components/ShopCommon/NoItemsInCartMessage',
  component: NoItemsInCartMessage,
} as Meta<typeof NoItemsInCartMessage>;

const Template: StoryFn<typeof NoItemsInCartMessage> = () => <NoItemsInCartMessage />;

export const Default = {
  render: Template,
};
