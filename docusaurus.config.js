/** @type {import('@docusaurus/types').DocusaurusConfig} */
const path = require('path');
const remarkFootnotes = require('remark-footnotes'); // https://github.com/remarkjs/remark-footnotes
const remarkGitHub = require('remark-github'); // https://github.com/remarkjs/remark-github
const remarkLicense = require('remark-license'); // https://github.com/remarkjs/remark-license
const remarkLint = require('remark-lint'); // https://github.com/remarkjs/remark-lint
const objectiv_tracker_endpoint = process.env.OBJECTIV_TRACKER_ENDPOINT ? 
  process.env.OBJECTIV_TRACKER_ENDPOINT : 'http://localhost:5000';
console.log("USING OBJECTIV TRACKER ENDPOINT:", objectiv_tracker_endpoint);
// TBD: https://github.com/rehypejs/rehype-meta

module.exports = {
  baseUrl: '/',
  favicon: 'img/favicon/favicon.ico',
  title: 'Objectiv - creating the ultimate iterative workflow for data scientists',
  titleDelimiter: '|',
  tagline: 'Build & orchestrate reusable, stackable and interchangeable models that embrace a standardized ' 
    + ' event taxonomy. Straight from your Jupyter notebook.', //meta description, and og:description
  url: 'https://objectiv.io',
  organizationName: 'objectiv', // Usually your GitHub org/user name.
  projectName: 'objectiv.io', // Usually your repo name.

  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'throw',
  
  themes: ['@docusaurus/theme-live-codeblock'],

  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    sidebarCollapsible: true,
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
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/objectiv',
          label: 'GitHub',
          position: 'right',
          className: 'navItem navGitHub',
        },
        {
          href: 'https://discourse.objectiv.io',
          label: 'Discourse',
          position: 'right',
          className: 'navItem navDiscourse',
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
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/objectiv',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/objectivhq',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
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
          postsPerPage: 5,
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
    emailJsUserId: 'user_uD6x4OVJwk9gqRX4DKU6k',
    trackerId: 'objectiv-io',
    trackerEndPoint: objectiv_tracker_endpoint
  }
};
