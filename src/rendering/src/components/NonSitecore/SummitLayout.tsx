import React, { PropsWithChildren, useEffect } from 'react';
import Head from 'next/head';
import { logViewEvent } from '../../services/BoxeverService';
import { Default as Footer, FooterProps } from '../Navigation/Footer';
import HeaderContent, { HeaderContentProps } from '../Navigation/HeaderContent';
import HeaderCdpMessageBar from '../HeaderCdpMessageBar';
import { Default as MainNavigation, MainNavigationProps } from '../Navigation/MainNavigation';

const SummitLayout = (props: PropsWithChildren): JSX.Element => {
  useEffect(() => {
    // Log a CDP page view on route change
    const pushState = history.pushState;
    history.pushState = (...rest) => {
      pushState.apply(history, rest);
      logViewEvent();
    };
  }, []);

  const headerContentProps = {
    fields: {
      data: {
        item: {
          children: {
            results: [],
          },
        },
      },
    },
    sitecoreContext: {
      Languages: [
        {
          Name: 'en',
        },
        {
          Name: 'fr-CA',
        },
      ],
      language: 'en',
    },
    rendering: {
      uid: '8ae6e35d-21e3-49a4-9728-29308cf51606',
      componentName: 'Header',
      dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
      params: {
        CacheClearingBehavior: 'Clear on publish',
      },
      placeholders: {
        'jss-header-content': [],
      },
      fields: {
        data: {
          item: {
            children: {
              results: [],
            },
          },
        },
      },
    },
  } as unknown as HeaderContentProps;

  const footerProps = {
    fields: {
      data: {
        item: {
          footerLogo: {
            jsonValue: {
              value: {
                src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/c78f4095acc746a98146aaa38f57a04f?v=85bba949&t=web',
                width: '413',
                height: '113',
              },
            },
            alt: 'PLAY! Summit long light grey',
          },
        },
        links: {
          displayName: 'Footer',
          children: {
            results: [
              {
                displayName: 'Follow Us',
                children: {
                  results: [
                    {
                      displayName: 'Facebook',
                      icon: { value: 'faFacebookF' },
                      title: { value: '' },
                      field: {
                        jsonValue: {
                          value: { href: '' },
                        },
                      },
                    },
                    {
                      displayName: 'Youtube',
                      icon: { value: 'faYoutube' },
                      title: { value: '' },
                      field: {
                        jsonValue: {
                          value: { href: '' },
                        },
                      },
                    },
                    {
                      displayName: 'Twitter',
                      icon: { value: 'faTwitter' },
                      title: { value: '' },
                      field: {
                        jsonValue: {
                          value: { href: '' },
                        },
                      },
                    },
                    {
                      displayName: 'Instagram',
                      icon: { value: 'faInstagram' },
                      title: { value: '' },
                      field: {
                        jsonValue: {
                          value: { href: '' },
                        },
                      },
                    },
                    {
                      displayName: 'Linkedin',
                      icon: { value: 'faLinkedin' },
                      title: { value: '' },
                      field: {
                        jsonValue: {
                          value: { href: '' },
                        },
                      },
                    },
                  ],
                },
              },
              {
                displayName: 'Pages',
                children: {
                  results: [
                    {
                      displayName: 'Sessions',
                      icon: { value: '' },
                      title: { value: '' },
                      field: {
                        jsonValue: {
                          value: {
                            class: '',
                            id: '{68DC89A4-1B04-59A8-9C4E-3B49D6C61052}',
                            querystring: '',
                            anchor: '',
                            target: '',
                            title: '',
                            linktype: 'internal',
                            text: '',
                            url: '/PLAY/playwebsite/home/sessions',
                            href: '/sessions',
                          },
                        },
                      },
                    },
                    {
                      displayName: 'Speakers',
                      icon: { value: '' },
                      title: { value: '' },
                      field: {
                        jsonValue: {
                          value: {
                            class: '',
                            id: '{1F4B781B-F2A5-5647-99DF-C0C369162C4D}',
                            querystring: '',
                            anchor: '',
                            target: '',
                            title: '',
                            linktype: 'internal',
                            text: '',
                            url: '/PLAY/playwebsite/home/speakers',
                            href: '/speakers',
                          },
                        },
                      },
                    },
                    {
                      displayName: 'Vendors',
                      icon: { value: '' },
                      title: { value: '' },
                      field: {
                        jsonValue: {
                          value: {
                            class: '',
                            id: '{774E44E8-0F30-5879-B847-AD233FFB41AA}',
                            querystring: '',
                            anchor: '',
                            target: '',
                            title: '',
                            linktype: 'internal',
                            text: '',
                            url: '/PLAY/playwebsite/home/vendors',
                            href: '/vendors',
                          },
                        },
                      },
                    },
                    {
                      displayName: 'Sponsors',
                      icon: { value: '' },
                      title: { value: '' },
                      field: {
                        jsonValue: {
                          value: {
                            class: '',
                            id: '{66C99E47-7BBF-52D1-B1D7-4662B850744A}',
                            querystring: '',
                            anchor: '',
                            target: '',
                            title: '',
                            linktype: 'internal',
                            text: '',
                            url: '/PLAY/playwebsite/home/sponsors',
                            href: '/sponsors',
                          },
                        },
                      },
                    },
                    {
                      displayName: 'About Us',
                      icon: { value: '' },
                      title: { value: '' },
                      field: {
                        jsonValue: {
                          value: {
                            class: '',
                            id: '{2717574C-48A0-5469-85A8-A332DF71F1E4}',
                            querystring: '',
                            anchor: '',
                            target: '',
                            title: '',
                            linktype: 'internal',
                            text: '',
                            url: '/PLAY/playwebsite/home/about-us',
                            href: '/about-us',
                          },
                        },
                      },
                    },
                    {
                      displayName: 'News',
                      icon: { value: '' },
                      title: { value: '' },
                      field: {
                        jsonValue: {
                          value: {
                            class: '',
                            id: '{0E4A63DA-7496-557E-BF80-5BD52255E431}',
                            querystring: '',
                            anchor: '',
                            target: '',
                            title: '',
                            linktype: 'internal',
                            text: '',
                            url: '/PLAY/playwebsite/home/news',
                            href: '/news',
                          },
                        },
                      },
                    },
                    {
                      displayName: 'Landing Pages',
                      icon: { value: '' },
                      title: { value: '' },
                      field: {
                        jsonValue: {
                          value: {
                            class: '',
                            id: '{4D587C56-3717-41CB-936C-5D0412A50B6B}',
                            querystring: '',
                            anchor: '',
                            target: '',
                            title: '',
                            linktype: 'internal',
                            text: '',
                            url: '/PLAY/playwebsite/home/landing-pages',
                            href: '/landing-pages',
                          },
                        },
                      },
                    },
                  ],
                },
              },
              {
                displayName: 'Join Us',
                children: {
                  results: [
                    {
                      displayName: 'Book Tickets',
                      icon: { value: '' },
                      title: { value: '' },
                      field: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            target: '',
                            querystring: '',
                            id: '{A7BDFBDA-D5CC-5388-A039-F262BC768721}',
                            href: '/tickets',
                          },
                        },
                      },
                    },
                    {
                      displayName: 'Become a Sponsor',
                      icon: { value: '' },
                      title: { value: '' },
                      field: {
                        jsonValue: {
                          value: {
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            target: '',
                            querystring: '',
                            id: '{6CF37FF6-755C-5B1A-B5EB-63F03481DB4A}',
                            href: '/sponsors/Become-a-sponsor',
                          },
                        },
                      },
                    },
                    {
                      displayName: 'Become a Vendor',
                      icon: { value: '' },
                      title: { value: '' },
                      field: {
                        jsonValue: {
                          value: { href: '' },
                        },
                      },
                    },
                  ],
                },
              },
              {
                displayName: 'Get Support',
                children: {
                  results: [
                    {
                      displayName: 'FAQ',
                      icon: { value: '' },
                      title: { value: '' },
                      field: {
                        jsonValue: {
                          value: { href: '' },
                        },
                      },
                    },
                    {
                      displayName: 'Tech Support',
                      icon: { value: '' },
                      title: { value: '' },
                      field: {
                        jsonValue: {
                          value: { href: '' },
                        },
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      },
    },
  } as unknown as FooterProps;

  const mainNavigationProps = {
    rendering: {
      uid: '8ae6e35d-21e3-49a4-9728-29308cf51606',
      componentName: 'MainNavigation',
      dataSource: '/sitecore/content/PLAY/playwebsite/Data/Navigation/Header/Main Navigation',
      params: {
        CacheClearingBehavior: 'Clear on publish',
      },
      fields: {
        data: {
          item: {
            id: '4790380A3F0C443AA954269ECB2D5566',
            path: '/sitecore/content/PLAY/playwebsite/Data/Config',
            headerLogo: {
              jsonValue: {
                value: {
                  mediaid: '',
                  'stylelabs-content-id': '30940',
                  thumbnailsrc:
                    'https://playsummit.sitecoresandbox.cloud/api/gateway/30940/thumbnail',
                  src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/83a458a1cb54401cab2308488bbd1031?v=bdb6447b&t=web',
                  'stylelabs-content-type': 'Image',
                  alt: 'PLAY! Summit logo - stacked light grey',
                  height: '113',
                  width: '274',
                },
              },
              alt: 'PLAY! Summit logo - stacked light grey',
            },
          },
          links: {
            displayName: 'Main Navigation',
            children: {
              results: [
                {
                  displayName: 'Sessions',
                  field: {
                    jsonValue: {
                      value: {
                        class: '',
                        id: '{68DC89A4-1B04-59A8-9C4E-3B49D6C61052}',
                        querystring: '',
                        anchor: '',
                        target: '',
                        title: '',
                        linktype: 'internal',
                        text: '',
                        url: '/PLAY/playwebsite/home/sessions',
                        href: '/sessions',
                      },
                    },
                  },
                },
                {
                  displayName: 'Speakers',
                  field: {
                    jsonValue: {
                      value: {
                        class: '',
                        id: '{1F4B781B-F2A5-5647-99DF-C0C369162C4D}',
                        querystring: '',
                        anchor: '',
                        target: '',
                        title: '',
                        linktype: 'internal',
                        text: '',
                        url: '/PLAY/playwebsite/home/speakers',
                        href: '/speakers',
                      },
                    },
                  },
                },
                {
                  displayName: 'Vendors',
                  field: {
                    jsonValue: {
                      value: {
                        class: '',
                        id: '{774E44E8-0F30-5879-B847-AD233FFB41AA}',
                        querystring: '',
                        anchor: '',
                        target: '',
                        title: '',
                        linktype: 'internal',
                        text: '',
                        url: '/PLAY/playwebsite/home/vendors',
                        href: '/vendors',
                      },
                    },
                  },
                },
                {
                  displayName: 'Sponsors',
                  field: {
                    jsonValue: {
                      value: {
                        class: '',
                        id: '{66C99E47-7BBF-52D1-B1D7-4662B850744A}',
                        querystring: '',
                        anchor: '',
                        target: '',
                        title: '',
                        linktype: 'internal',
                        text: '',
                        url: '/PLAY/playwebsite/home/sponsors',
                        href: '/sponsors',
                      },
                    },
                  },
                },
                {
                  displayName: 'About Us',
                  field: {
                    jsonValue: {
                      value: {
                        class: '',
                        id: '{2717574C-48A0-5469-85A8-A332DF71F1E4}',
                        querystring: '',
                        anchor: '',
                        target: '',
                        title: '',
                        linktype: 'internal',
                        text: '',
                        url: '/PLAY/playwebsite/home/about-us',
                        href: '/about-us',
                      },
                    },
                  },
                },
              ],
            },
          },
        },
      },
    },
    modifyComponentProps: 'ƒ modifyComponentProps() {}',
    componentFactory: 'ƒ componentFactory() {}',
    fields: {
      data: {
        item: {
          id: '4790380A3F0C443AA954269ECB2D5566',
          path: '/sitecore/content/PLAY/playwebsite/Data/Config',
          headerLogo: {
            jsonValue: {
              value: {
                mediaid: '',
                'stylelabs-content-id': '30940',
                thumbnailsrc:
                  'https://playsummit.sitecoresandbox.cloud/api/gateway/30940/thumbnail',
                src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/83a458a1cb54401cab2308488bbd1031?v=bdb6447b&t=web',
                'stylelabs-content-type': 'Image',
                alt: 'PLAY! Summit logo - stacked light grey',
                height: '113',
                width: '274',
              },
            },
            alt: 'PLAY! Summit logo - stacked light grey',
          },
        },
        links: {
          displayName: 'Main Navigation',
          children: {
            results: [
              {
                displayName: 'Sessions',
                field: {
                  jsonValue: {
                    value: {
                      class: '',
                      id: '{68DC89A4-1B04-59A8-9C4E-3B49D6C61052}',
                      querystring: '',
                      anchor: '',
                      target: '',
                      title: '',
                      linktype: 'internal',
                      text: '',
                      url: '/PLAY/playwebsite/home/sessions',
                      href: '/sessions',
                    },
                  },
                },
              },
              {
                displayName: 'Speakers',
                field: {
                  jsonValue: {
                    value: {
                      class: '',
                      id: '{1F4B781B-F2A5-5647-99DF-C0C369162C4D}',
                      querystring: '',
                      anchor: '',
                      target: '',
                      title: '',
                      linktype: 'internal',
                      text: '',
                      url: '/PLAY/playwebsite/home/speakers',
                      href: '/speakers',
                    },
                  },
                },
              },
              {
                displayName: 'Vendors',
                field: {
                  jsonValue: {
                    value: {
                      class: '',
                      id: '{774E44E8-0F30-5879-B847-AD233FFB41AA}',
                      querystring: '',
                      anchor: '',
                      target: '',
                      title: '',
                      linktype: 'internal',
                      text: '',
                      url: '/PLAY/playwebsite/home/vendors',
                      href: '/vendors',
                    },
                  },
                },
              },
              {
                displayName: 'Sponsors',
                field: {
                  jsonValue: {
                    value: {
                      class: '',
                      id: '{66C99E47-7BBF-52D1-B1D7-4662B850744A}',
                      querystring: '',
                      anchor: '',
                      target: '',
                      title: '',
                      linktype: 'internal',
                      text: '',
                      url: '/PLAY/playwebsite/home/sponsors',
                      href: '/sponsors',
                    },
                  },
                },
              },
              {
                displayName: 'About Us',
                field: {
                  jsonValue: {
                    value: {
                      class: '',
                      id: '{2717574C-48A0-5469-85A8-A332DF71F1E4}',
                      querystring: '',
                      anchor: '',
                      target: '',
                      title: '',
                      linktype: 'internal',
                      text: '',
                      url: '/PLAY/playwebsite/home/about-us',
                      href: '/about-us',
                    },
                  },
                },
              },
            ],
          },
        },
      },
    },
    params: {
      CacheClearingBehavior: 'Clear on publish',
    },
  } as unknown as MainNavigationProps;

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <HeaderContent {...headerContentProps} />
        <MainNavigation {...mainNavigationProps} />
      </header>
      <main>
        <HeaderCdpMessageBar />
        <div className="component w-full">
          <div className="component-content">
            <div className="row">{props.children}</div>
          </div>
        </div>
      </main>
      <footer>
        <Footer {...footerProps} />
      </footer>
    </>
  );
};

export default SummitLayout;
