const path = require('path');
module.exports = {
  "stories": ["../src/stories/Pages/HomePage.stories.tsx", "../src/**/*.stories.@(mdx|js|jsx|ts|tsx)"],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-essentials',
    // Because we use PostCSS and Tailwind
    {
      name: "@storybook/addon-styling",
      options: {
        postCss: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  webpackFinal: async config => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      // To fix the following error:
      // ERROR in ./node_modules/@sitecore-jss/sitecore-jss/dist/cjs/site/graphql-siteinfo-service.js 16:14-28
      // Module not found: Error: Can't resolve 'url' in 'C:\projects\Sitecore.Demo.XmCloud.PlaySummit\src\rendering\node_modules\@sitecore-jss\sitecore-jss\dist\cjs\site'
      // BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.
      // This is no longer the case. Verify if you need this module and configure a polyfill for it.
      // If you don't want to include a polyfill, you can use an empty module like this:
	    //     resolve.fallback: { "url": false }
      "url": false
    };
    return config;
  },
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  docs: {
    autodocs: false
  }
};