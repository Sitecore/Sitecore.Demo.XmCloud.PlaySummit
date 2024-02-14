import React from 'react';
import { SitecoreContext, LayoutServicePageState } from '@sitecore-jss/sitecore-jss-nextjs';
import { componentBuilder } from '../src/temp/componentBuilder';
import '../src/assets/css/abstracts/mixins.css';
import '../src/assets/css/main.css';
import { I18nProvider } from 'next-localization';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  breakpoints: {
    breakpointNames: {
      default: '0',
      sm: '640',
      md: '768',
      lg: '1024',
      xl: '1280',
      '2xl': '1536',
    },
    debounceTimeout: 200,
  },
};

export const mockLayoutData = {
  sitecore: {
    context: {
      pageEditing: false,
      pageState: LayoutServicePageState.Normal,
      Languages: [
        {
          Name: 'en',
        },
        {
          Name: 'en-US',
        },
        {
          Name: 'fr',
        },
        {
          Name: 'fr-CA',
        },
        {
          Name: 'es-ES',
        },
        {
          Name: 'ja-JP',
        },
      ],
    },
    setContext: () => {
      // nothing
    },
    route: {
      itemId: null,
    },
  },
};

export const decorators = [
  (Story) => (
    <SitecoreContext
      componentFactory={componentBuilder.getComponentFactory({
        isEditing: mockLayoutData.sitecore.context.pageEditing,
      })}
      layoutData={mockLayoutData}
    >
      <I18nProvider>
        <Story />
      </I18nProvider>
    </SitecoreContext>
  ),
];
