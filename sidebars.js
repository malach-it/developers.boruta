/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  borutaSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      collapsed: false,
      link: {type: 'doc', id: 'intro'},
      items: [
        'intro',
        'auth-framework-overview',
        // 'ssi-overview'
      ],
    },
    {
      type: 'category',
      label: 'Provider configuration',
      collapsed: false,
      items: [
        'provider-configuration/configure-clients',
        'provider-configuration/configure-identity-providers',
        'provider-configuration/configure-backends',
        'provider-configuration/configure-scopes',
        'provider-configuration/configure-upstreams',
        'provider-configuration/management-api',
      ],
    },
    {
      type: 'category',
      label: 'Integration use cases',
      collapsed: false,
      items: [
        'client-credentials',
        'code-grant',
        'hybrid-grant',
        'implicit-grant',
        'ropc',
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
