import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { SearchResponseSuggestion } from '@sitecore-search/react';

import PreviewSearchPopup from '../../components/PreviewSearchContent/PreviewSearchPopup';
import { previewSearchItemsProp } from '../mock-search-data';

export default {
  title: 'Components/PreviewSearchContent/PreviewSearchPopup',
  component: PreviewSearchPopup,
} as Meta<typeof PreviewSearchPopup>;

const Template: StoryFn<typeof PreviewSearchPopup> = (args) => (
  <div className="search-input-container">
    <PreviewSearchPopup {...args} />
  </div>
);

export const Default = {
  render: Template,
  args: {
    items: previewSearchItemsProp,
    widgetRef: null as () => void,
    suggestions: [] as SearchResponseSuggestion[],
    keyphrase: 'train',
  },
};

export const WithSuggestions = {
  render: Template,
  args: {
    items: previewSearchItemsProp,
    widgetRef: null as () => void,
    suggestions: [{ freq: 1, text: 'train smarter not harder' }] as SearchResponseSuggestion[],
    keyphrase: 'train',
  },
};
