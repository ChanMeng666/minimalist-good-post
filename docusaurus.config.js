// // @ts-check
// // `@type` JSDoc annotations allow editor autocompletion and type checking
// // (when paired with `@ts-check`).
// // There are various equivalent ways to declare your Docusaurus config.
// // See: https://docusaurus.io/docs/api/docusaurus-config
//
// import {themes as prismThemes} from 'prism-react-renderer';
//
// /** @type {import('@docusaurus/types').Config} */
// const config = {
//   title: 'Minimalist Good Post',
//   tagline: 'Less is More',
//   favicon: 'img/favicon.ico',
//
//   // Set the production url of your site here
//   url: 'https://your-docusaurus-site.example.com',
//   // Set the /<baseUrl>/ pathname under which your site is served
//   // For GitHub pages deployment, it is often '/<projectName>/'
//   baseUrl: '/',
//
//   // GitHub pages deployment config.
//   // If you aren't using GitHub pages, you don't need these.
//   organizationName: 'ChanMeng666', // Usually your GitHub org/user name.
//   projectName: 'minimalist-good-post', // Usually your repo name.
//
//   onBrokenLinks: 'throw',
//   onBrokenMarkdownLinks: 'warn',
//
//   // Even if you don't use internationalization, you can use this field to set
//   // useful metadata like html lang. For example, if your site is Chinese, you
//   // may want to replace "en" with "zh-Hans".
//   i18n: {
//     defaultLocale: 'en',
//     locales: ['en'],
//   },
//
//   presets: [
//     [
//       'classic',
//       /** @type {import('@docusaurus/preset-classic').Options} */
//       ({
//         docs: {
//           sidebarPath: './sidebars.js',
//           // Please change this to your repo.
//           // Remove this to remove the "edit this page" links.
//           editUrl:
//             'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
//         },
//         blog: {
//           showReadingTime: true,
//           feedOptions: {
//             type: ['rss', 'atom'],
//             xslt: true,
//           },
//           // Please change this to your repo.
//           // Remove this to remove the "edit this page" links.
//           editUrl:
//             'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
//           // Useful options to enforce blogging best practices
//           onInlineTags: 'warn',
//           onInlineAuthors: 'warn',
//           onUntruncatedBlogPosts: 'warn',
//         },
//         theme: {
//           customCss: './src/css/custom.css',
//         },
//       }),
//     ],
//   ],
//
//   themeConfig:
//     /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
//     ({
//       // Replace with your project's social card
//       image: 'img/docusaurus-social-card.jpg',
//       navbar: {
//         title: 'My Site',
//         logo: {
//           alt: 'My Site Logo',
//           src: 'img/logo.svg',
//         },
//         items: [
//           {
//             type: 'docSidebar',
//             sidebarId: 'tutorialSidebar',
//             position: 'left',
//             label: 'Tutorial',
//           },
//           {to: '/blog', label: 'Blog', position: 'left'},
//           {
//             href: 'https://github.com/facebook/docusaurus',
//             label: 'GitHub',
//             position: 'right',
//           },
//         ],
//       },
//       footer: {
//         style: 'dark',
//         links: [
//           {
//             title: 'Docs',
//             items: [
//               {
//                 label: 'Tutorial',
//                 to: '/docs/intro',
//               },
//             ],
//           },
//           {
//             title: 'Community',
//             items: [
//               {
//                 label: 'Stack Overflow',
//                 href: 'https://stackoverflow.com/questions/tagged/docusaurus',
//               },
//               {
//                 label: 'Discord',
//                 href: 'https://discordapp.com/invite/docusaurus',
//               },
//               {
//                 label: 'Twitter',
//                 href: 'https://twitter.com/docusaurus',
//               },
//             ],
//           },
//           {
//             title: 'More',
//             items: [
//               {
//                 label: 'Blog',
//                 to: '/blog',
//               },
//               {
//                 label: 'GitHub',
//                 href: 'https://github.com/facebook/docusaurus',
//               },
//             ],
//           },
//         ],
//         copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
//       },
//       prism: {
//         theme: prismThemes.github,
//         darkTheme: prismThemes.dracula,
//       },
//     }),
// };
//
// export default config;



// // docusaurus.config.js
// // @ts-check
// import {themes as prismThemes} from 'prism-react-renderer';
//
// /** @type {import('@docusaurus/types').Config} */
// const config = {
//   title: '极简生活',
//   tagline: '分享简单而美好的生活方式',
//   favicon: 'img/favicon.ico',
//
//   url: 'https://your-docusaurus-site.example.com',
//   baseUrl: '/',
//
//   organizationName: 'ChanMeng666',
//   projectName: 'minimalist-good-post',
//
//   onBrokenLinks: 'throw',
//   onBrokenMarkdownLinks: 'warn',
//
//   i18n: {
//     defaultLocale: 'zh-Hans',
//     locales: ['zh-Hans'],
//   },
//
//   scripts: [
//     {
//       src: 'https://cdnjs.cloudflare.com/ajax/libs/inter-ui/3.19.3/inter.min.css',
//     },
//   ],
//
//   presets: [
//     [
//       'classic',
//       /** @type {import('@docusaurus/preset-classic').Options} */
//       ({
//         docs: {
//           sidebarPath: './sidebars.js',
//           editUrl:
//               'https://github.com/ChanMeng666/minimalist-good-post/tree/main/',
//         },
//         blog: {
//           blogTitle: '极简生活博客',
//           blogDescription: '分享极简主义生活方式和思考',
//           postsPerPage: 5,
//           blogSidebarCount: 0,
//           showReadingTime: true,
//           feedOptions: {
//             type: ['rss', 'atom'],
//             xslt: true,
//           },
//         },
//         theme: {
//           customCss: './src/css/custom.css',
//         },
//       }),
//     ],
//   ],
//
//   themeConfig:
//   /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
//       ({
//         image: 'img/social-card.jpg',
//         navbar: {
//           title: '极简生活',
//           items: [
//             {to: '/blog', label: '文章', position: 'right'},
//             {to: '/docs/intro', label: '指南', position: 'right'},
//             {
//               href: 'https://github.com/ChanMeng666/minimalist-good-post',
//               label: 'GitHub',
//               position: 'right',
//             },
//           ],
//         },
//         footer: {
//           style: 'light',
//           links: [
//             {
//               title: '发现',
//               items: [
//                 {
//                   label: '所有文章',
//                   to: '/blog',
//                 },
//                 {
//                   label: '新手指南',
//                   to: '/docs/intro',
//                 },
//               ],
//             },
//             {
//               title: '社区',
//               items: [
//                 {
//                   label: '豆瓣小组',
//                   href: 'https://douban.com/group/minimalist',
//                 },
//                 {
//                   label: 'GitHub',
//                   href: 'https://github.com/ChanMeng666/minimalist-good-post',
//                 },
//               ],
//             },
//           ],
//           copyright: `Copyright © ${new Date().getFullYear()} 极简生活`,
//         },
//         prism: {
//           theme: prismThemes.github,
//           darkTheme: prismThemes.dracula,
//         },
//       }),
// };
//
// export default config;



// docusaurus.config.js
// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Minimalist Living',
  tagline: 'Sharing a Simple and Beautiful Way of Life',
  favicon: 'img/favicon.ico',

  url: 'https://your-docusaurus-site.example.com',
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
                  label: 'Reddit',
                  href: 'https://reddit.com/r/minimalism',
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/ChanMeng666/minimalist-good-post',
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
