---
title: Connect MCP tools
---

## Before you start

Configure a [tool-capable model](models.md) and choose a trusted MCP server. Know its endpoint, authentication requirements, permissions and execution location. An external download or processing service may run on its server rather than on your device.

## Add an external capability

1. Open **AI → External capabilities** and add a connection.
2. Enter the server's documented HTTP MCP endpoint and the authentication fields the app supports. A website homepage is not necessarily an MCP endpoint.
3. Test the endpoint and discover its tools. Inspect names, descriptions and arguments before enabling it.
4. Ask for a read-only operation first. Review the tool result and handle errors before requesting changes.
5. Approve each proposed sensitive operation only when the target and arguments are correct. Remove the connection when no longer needed.

## Save external downloads to a source

After a download completes on a configured MCP service, the assistant can save files directly to an **SMB**, **WebDAV** or **SFTP** source via `external_file_save_to_source`:

1. Enable **source.write** for the target source in plugin management.
2. Review and approve the confirmation card before transfer begins. Existing filenames get a numeric suffix and are never overwritten.
3. Choose or let the assistant use a transfer mode:
   - **`stream`** (default): streams bytes through the App directly to the target source without using local storage.
   - **`cache`**: downloads to private temporary App storage first (keeping a 64 MiB free-space reserve), then uploads to the source. Failed or interrupted cache jobs can be retried after an App restart and expire after 24 hours.
4. By default, files are saved under `OpenPlayX/Downloads` relative to the source root (for SMB, configure a share rather than only a server).

## Expected result and limits

Supported tools become available to the assistant. MCP is a tool protocol; model access is configured separately. The client supports a subset of MCP and JSON Schema. Unsupported schemas are rejected; arbitrary OAuth flows, server requests and experimental task extensions are not universally supported.

The web-search preset is removable and stays removed after deletion. Search sends queries to the configured service. Remote tool operators may receive authorized arguments and data; do not include credentials in prompts.
