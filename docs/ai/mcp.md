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

## Expected result and limits

Supported tools become available to the assistant. MCP is a tool protocol; model access is configured separately. The client supports a subset of MCP and JSON Schema. Unsupported schemas are rejected; arbitrary OAuth flows, server requests and experimental task extensions are not universally supported.

The web-search preset is removable and stays removed after deletion. Search sends queries to the configured service. Remote tool operators may receive authorized arguments and data; do not include credentials in prompts. Real-service acceptance and device coverage remain separate from source-level support.
