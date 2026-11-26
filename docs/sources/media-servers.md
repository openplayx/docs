---
title: Media servers & network protocols
---

Beyond [SMB shares](smb.md), OpenPlayX connects directly to personal media servers, standard file protocols and local optical/disc folders.

## Media servers (Jellyfin, Plex, Emby)

1. Open **Sources → Connections** and add a **Jellyfin**, **Plex** or **Emby** connection.
2. Enter your server address and sign in or supply the required token/credentials.
3. Test the connection and save. You can browse libraries directly or add them to **Home**.

### Jellyfin playback negotiation & fallback

For Jellyfin video playback, OpenPlayX queries `PlaybackInfo` with your selected media source and native device profile:

- Uses **Direct Play** when the server reports the stream is compatible.
- Falls back to server-side progressive HTTP **Remux** or **Transcode** (MPEG-TS) if needed, or triggers one automatic server fallback if the native player fails to open the initial stream.
- All playback requests pass through a local loopback gateway so your Jellyfin API key is kept in request headers and never exposed in player URLs or forwarded across redirects.
- If a server only offers HLS for a given item, OpenPlayX reports an explicit error rather than forwarding unauthenticated segments.

## Network file protocols & local discs

Under **Sources → Connections**, you can also configure:

- **WebDAV**: Works with NAS WebDAV servers and cloud WebDAV presets (see [Cloud drives](cloud-drives.md)).
- **FTP / SFTP**: Connect to standard file servers; SFTP also supports receiving saved downloads when `source.write` is enabled in [MCP tools](../ai/mcp.md).
- **S3-compatible storage**: Connect to personal object storage buckets with your endpoint and credentials.
- **DLNA**: Discover media servers on the same local network.
- **Local discs**: OpenPlayX supports discovering local disc structures where available on your platform.

Capabilities (such as browsing, scanning, search and writing) vary by protocol and server configuration. Test connections on your LAN before troubleshooting [remote access](../remote-access/connector.md).
