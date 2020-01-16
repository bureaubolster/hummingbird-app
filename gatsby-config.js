require('dotenv').config();

const {
  getDesign,
  getTypographyConfig,
  getFooterConfig
} = require('./node/utils');

const typographyConfig = getTypographyConfig();

const webfontConfig = process.env.GATSBY_WEBFONT_CONFIG;

module.exports = {
  siteMetadata: {
    siteTitle: '',
    siteUrl: process.env.SITE_URL || process.env.URL || 'https://wings.dev'
  },
  __experimentalThemes: [
    {
      resolve: '@wingscms/hummingbird',
      options: {
        wings: {
          project: process.env.GATSBY_WINGS_PROJECT,
          appKey: process.env.GATSBY_WINGS_APP_KEY,
          endpoint: process.env.GATSBY_WINGS_ENDPOINT
        },
        blockRobots:
          process.env.BLOCK_ROBOTS || process.env.GATSBY_ENV !== 'production',
        gaTrackingId: process.env.GA_TRACKING_ID,
        basicAuth: process.env.BASIC_AUTH,
        campaigns: {},
        design: {
          headerFontFamily:
            typographyConfig && typographyConfig.headerFontFamily
              ? typographyConfig.headerFontFamily.join(', ')
              : undefined,
          ...getDesign()
        },
        typography: {
          ...typographyConfig
        },
        footer: {
          title: '',
          logoUrl: '',
          logoLink: '',
          columns: [],
          ...getFooterConfig()
        }
      }
    }
  ],
  plugins: [
    ...(webfontConfig
      ? [
        {
          resolve: 'gatsby-plugin-web-font-loader',
          options: JSON.parse(webfontConfig),
        },
      ]
      : []),
  ],
};
