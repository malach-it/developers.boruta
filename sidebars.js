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
      link: {type: 'doc', id: 'intro'},
      items: [
        'intro',
        'auth-framework-overview',
        'ssi-overview'
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
    {
      type: 'category',
      label: 'Deployment',
      collapsed: false,
      items: [
        'deployment/docker',
        'deployment/standalone',
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Gateway',
    //   items: [
    //     'gateway/reverse-proxying',
    //     'gateway/authorization',
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: 'Specifications',
    //   items: [
    //     'specifications/endpoints',
    //     {
    //       type: 'category',
    //       label: 'OAuth 2.0',
    //       items: [
    //         'specifications/oauth-2.0/introduction',
    //         'specifications/oauth-2.0/authorization-code-grant',
    //         'specifications/oauth-2.0/client-credentials',
    //         'specifications/oauth-2.0/implicit',
    //         'specifications/oauth-2.0/resource-owner-password-credentials',
    //         'specifications/oauth-2.0/pkce',
    //         'specifications/oauth-2.0/introspect',
    //         'specifications/oauth-2.0/revoke',
    //       ],
    //     },
    //     {
    //       type: 'category',
    //       label: 'OpenID Connect',
    //       items: [
    //         'specifications/openid-connect/introduction',
    //         'specifications/openid-connect/hybrid-grant',
    //         'specifications/openid-connect/id-tokens',
    //         'specifications/openid-connect/sessions',
    //       ],
    //     },
    //   ],
    // },
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
