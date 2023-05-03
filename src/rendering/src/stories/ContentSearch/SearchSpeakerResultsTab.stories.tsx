import { Meta } from '@storybook/react';

import SearchSpeakerResultsTab from '../../components/ContentSearch/SearchSpeakerResultsTab';
import { ContentSearchSpeaker } from '../../interfaces/contentSearch/ContentSearchSpeaker';
import { mockSearchResultsTabCommonArgs } from './ResultsTabArgs';

export default {
  title: 'Components/ContentSearch/SearchSpeakerResultsTab',
  component: SearchSpeakerResultsTab,
} as Meta<typeof SearchSpeakerResultsTab>;

const items = [
  {
    company: 'Wave52',
    days: ['Day 2'],
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede posuere.\n\nLorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede posuere.',
    id: '13f1fd3b-8133-4833-b4d4-6d8cd2d7bef5',
    image_url:
      'https://playsummit.sitecoresandbox.cloud/api/public/content/8829dbe0f70b4ecc89279b65591d6634?v=cdb1e298&t=profile',
    is_featured: false,
    job_title: 'Business Intelligence',
    location: 'San Diego, California',
    name: 'Li Xiu Ying',
    rooms: ['Keynote Stage'],
    sessions: ['Diversity and inclusion: Real world examples'],
    time_slots: ['2 pm'],
    url: 'https://play-summit-dt-avwdiawgakytx0hdc9bpxa-website-ios01g972.vercel.app/speakers/Li-Xiu-Ying',
  },
  {
    company: null,
    days: ['Day 2', 'Day 1', 'Day 3'],
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede posuere.\n\nLorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede posuere.',
    id: '80c74986-8eeb-47e7-b9ff-ca95cb103f16',
    image_url:
      'https://playsummit.sitecoresandbox.cloud/api/public/content/eba80f8fbf9041fcbe614b4a9e46b6bb?v=c387c678&t=profile',
    is_featured: false,
    job_title: 'Master of Ceremonies',
    location: 'Los Angeles, California',
    name: 'Jake Johanssen',
    rooms: ['Keynote Stage'],
    sessions: ['Guest Keynote with Chris Williams', 'Opening Keynote', 'Closing Keynote'],
    time_slots: ['3 pm', '4 pm', '9 am', '10 am', '1 pm', '2 pm'],
    url: 'https://play-summit-dt-avwdiawgakytx0hdc9bpxa-website-ios01g972.vercel.app/speakers/Jake-Johanssen',
  },
  {
    company: 'ACE',
    days: ['Day 1'],
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede posuere.\n\nLorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede posuere.',
    id: 'b514a206-cc4d-4815-989a-5b4da2641d7f',
    image_url:
      'https://playsummit.sitecoresandbox.cloud/api/public/content/2ff534ff94604f7ca26688b1b8952f38?v=1ca08199&t=profile',
    is_featured: false,
    job_title: 'Public Relations Manager',
    location: 'Dublin, Ireland',
    name: 'Sophia Taylor',
    rooms: ['Faraday Hall'],
    sessions: ['Healthy living: reality vs. theory'],
    time_slots: ['1 pm'],
    url: 'https://play-summit-dt-avwdiawgakytx0hdc9bpxa-website-ios01g972.vercel.app/speakers/Sophia-Taylor',
  },
  {
    company: null,
    days: ['Day 1'],
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede posuere.\n\nLorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede posuere.',
    id: '214de422-5240-44d6-8279-1454742a55fe',
    image_url:
      'https://playsummit.sitecoresandbox.cloud/api/public/content/4deed22efd2a4835b0d624db0ae3792f?v=1b14d29a&t=profile',
    is_featured: true,
    job_title: 'Fishing World Champion',
    location: 'Croatia',
    name: 'Zoran Borovic',
    rooms: ['Room 102', 'Keynote Stage'],
    sessions: ['Meet a pro: Q&A with Zoran Borovic', 'Opening Keynote'],
    time_slots: ['3 pm', '4 pm', '9 am', '10 am'],
    url: 'https://play-summit-dt-avwdiawgakytx0hdc9bpxa-website-ios01g972.vercel.app/speakers/Zoran-Borovic',
  },
  {
    company: 'Final Whistle',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede posuere.\n\nLorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede posuere.',
    id: '5b28b824-5848-4113-94f2-c9fdd4cb1805',
    image_url:
      'https://playsummit.sitecoresandbox.cloud/api/public/content/7cf789b6b8e5494c8a946a3f38b8bafe?v=ed61a959&t=profile',
    is_featured: false,
    job_title: 'Creative Director',
    location: 'Vancouver, Canada',
    name: 'Kate Green',
    sessions: null,
    url: 'https://play-summit-dt-avwdiawgakytx0hdc9bpxa-website-ios01g972.vercel.app/speakers/Kate-Green',
  },
] as ContentSearchSpeaker[];

export const Default = {
  args: {
    ...mockSearchResultsTabCommonArgs,
    items,
  },
};
