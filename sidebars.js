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
      items: [],
    },
    'quickstart',
    {
      type: 'category',
      label: 'Provider configuration',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Clients configuration',
          link: { type: 'doc', id: 'provider-configuration/configure-clients' },
          collapsed: false,
          items: [
            {
              type: 'doc',
              id: 'provider-configuration/clients/general-configuration',
              label: 'General configuration'
            },
            {
              type: 'doc',
              id: 'provider-configuration/clients/authentication',
              label: 'Authentication'
            },
            {
              type: 'doc',
              id: 'provider-configuration/clients/security',
              label: 'Security'
            },
            {
              type: 'doc',
              id: 'provider-configuration/clients/grant-types',
              label: 'Grant types'
            },
          ],
        },
        {
          type: 'category',
          label: 'Identity providers configuration',
          link: { type: 'doc', id: 'provider-configuration/configure-identity-providers' },
          collapsed: false,
          items: [
            {
              type: 'doc',
              id: 'provider-configuration/identity-providers/general-configuration',
              label: 'General configuration'
            },
            {
              type: 'doc',
              id: 'provider-configuration/identity-providers/features',
              label: 'Features'
            },
          ],
        },
        {
          type: 'category',
          label: 'Backends configuration',
          link: { type: 'doc', id: 'provider-configuration/configure-backends' },
          collapsed: false,
          items: [
            {
              type: 'doc',
              id: 'provider-configuration/backends/general-configuration',
              label: 'General configuration'
            },
            {
              type: 'doc',
              id: 'provider-configuration/backends/type',
              label: 'Type'
            },
            {
              type: 'doc',
              id: 'provider-configuration/backends/email-configuration',
              label: 'Email configuration'
            },
            {
              type: 'doc',
              id: 'provider-configuration/backends/identity-federation',
              label: 'Identity federation'
            },
            {
              type: 'doc',
              id: 'provider-configuration/backends/verifiable-credentials',
              label: 'Verifiable Credentials'
            },
            {
              type: 'doc',
              id: 'provider-configuration/backends/user-metadata',
              label: 'User metadata'
            },
          ],
        },
        'provider-configuration/configure-scopes',
        {
          type: 'category',
          label: '(WIP) Global configuration',
          link: { type: 'doc', id: 'provider-configuration/configure-server' },
          collapsed: false,
          items: [
            {
              type: 'doc',
              id: 'provider-configuration/configuration/error-templates',
              label: '(WIP) Error templates'
            },
            {
              type: 'doc',
              id: 'provider-configuration/configuration/configuration-files',
              label: '(WIP) Configuration files'
            },
          ],
        },
        'provider-configuration/management-api',
        'provider-configuration/configure-upstreams',
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
