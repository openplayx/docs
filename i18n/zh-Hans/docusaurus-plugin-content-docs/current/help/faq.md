---
title: 常见问题
---

## 可以安装哪些平台？

使用[下载页](https://openplayx.com/zh/download/)列出的 Apple Silicon macOS 与 Android 安装包，并检查具体版本支持的架构。存在 iOS、Windows、Linux 源码不代表已经提供安装包。不支持 Flutter Web 播放和电视遥控界面。

## 需要账号或 AI 订阅吗？

本地播放均不需要。模型服务商可能收费，MCP 服务也有自己的准入规则。平台管理模式的 Connector 需要 OpenPlayX 账号。按需[配置 AI](../ai/models.md)即可。

## 为什么能浏览文件，首页却为空？

连接与已索引的文件源用途不同。需要[添加目录并扫描](../library/home.md)。先检查目录范围、权限和扫描结果，再决定是否重新全量扫描。

## 网盘与字幕是否所有平台都支持？

网盘适配器与本机字幕识别依赖发布者配置、凭据、平台和构建。部分网盘仍待真实账号验收。不能因为源码中存在某适配器或处理后端，就认为当前安装包一定可用。

## 数据保存在哪里？

配置、凭据和密钥保存在本地配置数据库；媒体、进度、对话和任务保存在本地媒体库数据库。目前没有应用层数据库加密或独立系统钥匙串。请保护备份，开发期迁移可能丢失旧数据。完整跨设备同步与直播/IPTV 尚未交付。

## 如何反馈？

在 [App issue](https://github.com/openplayx/openplayx/issues) 中提供版本、系统、架构、来源类型、最小复现步骤及预期与实际结果。使用测试媒体，隐藏截图与诊断中的凭据、地址、路径和个人信息。安全问题通过项目[安全政策](https://github.com/openplayx/openplayx/security/policy)报告，不要发布公开 issue。

文档修正请提交到 [docs 仓库](https://github.com/openplayx/docs)。教程已核对实现，但不能替代你的账号或硬件实测。
