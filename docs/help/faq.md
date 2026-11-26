---
title: Frequently asked questions
---

## Which platforms can I install?

Check the [download page](https://openplayx.com/download/) for the current release packages: **macOS** (Universal, Apple Silicon, Intel), **Windows** (x86_64), **Linux** (x86_64 AppImage), **Android**, **Android TV** and **Apple TV** (experimental tvOS IPA / TestFlight). iOS does not have a public installer download yet, and Flutter Web playback is not supported.

## Do I need an account or AI subscription?

Local playback does not need either. A model provider may charge for requests, and MCP operators have their own access policies. Platform-managed Connector access requires an OpenPlayX account. The default Groq subtitle proxy requires no client API key, though platform rate limits apply. [Configure AI](../ai/models.md) only if you need it.

## Why is Home empty while I can browse files?

A connection and an indexed file source serve different purposes. [Add a folder and scan](../library/home.md). Check folder scope, permissions and the scan result before repeating a full scan.

## Are cloud accounts and subtitles supported everywhere?

Cloud adapters and native subtitle recognition depend on publisher setup, credentials, platform and build. See [Cloud drives](../sources/cloud-drives.md) and [Subtitles: generation & alignment](../playback/subtitles.md) for current platform availability and limits.

## Where is my data stored?

Configuration, non-cloud source credentials and model API keys live in a local configuration database (`configuration.sqlite3`), while library entries, progress, conversations and jobs live in a local library database (`library.sqlite3`). Cloud OAuth tokens and new branded WebDAV app passwords use OS secure storage where supported; other credentials do not yet have application-level database encryption. Protect device access and backups. Development migrations may recreate older tables and discard data. Full cross-device sync and live TV/IPTV are not delivered.

## How do I report a problem?

Open an [App issue](https://github.com/openplayx/openplayx/issues) with the installed version, OS, device architecture, source type, minimal reproduction and expected/actual results. Use test media. Redact credentials, addresses, file paths and personal information from screenshots and diagnostics. Report security issues through the project's [security policy](https://github.com/openplayx/openplayx/security/policy), not a public issue.

Documentation fixes belong in the [docs repository](https://github.com/openplayx/docs).
