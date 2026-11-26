---
title: "Subtitles: generation & alignment"
---

OpenPlayX supports both automatic subtitle generation via speech recognition (ASR) and timing alignment for existing `.srt` subtitle files.

## Full subtitle generation

### Choose a speech recognition backend

Open **Settings → Subtitles → Speech recognition** to select one of three modes:

- **Groq (free, default)**: Uses the OpenPlayX platform proxy (`https://api.openplayx.com/v1/subtitles/transcriptions`) with Whisper V3. No client API key or account login is required. Only normalized audio chunks are uploaded—never your media URL or source credentials. Subject to per-IP rate limits and a platform-wide daily safety cap.
- **Local model**: Runs `whisper.cpp` on your device using models you download or import. Keeps all audio local; GPU/Metal/Core ML acceleration depends on platform and build.
- **Custom API**: Connects to an OpenAI-compatible `/audio/transcriptions` endpoint or a self-hosted `openplayx-asr` service.

AI assistant subtitle requests follow your selected default backend and will not silently switch from local recognition to an upload service.

### Generate and save

1. Open the developer-mode **Audio & subtitles debug** page for a video and select the target audio track.
2. Choose **Generate full subtitles** and confirm the full-length processing prompt.
3. For media longer than 304 seconds, OpenPlayX splits audio into 300-second chunks (with up to 2 seconds of overlap on each side) via FFmpeg, transcribes chunk by chunk, and merges overlapping segments.
4. Completed chunks are cached as checkpoints for up to 30 days. If a job fails or is cancelled, restarting reuses completed chunks—even across app restarts.
5. When finished, preview, save or export the result as **SRT** or **VTT**. Saving attaches the subtitle to the video without overwriting existing files; select it from the player's subtitle menu.

Leaving the debug page cancels an in-progress job while keeping completed chunk checkpoints. Continuous mobile background execution is not guaranteed.

## Subtitle alignment

Open **Audio & subtitles → Subtitle alignment** on desktop, or **Subtitles → Subtitle alignment** on mobile.

- **Manual delay**: Adjust subtitle timing in **0.25-second** steps, with reset and session undo.
- **Reference alignment**: Compare a local UTF-8 `.srt` file against an already synchronized `.srt` in the same dialogue language (for example, a saved ASR subtitle). OpenPlayX fits fixed offsets and linear timing drift using normalized dialogue matches and lets you preview before applying.
- **Non-destructive output**: Generated copies are saved in application support; your original `.srt` file is never modified, and undo restores the previous selection and delay within the playback session.

### Limits

Each input file is limited to **4 MB** and **12,000 cues**. Embedded or image-based subtitles (such as PGS/VobSub), cross-language matching and segmented manual edits are not covered by this baseline. Alignment runs locally and never uploads media.
