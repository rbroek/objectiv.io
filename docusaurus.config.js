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
    navbar: {
      title: '',
      hideOnScroll: false,
      logo: {
        alt: 'Objectiv Logo',
        src: 'img/logo-objectiv.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          to: 'blog', 
          label: 'Blog', 
          position: 'right'
        },
        {
          to: 'https://objectiv.homerun.co/', 
          label: 'Jobs', 
          position: 'right'
        },
        {
          to: 'about-us', 
          label: 'About Us', 
          position: 'right'
        },
        {
          href: 'https://github.com/objectiv',
          label: 'GitHub',
          position: 'right',
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
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/objectiv/objectiv.io/edit/master/blog/',
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
  ]
};
