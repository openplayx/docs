---
title: Access media with Connector
---

:::info Platform Relay default
Platform Relay configuration is the default for new App installations. Custom remote-access imports remain available and take priority until you select **Use platform default** under **Settings → Remote access**.
:::

## Before you start

Prepare an OpenPlayX account, a compatible App and Connector package, an always-on home device and a working media service. Published Connector releases include packages for **Linux** (amd64, arm64, armv7, armv6, mips, mipsle), **macOS** (Apple Silicon, Intel) and **FreeBSD** (amd64). Linux amd64/arm64 with systemd has installation support and macOS arm64 has in-process verification; vendor NAS packages and Windows services are not certified.

## Bind and expose a service

1. Sign in to the [account center](https://openplayx.com/account/) and open **Connectors**.
2. Pre-register a Connector, choose its name and platform, and download the matching package and one-time enrollment file. Keep that file private; it expires after seven days.
3. Follow the [Connector installation instructions](https://github.com/openplayx/openplayx-connector#pre-registration-from-the-account-page) for your package. Import the enrollment file with `--enroll`; successful import consumes the file. For a pairing-code workflow, approve it using the same account.
4. Open the Connector's LAN manager and explicitly save a media service mapping. Discovery alone does not publish a service. Never map NAS administration or unrelated network ports.
5. Sign in to the App under **Settings → Remote access** with the same account, refresh remote access services and select the intended service for a source.
6. Verify local playback first, then test over a separate external network. Check that the registered service is enabled and the Connector is online.

## Expected result and limits

The App reaches only configured services through Relay. The Connector selects its reachable Relay automatically, while the App keeps its initial recommended node until you change it. Profiles refresh periodically and retain the last valid configuration if a refresh fails. Source credentials and media permissions still apply, and home upload bandwidth, mobile connectivity and Relay availability affect playback.

If binding fails, check account identity, enrollment expiry, device time and outbound connectivity. If only playback fails, test the source on the LAN and inspect the service mapping. Redact enrollment files, tokens, addresses and logs before reporting. This provides remote access, not cross-device library synchronization.
