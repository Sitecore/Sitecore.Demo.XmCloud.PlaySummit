import { Meta } from '@storybook/react';

import { Default as SpeakerInformationPageHero } from '../../components/Speakers/SpeakerInformationPageHero';

export default {
  title: 'Components/Speakers/SpeakerInformationPageHero',
  component: SpeakerInformationPageHero,
} as Meta<typeof SpeakerInformationPageHero>;

const fields = {
  Name: {
    value: 'Alex Mena',
  },
  Picture: {
    value: {
      src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/8f466142f88c4d5c87e29461eddc222f?v=7a63a542',
      height: 1100,
      width: 1100,
    },
  },
  JobTitle: {
    value: 'International Sales Director',
  },
  Company: {
    value: 'Solstice',
  },
  Location: {
    value: 'Paris, France',
  },
  FacebookProfileLink: {
    value: 'https://facebook.com/asada',
  },
  TwitterProfileLink: {
    value: 'https://twitter.com/asada',
  },
  InstagramProfileLink: {
    value: 'https://instagram.com/asada',
  },
  LinkedinProfileLink: {
    value: 'https://linkedin.com/asada',
  },
};

export const Featured = {
  args: {
    fields: {
      ...fields,
      Featured: {
        value: true,
      },
    },
  },
};

export const Regular = {
  args: {
    fields: {
      ...fields,
      Featured: {
        value: false,
      },
    },
  },
};
