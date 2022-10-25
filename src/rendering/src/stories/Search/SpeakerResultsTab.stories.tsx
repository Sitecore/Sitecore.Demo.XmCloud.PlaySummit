import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import SpeakerResultsTab from '../../components/Search/SpeakerResultsTab';
import { GraphQLSpeaker } from '../../types/speaker';
import { facetsProp, filtersProp } from '../mock-discover-data';

export default {
  title: 'Components/Search/SpeakerResultsTab',
  component: SpeakerResultsTab,
} as ComponentMeta<typeof SpeakerResultsTab>;

const Template: ComponentStory<typeof SpeakerResultsTab> = (args) => (
  <SpeakerResultsTab {...args} />
);

export const Default = Template.bind({});

const speakerImage = {
  jsonValue: {
    value: {
      src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/78ef5a244c7c4bcfa129662b4ad93eca?v=1a73b3df&t=profile',
      alt: '',
    },
  },
};

const speaker1 = {
  itemName: 'First Speaker Name',
  name: {
    value: 'First Speaker Name',
  },
  picture: speakerImage,
  featured: {
    value: false,
  },
  jobTitle: {
    value: 'Speaker',
  },
  url: {
    path: '/speaker/Speaker-Name',
  },
} as GraphQLSpeaker;

const speaker2 = {
  itemName: 'Sophia Taylor',
  name: {
    value: 'Sophia Taylor',
  },
  picture: speakerImage,
  featured: {
    value: false,
  },
  jobTitle: {
    value: 'Speaker',
  },
  url: {
    path: '/speaker/Speaker-Name',
  },
} as GraphQLSpeaker;

const speaker3 = {
  itemName: 'Jalen Taylor',
  name: {
    value: 'Jalen Taylor',
  },
  picture: speakerImage,
  featured: {
    value: false,
  },
  jobTitle: {
    value: 'Speaker',
  },
  url: {
    path: '/speaker/Speaker-Name',
  },
} as GraphQLSpeaker;

Default.args = {
  facets: facetsProp,
  filters: filtersProp,
  items: [speaker1, speaker2, speaker3],
};
