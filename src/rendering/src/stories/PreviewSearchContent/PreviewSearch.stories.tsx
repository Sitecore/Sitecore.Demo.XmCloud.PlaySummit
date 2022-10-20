import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PreviewSearchPopup } from '../../components/PreviewSearchContent/PreviewSearchContainer';
import { DiscoverNews } from '../../interfaces/discover/DiscoverNews';
import { DiscoverResponse } from '../../interfaces/discover/DiscoverResponse';
import { DiscoverSession } from '../../interfaces/discover/DiscoverSession';
import { DiscoverSpeaker } from '../../interfaces/discover/DiscoverSpeaker';
import { mockPreviewSearchFields } from '../Pages/PageStoriesCommon';

export default {
  title: 'Components/PreviewSearchContent/PreviewSearch',
  component: PreviewSearchPopup,
} as ComponentMeta<typeof PreviewSearchPopup>;

const Template: ComponentStory<typeof PreviewSearchPopup> = (args) => (
  <PreviewSearchPopup {...args} />
);

export const Default = Template.bind({});
const {
  news: { list: news },
  sessions: { list: sessions },
  speakers: { list: speakers },
} = mockPreviewSearchFields;
Default.args = {
  resultsUrl: '/search?q=test',
  news: { content: news, total_item: 10 } as DiscoverResponse<DiscoverNews>,
  sessions: { content: sessions, total_item: 10 } as DiscoverResponse<DiscoverSession>,
  speakers: { content: speakers, total_item: 10 } as DiscoverResponse<DiscoverSpeaker>,
};
