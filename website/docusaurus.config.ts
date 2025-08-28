import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'VibeStack Codex',
  tagline: 'Free collaborative AI development platform',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://iotserver24.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'iotserver24', // Usually your GitHub org/user name.
  projectName: 'codex', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/iotserver24/codex/tree/main/docs/website/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/vibestack-codex-social-card.jpg',
    navbar: {
      title: 'VibeStack Codex',
      logo: {
        alt: 'VibeStack Codex Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/iotserver24/codex',
          label: 'GitHub',
          position: 'right',
        },
        {
          to: '/download',
          label: 'Download',
          position: 'right',
        },
        {
          href: 'https://razorpay.me/@megavault',
          label: '💝 Donate',
          position: 'right',
          className: 'navbar-donate-button',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
            {
              label: 'Features',
              to: '/docs/features',
            },
            {
              label: 'AI Models',
              to: '/docs/models',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Issues',
              href: 'https://github.com/iotserver24/codex/issues',
            },
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/iotserver24/codex/discussions',
            },
            {
              label: 'Support Us',
              to: '/docs/support',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/iotserver24/codex',
            },
            {
              label: 'Download',
              to: '/download',
            },
            {
              label: 'Donate',
              href: 'https://razorpay.me/@megavault',
            },
            {
              label: 'Privacy Policy',
              to: '/privacy-policy',
            },
            {
              label: 'Support',
              to: '/support',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} VibeStack Codex. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
