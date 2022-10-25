import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import VendorResultsTab from '../../components/Search/VendorResultsTab';
import { Vendor } from '../../types/vendor';
import { facetsProp, filtersProp } from '../mock-discover-data';

export default {
  title: 'Components/Search/VendorResultsTab',
  component: VendorResultsTab,
} as ComponentMeta<typeof VendorResultsTab>;

const Template: ComponentStory<typeof VendorResultsTab> = (args) => <VendorResultsTab {...args} />;

export const Default = Template.bind({});

const fitbit = {
  Name: 'Fitbit',
  fields: {
    Name: {
      value: 'Fitbit',
    },
    Level: {
      value: 'Vendor Level',
    },
    Logo: {
      value: {
        src: '/assets/img/sponsors/sponsors-fitbit.svg',
        alt: '',
      },
    },
  },
  url: '/vendors/test',
} as Vendor;

const sports = {
  Name: 'Sports',
  fields: {
    Name: {
      value: 'Sports',
    },
    Level: {
      value: 'Vendor Level',
    },
    Logo: {
      value: {
        src: '/assets/img/sponsors/sponsors-sports.svg',
        alt: '',
      },
    },
  },
  url: '/vendors/test',
} as Vendor;

Default.args = {
  facets: facetsProp,
  filters: filtersProp,
  items: [fitbit, sports],
};
