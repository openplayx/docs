---
title: Android TV & Apple TV
---

OpenPlayX provides dedicated TV packages for **Android TV / Google TV** and **Apple TV (tvOS)** on the [download page](https://openplayx.com/download/).

## Android TV & Google TV

1. Download the `android-tv` APK from the [download page](https://openplayx.com/download/).
2. Transfer the APK to your television or streaming box (for example via USB storage, a file manager app or `adb install`).
3. Allow installation from the chosen source if Android TV prompts you, then open OpenPlayX and add your [SMB](../sources/smb.md) or [media server](../sources/media-servers.md) sources.

## Apple TV (tvOS)

The Apple TV build targets **tvOS 17+** (ARM64) and includes `TVVLCKit` playback, FFmpeg processing, offline `whisper.cpp` tiny model weights (Metal / Core ML), remote access, nearby-device sign-in and iPhone/iPad Continuity recording.

### Option 1: TestFlight (recommended when a build is active)

1. Install Apple's **TestFlight** app on both an iPhone/iPad and your Apple TV using the same App Store account. Note that Apple's TestFlight client requires **tvOS 18+**.
2. Open the public invitation link on your iPhone/iPad: `https://testflight.apple.com/join/dmt8K5er`.
3. Accept the invitation, then open TestFlight on your Apple TV to install OpenPlayX when an eligible tvOS build is available.

### Option 2: Sideload IPA (re-signing required)

GitHub Releases publishes `*-tvos-arm64-*.ipa` for user re-signing. You must re-sign it with your own Apple developer profile before installing. The separate `*-tvos-appstore-arm64-*.ipa` export is signed for Apple distribution and cannot be sideloaded directly.

## tvOS notes and limits

- **Cache storage**: tvOS does not provide unrestricted persistent local storage and may purge `Library/Caches/OpenPlayX/` when space is low. Use network or server sources as the primary home for your media.
- **Nearby-device sign-in**: Apple TV has no embedded web browser, so OAuth sign-in uses Apple's nearby-device flow with an iPhone or iPad.
- **Voice input**: Continuity microphone recording requires Apple TV 4K (2nd generation or later), tvOS 17+ and a compatible iPhone/iPad on iOS/iPadOS 17+.
- **Validation**: Physical Apple TV hardware validation for OS-scheduled background tasks and remote workflows is still ongoing.
