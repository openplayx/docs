---
title: 播放第一个视频
---

## 开始前

从[下载页](https://openplayx.com/zh/download/)获取适合你设备的安装包（macOS、Windows、Linux、Android、Android TV 或 Apple TV），并准备一个有权播放的测试视频。只授予应用所需的媒体目录访问权限。

## 各平台安装说明

- **macOS**：打开 DMG（旧版本为解压 ZIP），将 OpenPlayX 拖入**应用程序**。根据芯片选择 Universal、Apple Silicon 或 Intel 版本。安装包在 App Store 之外分发，首次启动可能出现安全提示，请先核对来源与 SHA-256 校验值。
- **Windows**：运行 x86_64 安装程序（或解压 ZIP 后运行 `openplayx.exe`），已包含 Visual C++ 运行库。应用暂未代码签名，首次启动可能触发 SmartScreen 提示。
- **Linux**：适用于 glibc 2.39 及以上的 x86_64 系统（以 Ubuntu 24.04 为基线）。为 AppImage 添加执行权限（`chmod +x`）后运行；如系统没有 FUSE，可使用 `--appimage-extract-and-run`。
- **Android**：下载 APK（大多数现代设备选择 ARM64），按系统提示允许浏览器或文件管理器安装应用。
- **电视设备**：参见[Android TV 与 Apple TV 安装](tv.md)。

## 打开与播放

1. 启动 OpenPlayX，使用打开文件操作通过系统文件选择器选择测试视频，或在**来源**中添加连接后浏览。
2. 选择视频开始播放，尝试暂停、拖动进度、倍速、音量，以及文件提供的音轨和字幕。
3. 停止播放并返回应用。若要整理带海报与观看进度的收藏，请[添加媒体库目录](../library/home.md)。

## 结果与限制

视频在设备上播放。扫描或打开网络视频不会生成永久离线副本。编解码与硬件加速支持取决于平台、构建与[播放引擎](../playback/engines-and-pip.md)；网络来源需要自己的凭据。AI 配置为可选步骤。

播放失败时，先用已知正常的小型本地文件排查，再检查文件权限和版本说明，最后[反馈问题](../help/faq.md)。
