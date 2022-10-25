import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import NewsResultsTab from '../../components/Search/NewsResultsTab';
import { News } from '../../types/news';
import { facetsProp, filtersProp } from '../mock-discover-data';

export default {
  title: 'Components/Search/NewsResultsTab',
  component: NewsResultsTab,
} as ComponentMeta<typeof NewsResultsTab>;

const Template: ComponentStory<typeof NewsResultsTab> = (args) => <NewsResultsTab {...args} />;

export const Default = Template.bind({});

const news1 = {
  name: {
    value: 'PLAY Summit Goes Live',
  },
  fields: {
    Title: {
      value: 'PLAY! Summit Goes Live',
    },
    Excerpt: {
      value:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan posuere orci, placerat tristique quam vulputate non. Aliquam erat volutpat. Vestibulum ante ipsum primis in orci luctus et posuere cubilia curae; Sed mollis tincidunt magna eu blandit.',
    },
    PublishDate: {
      value: '2021-07-29T06:00:00Z',
    },
    Image: {
      value: {
        src: '/assets/img/tickets/Banner2.jpg',
      },
    },
  },
  url: '/news/item',
} as News;

const news2 = {
  name: {
    value: 'Sample News',
  },
  fields: {
    Title: {
      value: 'Sample News',
    },
    Excerpt: {
      value:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan posuere orci, placerat tristique quam vulputate non. Aliquam erat volutpat. Vestibulum ante ipsum primis in orci',
    },
    PublishDate: {
      value: '2021-07-29T06:00:00Z',
    },
    Image: {
      value: {
        src: '/assets/img/tickets/Banner2.jpg',
      },
    },
  },
  rendering: {
    componentName: 'Rendering',
    dataSource: '/sitecore',
  },
  url: '/news/item',
} as News;

const news3 = {
  name: {
    value: 'Tomorrow News',
  },
  fields: {
    Title: {
      value: 'Tomorrow News',
    },
    Excerpt: {
      value:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan posuere orci, placerat tristique quam vulputate non.',
    },
    PublishDate: {
      value: '2021-07-29T06:00:00Z',
    },
    Image: {
      value: {
        src: '/assets/img/tickets/Banner2.jpg',
      },
    },
  },
  url: '/news/item',
} as News;

const news4 = {
  name: {
    value: 'Tomorrow News',
  },
  fields: {
    Title: {
      value: 'Tomorrow News',
    },
    Excerpt: {
      value:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan posuere orci, placerat tristique quam vulputate non.',
    },
    PublishDate: {
      value: '2021-07-29T06:00:00Z',
    },
    Image: {
      value: {
        src: '/assets/img/tickets/Banner2.jpg',
      },
    },
  },
  url: '/news/item',
} as News;

Default.args = {
  facets: facetsProp,
  filters: filtersProp,
  items: [news1, news2, news3, news4],
};
