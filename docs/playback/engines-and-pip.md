---
title: Playback engines & Picture-in-Picture
---

## Playback engine routing

OpenPlayX routes playback through two native engines:

- **`libmpv` (default)**: Built on the app's bundled FFmpeg 9.1 (`package-ffmpeg`) and used by default on supported platforms (including tracker modules, game console music, and desktop optical discs).
- **`libVLC` (automatic fallback)**: Automatically handles explicit extension overrides (such as Musepack `.mpc`/`.mpp`/`.mp+`), platforms without a bundled `libmpv` build, and any media that `libmpv` cannot open.

You do not need to install VLC or mpv separately on desktop.

## Picture-in-Picture (PiP)

Click the **Picture-in-Picture** button in the player top bar to pop the video into a floating window. Switching into or out of PiP keeps the same player instance, playback position, audio track, subtitle selection and speed without reopening the stream.

### Platform support

| Platform | Behavior | Notes |
| --- | --- | --- |
| **macOS** | Standalone player window switches to an always-on-top mini window | Restores previous window size, position and fullscreen state; press `Escape` to restore. |
| **Windows** | Standalone player window switches to an always-on-top mini window | Restores window placement and always-on-top state; press `Escape` to restore. |
| **Linux (X11)** | GTK keep-above mini window | Keeps the system title bar for dragging/closing; stacking depends on your window manager. |
| **Android** | System Picture-in-Picture on supported devices | Triggered explicitly from the button; does not intercept the Home button automatically. |
| **iOS / iPadOS 15+** | AVKit Picture-in-Picture from `libmpv` | Hidden when `libVLC` fallback is active; provides linear play/pause controls. |
| **Linux Wayland / tvOS** | Not shown | No native PiP entry is shown on these targets. |

On desktop, PiP is only available for standalone player windows (not embedded preview players). Closing the system PiP window while the app is in the background pauses playback so audio does not keep running invisibly.
