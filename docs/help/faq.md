---
title: Frequently asked questions
---

## Which platforms can I install?

Use the packages on the [download page](https://openplayx.com/download/): Apple Silicon macOS and Android. Check each release for the exact supported architecture. iOS, Windows and Linux source projects do not establish installer availability. Flutter Web playback and TV remote interfaces are not supported.

## Do I need an account or AI subscription?

Local playback does not need either. A model provider may charge for requests; MCP operators have their own access policies. Platform-managed Connector access needs an OpenPlayX account. [Configure AI](../ai/models.md) only if you need it.

## Why is Home empty while I can browse files?

A connection and an indexed file source serve different purposes. [Add a folder and scan](../library/home.md). Check folder scope, permissions and the scan result before repeating a full scan.

## Are cloud accounts and subtitles supported everywhere?

Cloud adapters and native subtitle recognition depend on publisher setup, credentials, platform and build. Real-account acceptance is pending for some cloud services. Do not assume every adapter or native processing backend is available merely because it appears in source.

## Where is my data?

Configuration, credentials and keys live in a local configuration database; library entries, progress, conversations and jobs live in a local library database. There is currently no application-level database encryption or separate OS keychain. Protect backups. Development migrations may discard older data. Full cross-device sync and live TV/IPTV are not delivered.

## How do I report a problem?

Open an [App issue](https://github.com/openplayx/openplayx/issues) with the installed version, OS, device architecture, source type, minimal reproduction and expected/actual results. Use test media. Redact credentials, addresses, file paths and personal information from screenshots and diagnostics. Report security issues through the project's [security policy](https://github.com/openplayx/openplayx/security/policy), not a public issue.

Documentation fixes belong in the [docs repository](https://github.com/openplayx/docs). These guides are checked against implementation, not a substitute for testing your account or hardware.
