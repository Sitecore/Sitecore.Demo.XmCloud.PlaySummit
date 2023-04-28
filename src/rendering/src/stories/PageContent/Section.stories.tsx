import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Default as Section } from '../../components/PageContent/Section';
import { Default as SpeakersGrid, SpeakersGridProps } from '../../components/Speakers/SpeakersGrid';
import { GraphQLSpeaker } from 'src/types/speaker';

export default {
  title: 'Components/PageContent/Section',
  component: Section,
} as Meta<typeof Section>;

const speakerImage = {
  jsonValue: {
    value: {
      src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/78ef5a244c7c4bcfa129662b4ad93eca?v=1a73b3df&t=profile',
      alt: '',
    },
  },
};

const speaker = {
  name: {
    value: 'Speaker Name',
  },
  picture: speakerImage,
  featured: {
    value: true,
  },
  jobTitle: {
    value: 'Speaker',
  },
  url: {
    path: '/speaker/Speaker-Name',
  },
} as GraphQLSpeaker;

const speakerProps = {
  fields: {
    data: {
      item: {
        children: {
          results: [speaker, speaker, speaker, speaker],
        },
      },
    },
  },
} as SpeakersGridProps;

const Template: StoryFn<typeof Section> = (args) => (
  <Section {...args}>
    <SpeakersGrid {...speakerProps} />
  </Section>
);

export const Light = {
  render: Template,

  args: {
    params: {
      styles: 'section-light',
    },
    fields: {
      title: {
        value: 'Section',
      },
      content: {
        value: 'Section Content',
      },
      callToActionLink: {
        value: {
          href: '/speakers',
          text: 'View Speakers',
        },
      },
    },
  },
};

export const LightPatternBackground = {
  render: Template,

  args: {
    params: {
      styles: 'section-light section-light-pattern',
    },
    fields: {
      title: {
        value: 'Section',
      },
      content: {
        value: 'Section Content',
      },
      callToActionLink: {
        value: {
          href: '/speakers',
          text: 'View Speakers',
        },
      },
    },
  },
};

export const Dark = {
  render: Template,

  args: {
    params: {
      styles: 'section-dark',
    },
    fields: {
      title: {
        value: 'Section',
      },
      content: {
        value: 'Section Content',
      },
      callToActionLink: {
        value: {
          href: '/speakers',
          text: 'View Speakers',
        },
      },
    },
  },
};

export const DarkPatternBackground = {
  render: Template,

  args: {
    params: {
      styles: 'section-dark section-dark-pattern',
    },
    fields: {
      title: {
        value: 'Section',
      },
      content: {
        value: 'Section Content',
      },
      callToActionLink: {
        value: {
          href: '/speakers',
          text: 'View Speakers',
        },
      },
    },
  },
};

export const FullLeft = {
  render: Template,

  args: {
    params: {
      styles: 'section-full-left',
    },
    fields: {
      title: {
        value: 'Section',
      },
      content: {
        value:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et quis corporis, amet aspernatur, laudantium ducimus voluptatum suscipit quae unde sapiente harum asperiores aperiam perspiciatis eligendi, ratione maiores modi. Dolore, consectetur modi. Quisquam, vero repellat dolorum voluptas, fugiat odit necessitatibus ut iste corporis, a numquam corrupti eligendi non minima. Sunt, placeat?',
      },
      callToActionLink: {
        value: {
          href: '/speakers',
          text: 'View Speakers',
        },
      },
    },
  },
};
