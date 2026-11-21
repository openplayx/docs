# Contributing

Send a pull request with a focused change and its English/简体中文 translation. Keep the same relative document ID in both languages and use relative `.md` links inside the guides. Add sidebar entries and their category translations together. Missing translations block publishing instead of sending readers to a nonexistent page.

For tutorials, include supported platforms, prerequisites, steps, expected results and limits. Distinguish source implementation, released behavior and real-account/device verification. Check the exact App or Connector release before claiming a new feature is generally available. Use example accounts and authorized test media; remove real addresses, paths, credentials and personal information from text and screenshots. Do not copy private engineering or deployment documents into this repository.

Run `npm ci`, `npm run typecheck` and `npm run build` with the pinned Node version. Review both locales in a desktop and mobile preview, including search, language switching, themes and deep links. Local Markdown/HTML references must pass; external-link availability is reviewed separately and does not block every build.

MDX and plugins execute code during builds. Maintainers must review dependency and MDX changes. Untrusted/fork PRs require a disposable agent without deployment credentials, developer SSH keys or access to private checkouts. Do not run arbitrary PR code on the production agent account. `docs-check` may be invoked on trusted PR commits; connect automated fork PR checks only after provisioning that isolation.

Original code and documentation use MIT. Preserve third-party attribution and licensing. Never include copyrighted test videos or unlicensed screenshots.
