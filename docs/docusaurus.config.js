// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require('path');
const environment = process.env.OBJECTIV_ENVIRONMENT;
const slackJoinLink = 'https://join.slack.com/t/objectiv-io/shared_invite/zt-u6xma89w-DLDvOB7pQer5QUs5B_~5pg';

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Objectiv Documentation - creating the ultimate workflow for data scientists',
  titleDelimiter: '|',
  tagline: 'Objectiv is a data collection & modeling library that puts the data scientist first. Embrace a '
    + 'common taxonomy. Collect better data. Model more effectively.',
  url: 'https://objectiv.io/',
  baseUrl: '/',
  favicon: 'img/favicon/favicon.ico',
  organizationName: 'objectiv', // Usually your GitHub org/user name.
  projectName: 'objectiv.io', // Usually your repo name.

  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'throw',
  trailingSlash: true,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          path: './docs',
          editUrl: 'https://github.com/objectiv/objectiv.io/edit/main/',
          showLastUpdateTime: false,
          showLastUpdateAuthor: false
        },
        blog: false,
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      })
    ],
  ],
  plugins: [path.resolve(__dirname, 'src/plugins/favicons/')],
  scripts: [
    'https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js',
    {
      src: 'https://consent.cookiebot.com/uc.js?cbid=7498452c-872b-431a-9859-21045f83f0a0',
      'data-cbid': '7498452c-872b-431a-9859-21045f83f0a0',
      'data-blockingmode': 'auto',
      id: 'Cookiebot'
    },
  ],
  stylesheets: [
    'https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css',
  ],
  customFields: {
    trackerDocsApplicationId: (environment === 'prod') ? 'objectiv-docs' : 'objectiv-docs-dev',
    trackerEndPoint: (environment === 'prod') ? 'https://collector.objectiv.io' : 'http://localhost:5000',
    slackJoinLink: slackJoinLink,
    trackerConsoleEnabled: environment !== 'prod'
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Objectiv Documentation Logo',
          src: '/img/logo-objectiv.svg',
        },
        items: [
          {
            label: 'Tracking',
            to: '/tracking',
          },
          {
            label: 'Modeling',
            to: '/modeling',
          },
          {
            label: 'Taxonomy',
            to: '/taxonomy',
          }
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} Objectiv`,
        links: [
          {
            items: [
              {
                label: 'Privacy Policy',
                to: '/privacy/',
              },
              {
                label: 'Cookies',
                to: '/privacy/cookies',
              },
            ],
          },
        ]
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

console.log("USING OBJECTIV TRACKER ENDPOINT:", config.customFields.trackerEndPoint);
