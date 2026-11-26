---
title: 常见问题
---

## 可以安装哪些平台？

当前[下载页](https://openplayx.com/zh/download/)提供 **macOS**（Universal / Apple Silicon / Intel）、**Windows**（x86_64）、**Linux**（x86_64 AppImage）、**Android**、**Android TV** 及 **Apple TV**（tvOS 实验版 IPA / TestFlight）安装包。iOS 暂未提供公开下载，不支持 Flutter Web 播放。

## 需要账号或 AI 订阅吗？

本地播放均不需要。模型服务商可能收费，MCP 服务也有自己的准入规则。平台管理模式的 Connector 需要 OpenPlayX 账号。默认的 Groq 字幕代理无需填写客户端密钥，但受平台限频约束。按需[配置 AI](../ai/models.md)即可。

## 为什么能浏览文件，首页却为空？

连接与已索引的文件源用途不同。需要[添加目录并扫描](../library/home.md)。先检查目录范围、权限和扫描结果，再决定是否重新全量扫描。

## 网盘与字幕是否所有平台都支持？

网盘适配器与本机字幕识别依赖发布者配置、凭据、平台和构建。请查看[网盘来源](../sources/cloud-drives.md)和[字幕生成与字幕对齐](../playback/subtitles.md)了解具体平台支持范围与限制。

## 数据保存在哪里？

配置、非云盘来源凭据和模型 API Key 保存在本地配置数据库（`configuration.sqlite3`）；媒体、进度、对话和任务保存在本地媒体库数据库（`library.sqlite3`）。网盘 OAuth 令牌及新版品牌 WebDAV 应用密码会在支持的平台上使用系统安全存储；其余凭据目前尚未启用应用层数据库加密。请保护设备访问和备份。开发期数据库迁移可能重建旧表并丢弃数据。完整跨设备同步与直播/IPTV 尚未交付。

## 如何反馈？

在 [App issue](https://github.com/openplayx/openplayx/issues) 中提供版本、系统、架构、来源类型、最小复现步骤及预期与实际结果。使用测试媒体，隐藏截图与诊断中的凭据、地址、路径和个人信息。安全问题通过项目[安全政策](https://github.com/openplayx/openplayx/security/policy)报告，不要发布公开 issue。

文档修正请提交到 [docs 仓库](https://github.com/openplayx/docs)。
