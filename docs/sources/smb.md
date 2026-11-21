---
title: Connect an SMB share
---

## Before you start

Use a published macOS or Android build with access to your NAS network. Enable SMB on your server and prepare its host, share name and a dedicated account with read access. First confirm the same account can list the share with another SMB client. Do not expose SMB directly to the public internet.

## Add and browse

1. Open **Sources → Connections** and add an SMB connection.
2. Enter a recognizable name, your NAS host and the requested account fields. Use the SMB service port configured on your server (usually 445).
3. Enter the share/folder in the path field, for example `Media/Movies`. Use your own share name; this example is not an address to contact.
4. Test the connection and save it. Open the connection and browse a video to play it.
5. To organize the folder on Home, add it as a file source and [scan it](../library/home.md).

## Expected result and limits

You can list authorized folders and play a video. An empty listing may mean the wrong share path or insufficient permissions. Connection failures can also come from host resolution, a firewall, an offline NAS or incompatible server settings. Test on the same LAN before troubleshooting [remote access](../remote-access/connector.md).

Credentials are stored in the app's local configuration database, without a separate OS keychain or application database encryption. Protect device access and backups. This source walkthrough has not been validated against every NAS vendor or your server.
