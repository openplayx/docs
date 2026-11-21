---
title: Access media with Connector
---

:::info Development feature
This walkthrough describes the current platform-managed Connector implementation. Confirm that your App and Connector release both contain this workflow before proceeding. End-to-end acceptance with real accounts, devices and your home network is still required.
:::

## Before you start

Prepare an OpenPlayX account, a compatible App and Connector package, an always-on home device and a working media service. Linux amd64/arm64 with systemd supports installation; macOS arm64 has in-process verification. Vendor NAS installers, Windows services and arbitrary architectures are not certified.

## Bind and expose a service

1. Sign in to the [account center](https://openplayx.com/account/) and open **Connectors**.
2. Pre-register a Connector, choose its name/platform and download the matching package and one-time enrollment file. Keep that file private; it expires after seven days.
3. Follow the [Connector installation instructions](https://github.com/openplayx/openplayx-connector#pre-registration-from-the-account-page) for your package. Import the enrollment file with `--enroll`; successful import consumes the file. For a pairing-code workflow, approve it using the same account.
4. Open the Connector's LAN manager and explicitly save a media service mapping. Discovery alone does not publish a service. Never map NAS administration or unrelated network ports.
5. Sign in to the App with the same account, refresh remote access services and select the intended service for a source.
6. Verify local playback first, then test over a separate external network. Check that the registered service is enabled and the Connector is online.

## Expected result and limits

The App reaches only configured services through Relay. The Connector chooses its reachable Relay automatically; there is no manual node selector. Source credentials and media permissions still apply. Network upload speed, mobile connectivity and Relay availability affect playback.

If binding fails, check account identity, enrollment expiry, device time and outbound connectivity. If only playback fails, test the source on the LAN and inspect the service mapping. Redact enrollment files, tokens, addresses and logs before reporting. This is remote access, not cross-device library synchronization.
