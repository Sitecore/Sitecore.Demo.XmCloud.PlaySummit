import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import HeaderContent from '../../components/Navigation/HeaderContent';
import HeaderCdpMessageBar from '../../components/HeaderCdpMessageBar';
import { Default as HeroSection, HeroProps } from '../../components/PageContent/HeroSection';
import {
  Default as ThreeColumnsSection,
  ThreeColumnsSectionProps,
} from '../../components/PageContent/ThreeColumnsSection';
import {
  Default as SelectedSponsorsGrid,
  SelectedSponsorsGridProps,
} from '../../components/Sponsors/SelectedSponsorsGrid';
import { Default as Footer } from '../../components/Navigation/Footer';
import { Sponsor } from 'src/types/sponsor';
import { mockFooterProps, mockHeaderProps } from './PageStoriesCommon';
import PersonalizedPicksWrapper, {
  PersonalizedPicksWrapperProps,
} from 'components/ContentSearch/PersonalizedPicksWrapper';
import { Default as Section } from '../../components/PageContent/Section';

export default {
  title: 'Pages/Home Page',
} as Meta<typeof HeroSection>;

const heroProps = {
  fields: {
    Hero: {
      value: {
        src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/95619f8c034947a2aa2ce5b39146ccf5?v=c63ff08e',
      },
    },
    Slogan: {
      value: 'READY | STEADY | PLAY!',
    },
    Eyebrow: {
      value: 'Sports and Recreation Expo',
    },
    Title: {
      value: 'RAISE YOUR GAME',
    },
    Body: {
      value: 'Join us in person or online for the fifth annual PLAY! Summit.',
    },
  },
  rendering: {
    placeholders: {
      'jss-hero-section-content': [
        {
          uid: '04d6b23e-6ce3-51a1-9c9c-4cd56b29b6aa',
          componentName: 'HeroSectionCta',
          dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
          params: {},
          fields: {
            Link: {
              value: {
                href: '/tickets',
                text: 'Book Tickets',
              },
            },
          },
        },
      ],
    },
    dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
  },
} as unknown as HeroProps;

const sponsor1 = {
  Name: 'Item Name',
  fields: {
    Name: {
      value: '',
    },
    Logo: {
      value: {
        src: '/assets/img/sponsors/sponsors-fitbit.svg',
      },
    },
  },
  url: '/sponsors/test',
} as Sponsor;

const sponsor2 = {
  Name: 'Item Name',
  fields: {
    Name: {
      value: '',
    },
    Logo: {
      value: {
        src: '/assets/img/sponsors/sponsors-sports.svg',
      },
    },
  },
  url: '/sponsors/test',
} as Sponsor;

const sponsor3 = {
  Name: 'Item Name',
  fields: {
    Name: {
      value: '',
    },
    Logo: {
      value: {
        src: '/assets/img/sponsors/sponsors-fitbit.svg',
      },
    },
  },
  url: '/sponsors/test',
} as Sponsor;

const sponsorProps = {
  fields: {
    Title: {
      value: '',
    },
    Subtitle: {
      value: '',
    },
    Sponsors: [sponsor1, sponsor2, sponsor3],
  },
  rendering: {
    componentName: 'Rendering',
    dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
  },
} as unknown as SelectedSponsorsGridProps;

const threeColProps = {
  fields: {
    Title: {
      value: 'GO THE DISTANCE',
    },
    Subtitle: {
      value:
        'Whether you’re joining us in person or online, this year’s PLAY! Summit is set to be our biggest and best event yet. Look forward to an action-packed line-up featuring keynotes, Q&As, demos, and workshops across a mix of live and virtual stages.',
    },
    LeftLogo: {
      value: {
        src: '/assets/img/headline-icon-schedule.svg',
      },
    },
    LeftTitle: {
      value: '48 Talks and Workshops',
    },
    LeftLink: {
      value: {
        href: '/sessions',
        text: 'View Sessions',
      },
    },
    MiddleLogo: {
      value: {
        src: '/assets/img/headline-icon-speakers.svg',
      },
    },
    MiddleTitle: {
      value: '32 Speakers and Guest Speakers',
    },
    MiddleLink: {
      value: {
        href: '/speakers',
        text: 'View Speakers',
      },
    },
    RightLogo: {
      value: {
        src: '/assets/img/headline-icon-vendors.svg',
      },
    },
    RightTitle: {
      value: '60 Vendors with VIP Products',
    },
    RightLink: {
      value: {
        href: '/vendors',
        text: 'View Vendors',
      },
    },
  },
  rendering: {
    componentName: 'Rendering',
    dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
  },
} as ThreeColumnsSectionProps;

const personalizedPicksProps = { params: { styles: 'test' } } as PersonalizedPicksWrapperProps;

const sectionProps = {
  params: {
    styles: 'section-light',
  },
  fields: {
    title: {
      value: 'Personalized Picks',
    },
    content: {
      value:
        'A handpicked selection of content recommendations based on your preferences and browsing history.',
    },
    callToActionLink: {
      value: {},
    },
  },
  rendering: {
    componentName: 'Section',
    dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
  },
};

const Template: StoryFn<typeof HeroSection> = () => {
  return (
    <>
      <header>
        <HeaderContent {...mockHeaderProps} />
      </header>
      <main>
        <HeaderCdpMessageBar />
        <HeroSection {...heroProps} />
        <ThreeColumnsSection {...threeColProps} />
        <SelectedSponsorsGrid {...sponsorProps} />
        <Section {...sectionProps}>
          <PersonalizedPicksWrapper {...personalizedPicksProps} />
        </Section>
      </main>
      <footer>
        <Footer {...mockFooterProps} />
      </footer>
    </>
  );
};

export const Default = {
  render: Template,
  args: {},
};
