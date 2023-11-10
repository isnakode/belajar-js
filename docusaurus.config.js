// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Belajar js',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',
  url: 'https://isxt.github.io/',
  baseUrl: '/belajar-js/',
  organizationName: 'isxt', // Usually your GitHub org/user name.
  projectName: 'belajar-js', // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          editUrl:
            'https://github.com/isnakode/belajar-js/tree/main',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
        disableSwitch: true
      },
      image: 'img/logo.png',
      navbar: {
        title: 'Belajar JS',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Javascript',
          },
          {
            href: 'https://github.com/isxt/belajar-js',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} isnakode`,
      },
      prism: {
        theme: prismThemes.oneLight,
        darkTheme: prismThemes.oneDark,
        additionalLanguages: ['bash']
      },
    }),
};

export default config;
