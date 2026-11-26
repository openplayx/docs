---
title: Cloud drives
---

OpenPlayX includes built-in presets for WebDAV-based cloud storage and read-only OAuth adapters for major cloud drives.

## WebDAV presets (Jianguoyun & 123 Cloud Drive)

- **Jianguoyun (坚果云)**: Open **Sources → Add → WebDAV** and choose the **Jianguoyun** preset (`https://dav.jianguoyun.com/dav/`). Enter your account and a **third-party application password** (not your main login password).
- **123 Cloud Drive (123 云盘)**: Open **Sources → Add → WebDAV** and choose the **123 Cloud Drive** preset. Confirm WebDAV access is enabled on your account, then copy the endpoint and credentials from the official console.

## OAuth cloud drives (OneDrive, Dropbox, Baidu Netdisk)

1. Open **Sources → Add** and choose **OneDrive**, **Dropbox** or **Baidu Netdisk**.
2. Sign in through the system browser (no embedded webview is used).
   - **OneDrive** supports personal Microsoft accounts.
   - **Dropbox** uses full-Dropbox read-only access.
   - **Baidu Netdisk** uses browser authorization and requires publisher app/bridge configuration.
3. Browse to the folder you want to expose as the root, then save the connection.
4. Add a **File source** under the saved connection to [scan it into Home](../library/home.md).

You can add multiple accounts; each connection keeps its own credentials and namespace.

## Security, storage & platform limits

- **Secure storage**: OAuth tokens and new branded WebDAV app passwords are stored in OS secure storage (such as macOS Keychain), not plaintext in configuration exports or AI tool results.
- **Direct playback**: Playback uses a local loopback gateway that fetches short-lived signed links on demand. No video traffic passes through an OpenPlayX public server.
- **Disconnecting**: Use **Disconnect account** in the connection form (or delete the source) to erase local credentials and stop playback. To revoke platform permissions completely, also remove OpenPlayX from your Microsoft, Dropbox or Baidu account settings.
- **Platform & build availability**: Native OAuth sign-in is currently available on macOS, iOS/tvOS (nearby-device auth) and Android, and requires publisher OAuth client configuration in the build. Linux and Windows currently support WebDAV presets only. Real-account acceptance for some providers is still ongoing.
