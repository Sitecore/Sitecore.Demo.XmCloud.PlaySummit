import { Meta } from '@storybook/react';

import SearchSessionResultsTab from '../../components/ContentSearch/SearchSessionResultsTab';
import { ContentSearchSession } from '../../interfaces/contentSearch/ContentSearchSession';
import { mockSearchResultsTabCommonArgs } from './ResultsTabArgs';

export default {
  title: 'Components/ContentSearch/SearchSessionResultsTab',
  component: SearchSessionResultsTab,
} as Meta<typeof SearchSessionResultsTab>;

const items = [
  {
    audience: ['Healthy Living'],
    days: ['Day 3'],
    description:
      'Our mission is to make yoga accessible to anyone who wants to deepen their knowledge in yoga or become a yoga teacher. We are a group of passionate and experienced teachers who are passionate about helping others to improve their health and fitness, whether through yoga, Pilates, or other fitness modalities. We are dedicated to providing a safe, nurturing environment to help you achieve your goals, regardless of your age, fitness level, or goals.',
    duration: 1,
    id: '526cff16-0b77-46fb-bf75-18922a5a510b',
    image_url:
      'https://playsummit.sitecoresandbox.cloud/api/public/content/9838d947f6484f49a4effb3d81f99101?v=ed84edbe&t=web',
    is_premium: true,
    name: 'So you want to be a yoga teacher?',
    rooms: ['Workshop Room 3'],
    speakers: ['Aly Nichols'],
    sponsors: ['Wave52'],
    url: 'https://play-summit-dt-avwdiawgakytx0hdc9bpxa-website-ios01g972.vercel.app/sessions/So-you-want-to-be-a-yoga-teacher',
    vendors: null,
  },
  {
    audience: null,
    days: ['Day 1', 'Day 2', 'Day 3'],
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede posuere.',
    duration: 1,
    id: '76b1d64b-c80d-4fe8-8ff2-7ff22360e341',
    image_url:
      'https://playsummit.sitecoresandbox.cloud/api/public/content/4380ef54a3754d908476d1b0d73fe325?v=e175886b&t=web',
    is_premium: false,
    name: 'Lunch',
    rooms: ['Striva Dining Hall', 'Prostaff Dining Hall'],
    speakers: null,
    sponsors: ['Striva', 'Prostaff'],
    url: 'https://play-summit-dt-avwdiawgakytx0hdc9bpxa-website-ios01g972.vercel.app/sessions/Lunch',
    vendors: ['Striva', 'Prostaff'],
  },
  {
    audience: ['Healthy Living'],
    days: ['Day 1'],
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede posuere.\n\nLorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat matti malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede posuere.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede posuere.',
    duration: 1,
    id: '91404cde-dfee-4269-b6e8-bab6ce8f15b9',
    image_url:
      'https://playsummit.sitecoresandbox.cloud/api/public/content/e67627244df04ec3a0ed5cdb5851160c?v=3df11beb&t=web',
    is_premium: false,
    name: 'Seven mindset strategies to raise your game',
    rooms: ['Curie Hall'],
    speakers: ['Ed Jones'],
    sponsors: null,
    url: 'https://play-summit-dt-avwdiawgakytx0hdc9bpxa-website-ios01g972.vercel.app/sessions/7-mindset-strategies-to-raise-your-game',
    vendors: null,
  },
  {
    audience: ['Healthy Living', 'Weekend Warrior'],
    days: ['Day 1'],
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede posuere.\n\nLorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede posuere.',
    duration: 2,
    id: '9f8bba60-5ab7-41e2-9d88-a5335d49407c',
    image_url:
      'https://playsummit.sitecoresandbox.cloud/api/public/content/a75e871e825c4eaaad2a91e26259e0ba?v=99c76a76&t=web',
    is_premium: true,
    name: 'Meet a pro: Q&A with Andre Favreau',
    rooms: ['Room 103'],
    speakers: ['Andre Favreau'],
    sponsors: null,
    url: 'https://play-summit-dt-avwdiawgakytx0hdc9bpxa-website-ios01g972.vercel.app/sessions/Meet-a-pro-QA-with--Andre-Favreau',
    vendors: null,
  },
  {
    audience: [
      'Adventure Seeker',
      'Fitness Fanatic',
      'Healthy Living',
      'Outdoor Enthusiast',
      'Weekend Warrior',
    ],
    days: ['Day 2'],
    description:
      "Join Tour de France champion Chris Williams for an exclusive Q&A in which he'll discuss his professional journey and highlights from his career.",
    duration: 2,
    id: 'a789a9c9-e3e8-45a5-9b0c-621b760c7d32',
    image_url:
      'https://playsummit.sitecoresandbox.cloud/api/public/content/8fb7fe8350b44cf781bba42d1ce34a27?v=46859a0a&t=web',
    is_premium: false,
    name: 'Guest Keynote with Chris Williams',
    rooms: ['Keynote Stage'],
    speakers: ['Chris Williams', 'Jessie Maher', 'Jake Johanssen'],
    sponsors: ['Striva'],
    url: 'https://play-summit-dt-avwdiawgakytx0hdc9bpxa-website-ios01g972.vercel.app/sessions/Guest-Keynote-with-Chris-Williams',
    vendors: null,
  },
] as ContentSearchSession[];

export const Default = {
  args: {
    ...mockSearchResultsTabCommonArgs,
    items,
  },
};
