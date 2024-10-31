// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Minimalist Living',
  tagline: 'Sharing a Simple and Beautiful Way of Life',
  favicon: 'img/favicon.ico',

  url: 'https://minimalist-good-post.vercel.app',
  baseUrl: '/',

  organizationName: 'ChanMeng666',
  projectName: 'minimalist-good-post',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',


  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500&display=swap',
      type: 'text/css',
      crossorigin: 'anonymous',
    }
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  scripts: [
    {
      src: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500&display=swap',
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
              'https://github.com/ChanMeng666/minimalist-good-post/tree/main/',
        },
        blog: {
          blogTitle: 'Minimalist Living Blog',
          blogDescription: 'Sharing minimalist lifestyle and thoughts',
          postsPerPage: 5,
          blogSidebarCount: 0,
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        image: 'img/social-card.jpg',
        navbar: {
          title: 'Minimalist Living',
          items: [
            {to: '/blog', label: 'Articles', position: 'right'},
            {to: '/docs/intro', label: 'Guide', position: 'right'},
            {
              href: 'https://github.com/ChanMeng666/minimalist-good-post',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'light',
          links: [
            {
              title: 'Discover',
              items: [
                {
                  label: 'All Articles',
                  to: '/blog',
                },
                {
                  label: 'Getting Started',
                  to: '/docs/intro',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'LinkedIn',
                  href: 'https://www.linkedin.com/in/chanmeng666/',
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/ChanMeng666',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Minimalist Living`,
        },
        prism: {
          theme: prismThemes.github,
          darkTheme: prismThemes.dracula,
        },
      }),
};

export default config;
