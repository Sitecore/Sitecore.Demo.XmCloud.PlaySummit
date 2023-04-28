import { Meta } from '@storybook/react';

import { Default as NewsList } from '../../components/News/NewsList';
import { News } from 'src/types/news';

export default {
  title: 'Components/News/NewsList',
  component: NewsList,
} as Meta<typeof NewsList>;

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

export const Default = {
  args: {
    fields: {
      items: [news1, news2, news3],
    },
  },
};
