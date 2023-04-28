import { Meta } from '@storybook/react';

import SearchVendorResultsTab from '../../components/ContentSearch/SearchVendorResultsTab';
import { ContentSearchVendor } from '../../interfaces/contentSearch/ContentSearchVendor';
import { mockSearchResultsTabCommonArgs } from './ResultsTabArgs';

export default {
  title: 'Components/ContentSearch/SearchVendorResultsTab',
  component: SearchVendorResultsTab,
} as Meta<typeof SearchVendorResultsTab>;

const items = [
  {
    activities: ['Basketball', 'Volleyball'],
    days: ['Day 1'],
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede posuere.\n\nLorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede posuere.',
    id: '3f809dbd-c095-40f0-ab32-d219cef1cfc1',
    image_url:
      'https://playsummit.sitecoresandbox.cloud/api/public/content/f11314c7d09e43e0a645185a255c99cf?v=537a6046&t=medium',
    level: 'Gold',
    name: 'Gameday',
    rooms: ['Keynote Stage'],
    sessions: ['Opening Keynote'],
    speakers: ['Martin Moore'],
    time_slots: ['9 am', '10 am'],
    url: 'https://play-summit-dt-avwdiawgakytx0hdc9bpxa-website-ios01g972.vercel.app/vendors/Gameday',
  },
  {
    activities: ['Cycling', 'Running', 'Hiking', 'Mountain Biking', 'Swimming', 'Scuba Diving'],
    days: ['Day 1'],
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede posuere.',
    id: '63c32663-c4af-40c0-9347-47411c130e87',
    image_url:
      'https://playsummit.sitecoresandbox.cloud/api/public/content/f4f6057bfdf345d389723e0d0d8fd095?v=dc95288b&t=medium',
    level: 'Silver',
    name: 'Outrace',
    rooms: ['Keynote Stage'],
    sessions: ['Opening Keynote'],
    speakers: ['Andre Favreau', 'Aly Nichols'],
    time_slots: ['9 am', '10 am'],
    url: 'https://play-summit-dt-avwdiawgakytx0hdc9bpxa-website-ios01g972.vercel.app/vendors/Outrace',
  },
  {
    activities: ['Running', 'Martial Arts'],
    days: ['Day 1', 'Day 3'],
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede posuere.',
    id: 'e67e1029-d58f-45e7-b85f-0e7e0086099e',
    image_url:
      'https://playsummit.sitecoresandbox.cloud/api/public/content/b73b74e73acf4c609f1c6cd669a7b2f3?v=9cb725e4&t=medium',
    level: 'Silver',
    name: 'Sydney Cummings',
    rooms: ['Keynote Stage', 'Meeting Room 1'],
    sessions: ['Opening Keynote', 'Closing Keynote', 'Ask an expert: nutrition'],
    speakers: ['Zoran Borovic', 'Jessie Maher'],
    time_slots: ['9 am', '10 am', '1 pm', '2 pm', '3 pm', '4 pm'],
    url: 'https://play-summit-dt-avwdiawgakytx0hdc9bpxa-website-ios01g972.vercel.app/vendors/Sydney-Cummings',
  },
  {
    activities: ['Basketball'],
    days: ['Day 1'],
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede posuere.',
    id: '057f1dbd-4119-4cd9-839b-70ef9cd07239',
    image_url:
      'https://playsummit.sitecoresandbox.cloud/api/public/content/95621f62b3c441ffa829e51f26317386?v=38081763&t=medium',
    level: 'Platinum',
    name: 'Overunder',
    rooms: ['Keynote Stage'],
    sessions: ['Opening Keynote'],
    speakers: null,
    time_slots: ['9 am', '10 am'],
    url: 'https://play-summit-dt-avwdiawgakytx0hdc9bpxa-website-ios01g972.vercel.app/vendors/Overunder',
  },
  {
    activities: [
      'Cycling',
      'Mountain Biking',
      'Running',
      'Hiking',
      'Swimming',
      'Kayaking',
      'Sailing',
      'Surfing',
    ],
    days: ['Day 1', 'Day 2', 'Day 3'],
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede posuere.',
    id: '01e09652-abd7-4bb0-ad96-e609966330bd',
    image_url:
      'https://playsummit.sitecoresandbox.cloud/api/public/content/0568eb4ee9a241579b786d1a21e41554?v=fdec6fcb&t=medium',
    level: 'Platinum',
    name: 'Striva',
    rooms: [
      'Keynote Stage',
      'Striva Dining Hall',
      'Prostaff Dining Hall',
      'Workshop Room 1',
      'Workshop Room 2',
    ],
    sessions: ['Opening Keynote', 'Lunch', 'Intro to Cycling - Sponsored by Striva', 'Breakfast'],
    speakers: ['Mary Asada', 'Jacob Gonzalez', 'Alex Mena'],
    time_slots: ['9 am', '10 am', '12 noon', '8 am'],
    url: 'https://play-summit-dt-avwdiawgakytx0hdc9bpxa-website-ios01g972.vercel.app/vendors/Striva',
  },
] as ContentSearchVendor[];

export const Default = {
  args: {
    ...mockSearchResultsTabCommonArgs,
    items,
  },
};
