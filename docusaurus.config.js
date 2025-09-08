// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Minimalist Living',
  tagline: 'Sharing a Simple and Beautiful Way of Life',
  favicon: 'img/minimalist-good-post-black.svg',

  url: 'https://minimalist-good-post.vercel.app',
  baseUrl: '/',

  organizationName: 'ChanMeng666',
  projectName: 'minimalist-good-post',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // 添加 markdown 配置，支持 Mermaid
  markdown: {
    mermaid: true,
  },

  // 添加 Mermaid 主题
  themes: ['@docusaurus/theme-mermaid'],

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
          // 启用 MDX 功能
          remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), {}]],
        },
        blog: {
          blogTitle: 'Minimalist Living Blog',
          blogDescription: 'Sharing minimalist lifestyle and thoughts',
          postsPerPage: 5,
          blogSidebarCount: 0,
          showReadingTime: true,
          // 启用 MDX 功能
          remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), {}]],
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
        // 添加 Mermaid 配置
        mermaid: {
          theme: {light: 'neutral', dark: 'dark'},
          options: {
            maxTextSize: 50000,
          },
        },
        image: 'img/minimalist-good-post-black.svg',
        navbar: {
          title: 'Minimalist Living',
          logo: {
            alt: 'Minimalist Living Logo',
            src: 'img/minimalist-good-post-black.svg',
            srcDark: 'img/minimalist-good-post-white.svg',
          },
          hideOnScroll: false, // 确保导航栏不会在滚动时隐藏
          items: [
            {to: '/blog', label: 'Guide', position: 'right'},
            {to: '/docs/ultimate-simplicity', label: 'Articles', position: 'right'},
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
                  label: 'Getting Started',
                  to: '/blog',
                },
                {
                  label: 'All Articles',
                  to: '/docs/ultimate-simplicity',
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
            {
              title: 'Developer',
              items: [
                {
                  label: 'Portfolio & Works',
                  href: 'https://github.com/ChanMeng666',
                },
                {
                  label: 'This Project',
                  href: 'https://github.com/ChanMeng666/minimalist-good-post',
                },
                {
                  label: 'Contact for Custom Sites',
                  href: 'mailto:chanmeng.dev@gmail.com',
                },
              ],
            },
          ],
          copyright: `
            <div class="footer-brand-section">
              <div class="footer-project-brand">
                <img src="/img/minimalist-good-post-black.svg" alt="Minimalist Living Logo" class="footer-project-logo" />
                <div class="footer-project-info">
                  <div class="footer-project-name">Minimalist Living</div>
                  <div class="footer-project-tagline">Sharing a Simple and Beautiful Way of Life</div>
                </div>
              </div>
              
              <div class="footer-developer-credit">
                <img src="/img/chan_monkey_logo_black.svg" alt="Chan Meng" class="footer-developer-avatar" />
                <div class="footer-developer-info">
                  <span class="footer-developer-name">Built by Chan Meng</span>
                  <div class="footer-developer-links">
                    <a href="mailto:chanmeng.dev@gmail.com">Contact</a> • 
                    <a href="https://github.com/ChanMeng666">Portfolio</a>
                  </div>
                </div>
              </div>
              
              <div class="footer-copyright">
                Copyright © ${new Date().getFullYear()} Minimalist Living • 
                <a href="https://github.com/ChanMeng666/minimalist-good-post">View Source</a>
              </div>
            </div>
          `,
        },
        prism: {
          theme: prismThemes.github,
          darkTheme: prismThemes.dracula,
          // 添加更多语言支持
          additionalLanguages: ['mermaid', 'python', 'bash', 'json', 'markdown'],
        },
      }),
};

export default config;
