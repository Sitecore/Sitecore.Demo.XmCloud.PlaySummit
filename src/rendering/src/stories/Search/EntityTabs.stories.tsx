import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import SearchEntityTabs from '../../components/Search/SearchEntityTabs';
import SearchProvider from '../../components/Search/SearchProvider';

export default {
  title: 'Components/Search/SearchEntityTabs',
  component: SearchEntityTabs,
} as ComponentMeta<typeof SearchEntityTabs>;

const Template: ComponentStory<typeof SearchEntityTabs> = (args) => (
  <SearchProvider keyphrase="">
    <SearchEntityTabs {...args} />
  </SearchProvider>
);

export const Default = Template.bind({});
Default.args = {
  selected: 'sessions',
  tabs: [
    {
      id: 'sessions',
      name: 'Sessions (8)',
      color: '#3d93ff',
      Component: () => <div>Sessions component</div>,
    },
    {
      id: 'speakers',
      name: 'Speakers (6)',
      color: '#ff8d02',
      Component: () => <div>Speakers component</div>,
    },
    {
      id: 'vendors',
      name: 'Vendors (3)',
      color: '#ff1a87',
      Component: () => <div>Vendors component</div>,
    },
    {
      id: 'sponsors',
      name: 'Sponsors (1)',
      color: '#ffd51d',
      Component: () => <div>Sponsors component</div>,
    },
    {
      id: 'articles',
      name: 'News (10)',
      color: '#000',
      Component: () => <div>News Articles component</div>,
    },
  ],
};

// PROFLE=sitecore aws3 sync ./build s3://rfk-widget-sdk-doc/playsummit --acl public-read --delete && PROFILE=sitecore aws cloudfront create-invalidation --distribution-id EGKWMJ67NHVCP --paths "/index.html"
