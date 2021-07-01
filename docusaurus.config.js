/** @type {import('@docusaurus/types').DocusaurusConfig} */
const path = require('path');
const remarkFootnotes = require('remark-footnotes'); // https://github.com/remarkjs/remark-footnotes
const remarkGitHub = require('remark-github'); // https://github.com/remarkjs/remark-github
const remarkLicense = require('remark-license'); // https://github.com/remarkjs/remark-license
const remarkLint = require('remark-lint'); // https://github.com/remarkjs/remark-lint
// TBD: https://github.com/rehypejs/rehype-meta

module.exports = {
  baseUrl: '/',
  favicon: 'img/favicon/favicon.ico',
  title: 'Objectiv: a product analytics pipeline for deep, reusable modelling',
  titleDelimiter: '|',
  tagline: 'Collect high quality data with a standardized taxonomy.\nTake, build on and run advanced models ' 
    +' off the shelf.', //meta description, and og:description
  url: 'https://objectiv.io',
  organizationName: 'objectiv', // Usually your GitHub org/user name.
  projectName: 'objectiv.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  
  themes: ['@docusaurus/theme-live-codeblock'],

  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    sidebarCollapsible: true,
    announcementBar: {
      id: 'hiring', // Any value that will identify this message.
      content:
        '<img src="/img/icons/icon-star.svg" />We’re Hiring! Are you mad about data science &amp; engineering? <a href="/jobs">Check out the vacancy</a>!<img src="/img/icons/icon-star.svg" />',
      backgroundColor: '#FEF284', // Defaults to `#fff`.
      textColor: '#333333', // Defaults to `#000`.
      isCloseable: false, // Defaults to `true`.
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
          href: 'https://github.com/objectiv',
          label: 'GitHub',
          position: 'right',
          className: 'navItem navGitHub',
        },
        {
          href: 'https://twitter.com/objectivHQ',
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
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        docs: {
          path: 'docs',
          routeBasePath: '/docs',
          sidebarPath: require.resolve('./docs/sidebars.js'),
          editUrl:
            'https://github.com/objectiv/objectiv.io/edit/master/docs/',
          remarkPlugins: [
            [remarkGitHub, {repository: 'https://github.com/objectiv/objectiv.io'}],
            [remarkLicense, {name: 'Objectiv', license: 'MIT', url: 'https://objectiv.io'}],
            [remarkFootnotes, {inlineNotes: true}],
            [remarkLint, {plugins: ['remark-preset-lint-recommended', 'remark-preset-lint-markdown-style-guide']}],
          ],
        },
        blog: {
          blogTitle: 'Objectiv Blog',
          blogDescription: 'Objectiv Blog',
          blogSidebarCount: 0,
          postsPerPage: 10,
          showReadingTime: false,
          editUrl: 'https://github.com/facebook/objectiv/objectiv.io/edit/master/blog/',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          trailingSlash: false,
        },
      },
    ],
  ],
  plugins: [path.resolve(__dirname, 'src/plugins/favicons/')],
  scripts: [
    'https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js',
  ],
  stylesheets: [
    'https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css',
  ],
  customFields: {
    emailJsUserId: 'user_uD6x4OVJwk9gqRX4DKU6k'
  }
};
