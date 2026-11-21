---
title: 通过 Connector 远程访问
---

:::info 开发功能
本教程说明当前平台管理模式的 Connector 实现。开始前请确认 App 和 Connector 的发布版本均包含此流程。真实账号、设备及家庭网络的端到端验收仍需单独完成。
:::

## 开始前

准备 OpenPlayX 账号、兼容的 App 和 Connector 安装包、家中常开设备，以及可用的媒体服务。Linux amd64/arm64 加 systemd 支持安装；macOS arm64 有进程内验证。未认证厂商 NAS 安装器、Windows 服务或任意架构。

## 绑定并配置服务

1. 登录[账号中心](https://openplayx.com/account/)，打开 **Connector**。
2. 预注册 Connector，选择名称与平台，下载对应安装包及一次性绑定文件。妥善保管文件，其有效期为七天。
3. 按照对应安装包的 [Connector 安装说明](https://github.com/openplayx/openplayx-connector#pre-registration-from-the-account-page)，用 `--enroll` 导入绑定文件；成功后文件会被消费。使用配对码流程时，须用同一账号批准。
4. 打开 Connector 局域网管理页，明确保存需要的媒体服务映射。发现服务不等于发布服务。不要映射 NAS 管理口或无关端口。
5. 在 App 登录同一账号，刷新远程访问服务，为来源选择目标服务。
6. 先验证本地播放，再切换独立外部网络测试。检查服务已启用且 Connector 在线。

## 结果与限制

App 通过 Relay 访问明确配置的服务。Connector 自动选择可达的 Relay，没有手动节点选择器。来源凭据和媒体权限仍然有效；家庭上行带宽、移动网络和 Relay 状态会影响播放。

绑定失败时检查账号、文件有效期、设备时间和出站连接。仅播放失败时，先在局域网测试来源，再核对映射。反馈前隐藏绑定文件、令牌、地址及日志中的敏感信息。这是远程访问，不是跨设备媒体库同步。
