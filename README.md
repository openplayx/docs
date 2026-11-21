# OpenPlayX Docs

Bilingual public user documentation for [OpenPlayX](https://openplayx.com), built with Docusaurus 3.10.2 and MIT licensed. This is an independent repository, not a submodule. No private design repository, Flutter SDK or deployment credential is needed.

Use the Node version in `.nvmrc` (24.16.0):

```sh
npm ci
npm run typecheck
npm run build
npm start
# Chinese development server:
npm start -- --locale zh-Hans
```

English content is in `docs/`; matching Chinese document IDs live in `i18n/zh-Hans/docusaurus-plugin-content-docs/current/`. Builds fail for missing translations or broken local references. Do not publish untranslated pages: complete the pair before merging, so language switching always has a target.

The build includes title/body search in English and Chinese, SEO metadata, externalized bootstrap scripts and a digest manifest. Search index contents and a 2 MB per-locale budget are checked automatically. Browser search and mobile behavior need preview QA when changing the search plugin.

Production URLs are `/docs/` and `/docs/zh-Hans/`. `build/` is the root documentation artifact; the website copies its contents into `dist/docs/`. Standalone docs contain no analytics SDK; website assembly adds the site's first-party PostHog bundle. Do not deploy this build over the website Worker.

`docs-check` archives a preview without production credentials. The private build repository maintains the complete-site publisher, deployment lock and rollback. It pins this repository alongside web and build, builds both sites, checks actual Worker routes and publishes one complete Worker with its assets. Publishing requires the corresponding web/build integration to be reviewed and installed in Jenkins first.

First guides describe source-checked behavior, not real-account/device certification. Connector platform enrollment is explicitly marked as a development workflow. Review release coverage before removing that marker.

See [CONTRIBUTING.md](CONTRIBUTING.md). Third-party dependencies keep their own licenses; the included logo/favicon are OpenPlayX project assets.

The docs theme follows the marketing site's warm light/dark palette, typography
and header treatment. The synchronous `static/js/theme-preference.js` bootstrap
and the standard color-toggle wrapper share the website's `opx-theme` preference
before first paint and when switching between pages/tabs. Keep Docusaurus's
`theme` storage key unnamespaced unless both adapters are updated together.
