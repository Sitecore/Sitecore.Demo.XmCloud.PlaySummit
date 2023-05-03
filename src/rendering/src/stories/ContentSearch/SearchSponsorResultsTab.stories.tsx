import { Meta } from '@storybook/react';

import SearchSponsorResultsTab from '../../components/ContentSearch/SearchSponsorResultsTab';
import { ContentSearchSponsor } from '../../interfaces/contentSearch/ContentSearchSponsor';
import { mockSearchResultsTabCommonArgs } from './ResultsTabArgs';

export default {
  title: 'Components/ContentSearch/SearchSponsorResultsTab',
  component: SearchSponsorResultsTab,
} as Meta<typeof SearchSponsorResultsTab>;

const items = [
  {
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede posuere.',
    id: '8418e88d-2b0e-491d-9e8c-3243b7bc02fd',
    image_url:
      'https://playsummit.sitecoresandbox.cloud/api/public/content/07e77ec5309c45a284a2ee3ef841e222?v=367250b7&t=medium',
    level: 'Silver',
    name: 'Redsand',
    sessions: null,
    speakers: ['Ryan Benton'],
    url: 'https://play-summit-dt-avwdiawgakytx0hdc9bpxa-website-ios01g972.vercel.app/sponsors/Redsand',
  },
  {
    description:
      "Alba is a Spanish sports equipment company that designs and markets high-performance men's and women's shoes, clothing, and accessories. Headquartered in Barcelona, Alba products are available in 60 countries worldwide.\n\nAlba, founded in 1984, originally manufactured shoes for a broad range of sports. In 2001, the company refocused the brand solely on running, and its concentration on performance technology was increased. Alba continues to be a top selling brand in the specialty running shoe market with a 22% market share.",
    id: '5319ca3c-cd21-4d68-a68a-1eaf4d34f63d',
    image_url:
      'https://playsummit.sitecoresandbox.cloud/api/public/content/949c003d42af49be962cd99f31eb3efd?v=f6979300&t=medium',
    level: 'Platinum',
    name: 'Alba',
    sessions: null,
    speakers: null,
    url: 'https://play-summit-dt-avwdiawgakytx0hdc9bpxa-website-ios01g972.vercel.app/sponsors/Alba',
  },
  {
    days: ['Day 1', 'Day 2', 'Day 3'],
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede posuere.',
    id: 'b7037186-1a7e-4f74-ac52-7c99510fa529',
    image_url:
      'https://playsummit.sitecoresandbox.cloud/api/public/content/ed3fa90112ad4c298b0429ce545c5401?v=d91651cd&t=medium',
    level: 'Platinum',
    name: 'Prostaff',
    rooms: ['Striva Dining Hall', 'Prostaff Dining Hall'],
    sessions: ['Lunch', 'Breakfast'],
    speakers: null,
    time_slots: ['12 noon', '8 am'],
    url: 'https://play-summit-dt-avwdiawgakytx0hdc9bpxa-website-ios01g972.vercel.app/sponsors/Prostaff',
  },
  {
    days: ['Day 2', 'Day 3'],
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede posuere.',
    id: '8c5f5b0a-b6a6-46ce-a34a-6a76e7b4fd2e',
    image_url:
      'https://playsummit.sitecoresandbox.cloud/api/public/content/61803a38d0a943d5913c70dc2bb6cb55?v=f79a617e&t=medium',
    level: 'Silver',
    name: 'Spark',
    rooms: ['Room 103', 'Workshop Room 2', 'Workshop Room 1', 'Meeting Room 3'],
    sessions: [
      'Organizing the impossible: How to host a cycling race',
      'Mountain biking: maintenance or misfortune',
      'Ask an expert: ski and snowboard gear',
    ],
    speakers: ['Martin Moore'],
    time_slots: ['9 am', '10 am', '3 pm', '4 pm'],
    url: 'https://play-summit-dt-avwdiawgakytx0hdc9bpxa-website-ios01g972.vercel.app/sponsors/Spark',
  },
  {
    days: ['Day 2'],
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede posuere.',
    id: 'a512c4fc-301e-4191-ade1-e618f4f6895b',
    image_url:
      'https://playsummit.sitecoresandbox.cloud/api/public/content/d341a690eae94de5a57546bd4a1c9c94?v=a85fc07c&t=medium',
    level: 'Gold',
    name: 'Pacifique',
    rooms: ['Room 101'],
    sessions: ['Fuel for life: nutrition 101'],
    speakers: ['Aly Nichols'],
    time_slots: ['11 am'],
    url: 'https://play-summit-dt-avwdiawgakytx0hdc9bpxa-website-ios01g972.vercel.app/sponsors/Pacifique',
  },
] as ContentSearchSponsor[];

export const Default = {
  args: {
    ...mockSearchResultsTabCommonArgs,
    items,
  },
};
