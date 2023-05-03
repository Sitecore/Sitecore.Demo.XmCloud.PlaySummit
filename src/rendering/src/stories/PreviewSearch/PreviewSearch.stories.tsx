import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import PreviewSearch from '../../components/PreviewSearch/PreviewSearch';
import { mockDiscoverData } from '../mock-discover-data';

export default {
  title: 'Components/PreviewSearch/PreviewSearch',
  component: PreviewSearch,
} as Meta<typeof PreviewSearch>;

export const Default = {
  args: mockDiscoverData.previewSearchProps,

  decorators: [
    (Story: StoryFn) => (
      <div className="shop-navigation">
        <div className="shop-navigation-content">
          <div className="shop-search-input-container">
            <Story />
          </div>
        </div>
      </div>
    ),
  ],
};
