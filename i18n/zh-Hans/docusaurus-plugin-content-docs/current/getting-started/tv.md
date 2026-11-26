---
title: Android TV 与 Apple TV 安装
---

OpenPlayX 在[下载页](https://openplayx.com/zh/download/)提供面向 **Android TV / Google TV** 与 **Apple TV（tvOS）** 的电视端安装包。

## Android TV / Google TV

1. 从[下载页](https://openplayx.com/zh/download/)下载 `android-tv` 专用 APK。
2. 通过 U 盘、局域网文件管理器或 `adb install` 将 APK 传输并安装到电视或电视盒子上。
3. 如系统提示未知来源安装权限，按需允许后启动 OpenPlayX，并添加你的 [SMB](../sources/smb.md) 或[媒体服务器](../sources/media-servers.md)来源。

## Apple TV（tvOS）

Apple TV 版本要求 **tvOS 17+**（ARM64），内置 `TVVLCKit` 播放引擎、FFmpeg 媒体处理、离线 `whisper.cpp` tiny 模型（Metal / Core ML）、远程访问、附近设备登录以及 iPhone/iPad 接续录音能力。

### 方式一：TestFlight（推荐，存在有效测试版时）

1. 在 iPhone/iPad 和 Apple TV 上均安装苹果官方 **TestFlight**，并登录同一 App Store 账号。注意：TestFlight 客户端本身需要 **tvOS 18+**。
2. 在 iPhone/iPad 上打开公开测试邀请链接：`https://testflight.apple.com/join/dmt8K5er`。
3. 接受邀请后，在 Apple TV 上打开 TestFlight，待有可用 tvOS 构建时即可直接安装。

### 方式二：侧载 IPA（需自行重签名）

GitHub Releases 提供用于用户自行重签名的 `*-tvos-arm64-*.ipa`，安装前须使用自己的 Apple 开发者证书与描述文件重签名。另附的 `*-tvos-appstore-arm64-*.ipa` 为 App Store 分发签名包，不能直接侧载安装。

## tvOS 使用说明与限制

- **缓存清理机制**：tvOS 不提供无限制的本地持久存储，空间不足时系统可能清理 `Library/Caches/OpenPlayX/` 中的配置、索引与缓存。建议将网络存储或媒体服务器作为主要媒体来源。
- **附近设备登录**：Apple TV 没有内置浏览器，OAuth 登录会通过苹果原生附近设备认证流程在 iPhone/iPad 上完成。
- **语音输入**：接续麦克风录音需要 Apple TV 4K（第二代及更新机型）、tvOS 17+，以及 iOS/iPadOS 17+ 的 iPhone/iPad。
- **验证状态**：系统后台调度任务、附近设备登录及实体遥控器流程的真机验收仍在持续进行中。
