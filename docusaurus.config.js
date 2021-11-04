// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require('path');
const environment = process.env.OBJECTIV_ENVIRONMENT;
const slackJoinLink = 'https://join.slack.com/t/objectiv-io/shared_invite/zt-u6xma89w-DLDvOB7pQer5QUs5B_~5pg';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Objectiv - on a mission to create the ultimate workflow for data scientists',
  titleDelimiter: '|',
  tagline: 'A data collection & modeling library that puts the data scientist first.', //meta description, and og:description
  baseUrl: (environment === 'staging') ? '/staging/' : '/',
  url: (environment === 'staging') ? 'https://objectiv.io/staging/' : 'https://objectiv.io/',
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
        docs: false,
        blog: {
          blogTitle: 'Objectiv Blog',
          blogDescription: 'Objectiv Blog',
          blogSidebarCount: 0,
          postsPerPage: 5,
          showReadingTime: false,
          editUrl: 'https://github.com/facebook/objectiv/objectiv.io/edit/master/blog/',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      }),
    ],
  ],
  plugins: [
    path.resolve(__dirname, 'src/plugins/favicons/'),
    require.resolve('docusaurus-plugin-image-zoom')
  ],
  scripts: [
    {
      src: 'https://consent.cookiebot.com/uc.js?cbid=7498452c-872b-431a-9859-21045f83f0a0',
      'data-cbid': '7498452c-872b-431a-9859-21045f83f0a0',
      'data-blockingmode': 'auto',
      id: 'Cookiebot'
    },
  ],
  customFields: {
    trackerApplicationId: (environment === 'prod') ? 'objectiv-website' : 'objectiv-website-dev',
    trackerDocsApplicationId: (environment === 'prod') ? 'objectiv-docs' : 'objectiv-docs-dev',
    trackerEndPoint: (environment === 'prod') ? 'https://collector.objectiv.io' : 'http://localhost:5000',
    slackJoinLink: slackJoinLink,
    trackerConsoleEnabled: environment !== 'prod'
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: '',
      hideOnScroll: false,
      logo: {
        alt: 'Objectiv Logo',
        src: 'img/logo-objectiv.svg',
      },
      items: [
        {
          to: 'blog', 
          label: 'Blog', 
          position: 'left'
        },
        {
          label: 'Docs',
          to: '/docs/',
        },
        {
          to: 'about',
          label: 'About Us',
        },
        {
          href: 'https://github.com/objectiv',
          label: 'GitHub',
          position: 'right',
          className: 'navItem navGitHub',
        },
        {
          href: slackJoinLink,
          label: 'Slack',
          position: 'right',
          className: 'navItem navSlack',
        },
        {
          href: 'https://twitter.com/objectiv_io',
          label: 'Twitter',
          position: 'right',
          className: 'navItem navTwitter',
        },
        {
          href: 'mailto:hi@objectiv.io',
          label: 'Contact Us',
          position: 'right',
          className: 'navItem navEmail',
        },
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
              to: 'privacy/',
            },
            {
              label: 'Cookies',
              to: 'privacy/cookies',
            },
          ],
        },
      ],
    },
    zoom: {
      config: {
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        }
      }
    }    
  })
};

module.exports = config;

console.log("USING OBJECTIV TRACKER ENDPOINT:", config.customFields.trackerEndPoint);