---
title: Play your first video
---

## Before you start

Download a published package for your platform from the [download page](https://openplayx.com/download/) (macOS, Windows, Linux, Android, Android TV or Apple TV) and prepare a video you are authorized to play. Grant access only to the media folders you need.

## Platform installation notes

- **macOS**: Open the DMG (or extract the ZIP on older releases) and drag OpenPlayX into **Applications**. Choose Universal, Apple Silicon or Intel for your Mac. Because builds are distributed outside the App Store, macOS may show a security prompt on first launch; verify the download source and SHA-256 checksum before continuing.
- **Windows**: Run the x86_64 installer (or extract the ZIP and run `openplayx.exe`). The Visual C++ runtime is bundled. Builds are not code-signed yet, so SmartScreen may prompt on first launch.
- **Linux**: For x86_64 Linux with glibc 2.39+ (Ubuntu 24.04 baseline), make the AppImage executable (`chmod +x`) and run it. If FUSE is unavailable, run with `--appimage-extract-and-run`.
- **Android**: Download the APK (ARM64 suits most modern devices) and allow your browser or file manager to install packages when prompted.
- **TV devices**: See [Install on Android TV & Apple TV](tv.md).

## Open and play

1. Launch OpenPlayX. Use the open-file action and select your test video through the system file picker, or add a connection under **Sources** and browse it.
2. Select a video to start playback. Try pause, seeking, playback speed, volume, audio track and subtitle selection where the file provides them.
3. Stop playback and return to the app. For a browsable collection with posters and watch progress, [add a library folder](../library/home.md).

## Expected result and limits

The selected video plays on your device. Scanning or opening a network video does not download a permanent offline copy. Codec and hardware acceleration support depend on the platform, build and [playback engine](../playback/engines-and-pip.md); network sources require their own credentials. AI setup is optional.

If a video fails, try a small known-good local file first. Check file permissions and the release's platform notes before [reporting a problem](../help/faq.md).
