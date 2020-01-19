module.exports = {
  title: 'Covalry',
  tagline: 'a static analysis tool by NUS DBsystem',
  // url field is related to the baseUrl field
  url: 'https://www.comp.nus.edu.sg', // top-level hostname
  baseUrl: '/~dbsystem/covalry/', // the path after the host
  // use the favicon URL relative to the static directory
  favicon: 'img/favicon.ico',
  organizationName: 'NUS-DBsystem', // Usually your GitHub org/user name.
  projectName: 'covalry', // Usually your repo name.
  // For Docusaurus' default theme classic,
  // we use themeConfig to customize your navbar and footer links
  themeConfig: {
    navbar: {
      title: 'Covalry',
      logo: {
        alt: 'Project-Covalry-Logo',
        src: 'img/covalry_logo.jpg',
      },
      links: [
        {
          to: 'docs/doc1',
          label: 'Docs',
          position: 'left'
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'left'
        },
        {
          href: 'https://github.com/covalry',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    disableDarkMode: true,
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NUS DBsystem.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
