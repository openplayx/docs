---
title: Configure an AI model
---

## Before you start

Use a macOS or Android build containing the AI page, an OpenAI-compatible provider endpoint, a model name and your own API key. Check the provider's terms and costs. Basic playback works without a model.

## Connect and test

1. Open **AI → Models** and open model settings.
2. Enter **API domain**, **Model name** and **API key** from the same provider. Do not paste your key into a conversation.
3. Save and run **Test connection**. A successful chat-only test does not establish tool-calling support; read the reported result.
4. Review the data-sharing notice, then start with a read-only question about your library.
5. Review proposed tool operations and their arguments before approving a change. Inspect result cards to see whether an action actually completed.

## Expected result and limits

The assistant replies using the configured provider. Messages, selected context and tool results can leave your device for that provider. Keys are stored in local configuration without separate OS keychain storage or application database encryption. Use limited credentials and protect backups.

A model must support the chat/tool protocol expected by the app. Authentication, rate limits and unsupported tool calling need different fixes; inspect connection tests. Cancelling a turn does not undo actions that have already completed. No provider account or device was used to certify this guide. [MCP services](mcp.md) supply tools; they do not replace the inference model.
