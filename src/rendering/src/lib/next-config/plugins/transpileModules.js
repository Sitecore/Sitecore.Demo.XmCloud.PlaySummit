// DEMO TEAM CUSTOMIZATION (whole file) - Add Next bundle analyzer

const withTranspileModules = (nextConfig = {}) => {
  const withTranspile = require('next-transpile-modules')(['@sitecore-discover/ui', 'ssr-window']);

  return withTranspile(nextConfig)
};

module.exports = withTranspileModules;
