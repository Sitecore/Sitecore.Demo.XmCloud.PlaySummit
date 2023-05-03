import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import SearchInput from '../../components/PreviewSearch/SearchInput';
import { mockDiscoverData } from '../mock-discover-data';

export default {
  title: 'Components/PreviewSearch/SearchInput',
  component: SearchInput,
} as Meta<typeof SearchInput>;

export const Default = {
  args: mockDiscoverData.searchInputProps,

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

export const WithoutPlaceholder = {
  args: {
    ...mockDiscoverData.searchInputProps,
    placeholder: '',
  },

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
