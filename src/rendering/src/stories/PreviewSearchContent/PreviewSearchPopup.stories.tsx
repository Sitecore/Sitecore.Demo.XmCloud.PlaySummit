import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import PreviewSearchPopup from '../../components/PreviewSearchContent/PreviewSearchPopup';
import { ContentSearchNews } from '../../interfaces/contentSearch/ContentSearchNews';
import { ContentSearchWidgetResponse } from '../../interfaces/contentSearch/ContentSearchWidgetResponse';
import { ContentSearchSession } from '../../interfaces/contentSearch/ContentSearchSession';
import { ContentSearchSpeaker } from '../../interfaces/contentSearch/ContentSearchSpeaker';

export default {
  title: 'Components/PreviewSearchContent/PreviewSearchPopup',
  component: PreviewSearchPopup,
} as Meta<typeof PreviewSearchPopup>;

const Template: StoryFn<typeof PreviewSearchPopup> = (args) => (
  <div className="search-input-container">
    <PreviewSearchPopup {...args} />
  </div>
);

const {
  news: { list: news },
  sessions: { list: sessions },
  speakers: { list: speakers },
} = {
  sessions: {
    list: [
      {
        id: '1',
        image_url:
          'https://playsummit.sitecoresandbox.cloud/api/public/content/e67627244df04ec3a0ed5cdb5851160c?v=3df11beb&t=web',
        name: 'Session 1',
        description: 'Description 1',
        url: 'https://play-summit-dt-avwdiawgakytx0hdc9bpxa-website-ios01g972.vercel.app/sessions/1',
        days: ['Day 1', 'Day 3'],
        speakers: ['Jalen Williams'],
        start_time: '2 pm',
      },
      {
        id: '2',
        image_url:
          'https://playsummit.sitecoresandbox.cloud/api/public/content/e67627244df04ec3a0ed5cdb5851160c?v=3df11beb&t=web',
        name: 'Session 2',
        description: 'Description 2',
        url: 'https://play-summit-dt-avwdiawgakytx0hdc9bpxa-website-ios01g972.vercel.app/sessions/2',
        days: ['Day 1', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
        speakers: ['Jaden Smith', 'Peter Folp'],
        start_time: '2 pm',
      },
      {
        id: '3',
        image_url:
          'https://playsummit.sitecoresandbox.cloud/api/public/content/e67627244df04ec3a0ed5cdb5851160c?v=3df11beb&t=web',
        name: 'Session 3',
        description: 'Description 3',
        url: 'https://play-summit-dt-avwdiawgakytx0hdc9bpxa-website-ios01g972.vercel.app/sessions/3',
        days: ['Day 1'],
        speakers: ['Chris Rock'],
        start_time: '2 pm',
      },
      ,
      {
        id: '3',
        image_url:
          'https://playsummit.sitecoresandbox.cloud/api/public/content/e67627244df04ec3a0ed5cdb5851160c?v=3df11beb&t=web',
        name: 'Session 3',
        description: 'Description 3',
        url: 'https://play-summit-dt-avwdiawgakytx0hdc9bpxa-website-ios01g972.vercel.app/sessions/4',
        days: ['Day 1'],
        speakers: ['Peter Siegels'],
        start_time: '6 pm',
      },
    ] as unknown as ContentSearchSession[],
  },
  speakers: {
    list: [
      {
        id: '1',
        image_url:
          'https://playsummit.sitecoresandbox.cloud/api/public/content/3fcb3ce4bc0d4d778da7a3dc66fa1cb2?v=e3d5a7cb',
        name: 'Speaker 1',
        url: 'https://play-summit-dt-avwdiawgakytx0hdc9bpxa-website-ios01g972.vercel.app/speakers/1',
        location: 'Canada',
        company: 'Sitecore',
        job_title: 'Manager',
      },
      {
        id: '2',
        image_url:
          'https://playsummit.sitecoresandbox.cloud/api/public/content/0fd271e931024667b36c3e21dd3256b1?v=82e3ff67',
        name: 'Speaker 2',
        url: 'https://play-summit-dt-avwdiawgakytx0hdc9bpxa-website-ios01g972.vercel.app/speakers/2',
        location: 'EEUU',
        company: 'Sitecore',
        job_title: 'Developer',
      },
    ] as unknown as ContentSearchSpeaker[],
  },
  news: {
    list: [
      {
        image_url: '/assets/img/news/conference-image.jpg',
        name: 'News 1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.',
        url: 'https://play-summit-dt-avwdiawgakytx0hdc9bpxa-website-ios01g972.vercel.app/news/1',
        publish_date: 'Thu, July 29, 2021',
      },
      {
        image_url: '/assets/img/news/conference-image.jpg',
        name: 'News 2',
        description:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        url: 'https://play-summit-dt-avwdiawgakytx0hdc9bpxa-website-ios01g972.vercel.app/news/2',
        publish_date: 'Thu, July 29, 2021',
      },
      {
        image_url: '/assets/img/news/conference-image.jpg',
        name: 'News 3',
        description:
          'Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        url: 'https://play-summit-dt-avwdiawgakytx0hdc9bpxa-website-ios01g972.vercel.app/news/3',
        publish_date: 'Thu, July 29, 2021',
      },
    ] as unknown as ContentSearchNews[],
  },
};

export const Default = {
  render: Template,

  args: {
    resultsUrl: '/search?q=test',
    news: { content: news, total_item: 10 } as ContentSearchWidgetResponse<ContentSearchNews>,
    sessions: {
      content: sessions,
      total_item: 10,
    } as ContentSearchWidgetResponse<ContentSearchSession>,
    speakers: {
      content: speakers,
      total_item: 10,
    } as ContentSearchWidgetResponse<ContentSearchSpeaker>,
  },
};
