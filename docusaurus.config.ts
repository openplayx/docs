import type {Config} from '@docusaurus/types';
import type {Options, ThemeConfig} from '@docusaurus/preset-classic';

const config: Config = {
  title: 'OpenPlayX Docs', tagline: 'Your media, at home and away',
  url: 'https://openplayx.com', baseUrl: '/docs/', trailingSlash: true,
  favicon: 'img/favicon.png', organizationName: 'openplayx', projectName: 'docs',
  onBrokenLinks: 'throw', markdown: {hooks: {onBrokenMarkdownLinks: 'throw'}},
  i18n: {defaultLocale: 'en', locales: ['en', 'zh-Hans'],
    localeConfigs: {en: {label: 'English'}, 'zh-Hans': {label: '简体中文', htmlLang: 'zh-Hans'}}},
  presets: [['classic', {
    docs: {routeBasePath: '/', sidebarPath: './sidebars.ts',
      editUrl: 'https://github.com/openplayx/docs/edit/main/', editLocalizedFiles: true},
    blog: false, pages: false,
    theme: {customCss: './src/css/custom.css'},
    sitemap: {changefreq: 'weekly'},
  } satisfies Options]],
  themes: [['@easyops-cn/docusaurus-search-local', {
    hashed: 'filename', language: ['en', 'zh'], docsRouteBasePath: '/',
    indexBlog: false, indexPages: false, highlightSearchTermsOnTargetPage: true,
  }]],
  clientModules: ['./src/clientModules/analytics.ts'],
  themeConfig: {
    colorMode: {respectPrefersColorScheme: true},
    navbar: {title: 'OpenPlayX', logo: {alt: 'OpenPlayX', src: 'img/logo.svg'}, items: [
      {type: 'docSidebar', sidebarId: 'guide', position: 'left', label: 'User guide'},
      {href: 'https://openplayx.com/', label: 'Website', position: 'left', target: '_self', className: 'opx-same-site-link'},
      {href: 'https://openplayx.com/download/', label: 'Download', position: 'right', target: '_self', className: 'opx-download-link opx-same-site-link'},
      {href: 'https://github.com/openplayx/docs', label: 'GitHub', position: 'right'},
      {type: 'localeDropdown', position: 'right'},
    ]},
    footer: {style: 'dark', links: [{title: 'OpenPlayX', items: [
      {label: 'Contribute', href: 'https://github.com/openplayx/docs/blob/main/CONTRIBUTING.md'},
      {label: 'Privacy', href: 'https://openplayx.com/privacy/', target: '_self', className: 'opx-same-site-link'},
    ]}], copyright: 'Copyright © OpenPlayX contributors. MIT licensed.'},
  } satisfies ThemeConfig,
};
export default config;
