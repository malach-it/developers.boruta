// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'boruta',
  tagline: 'Lightweight Identity and Access Managemennt solution',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  // url: 'https://developers.boruta.patatoid.fr',
  url: 'https://malach-it.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/developers.boruta/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'malachit', // Usually your GitHub org/user name.
  projectName: 'boruta', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'docusaurus-preset-openapi',
      /** @type {import('docusaurus-preset-openapi').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/malach-it/developers.boruta/tree/master',
        },
        api: {
          path: "openapi/boruta-admin.openapi.json",
          routeBasePath: "/api",
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.png',
      navbar: {
        title: '',
        logo: {
          alt: 'boruta logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'borutaSidebar',
            position: 'left',
            label: 'Home',
          },
          {
            href: '/api',
            label: 'API documentation',
          },
          {
            href: 'https://github.com/malach-it/boruta-server',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'introduction',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Powered by',
            items: [
              {
                label: 'malachit',
                href: 'https://io.malach.it',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/malach-it/boruta-server',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} patatoid. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
