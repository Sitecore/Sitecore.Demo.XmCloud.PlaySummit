import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import SponsorResultsTab from '../../components/Search/SponsorResultsTab';
import { Sponsor } from '../../types/sponsor';
import { facetsProp, filtersProp } from '../mock-discover-data';

export default {
  title: 'Components/Search/SponsorResultsTab',
  component: SponsorResultsTab,
} as ComponentMeta<typeof SponsorResultsTab>;

const Template: ComponentStory<typeof SponsorResultsTab> = (args) => (
  <SponsorResultsTab {...args} />
);

export const Default = Template.bind({});

const fitbit = {
  Name: 'Fitbit',
  fields: {
    Name: {
      value: 'Fitbit',
    },
    Level: {
      value: 'Sponsor Level',
    },
    Logo: {
      value: {
        src: '/assets/img/sponsors/sponsors-fitbit.svg',
        alt: '',
      },
    },
  },
  url: '/vendors/test',
} as Sponsor;

const sports = {
  Name: 'Sports',
  fields: {
    Name: {
      value: 'Sports',
    },
    Level: {
      value: 'Sponsor Level',
    },
    Logo: {
      value: {
        src: '/assets/img/sponsors/sponsors-sports.svg',
        alt: '',
      },
    },
  },
  url: '/vendors/test',
} as Sponsor;

Default.args = {
  facets: facetsProp,
  filters: filtersProp,
  items: [fitbit, sports],
};
