---
title: 自主构建 | 进阶安装
---

# 自主构建

:::tip 你什么时候需要自主构建？
如果你想要自定义构建过程，或者你想要在不同的平台上运行，那么你需要自主构建。我们在「快速起步」章节提供的是 **Linux + macOS x86** 平台的构建包。
:::

克隆 git 仓库，其中 `core` 为 Mog 核心 必须安装

```bash
git clone https://github.com/mogland/core.git
```

使用 pnpm 安装项目依赖

```bash
pnpm install
```

使用 NestJS CLI 命令构建你需要的服务

```bash
pnpm build:<service-name>
# 比如说
pnpm build:core
```

目前支持的 `service-name` 有：

- `core` - 网关层 **（必须构建）**
- `user-service` - 用户服务模块 **（必须构建）**
- `page-service` - 文章页面分类服务模块 **（必须构建）**

使用 NestJS CLI 命令启动你已构建完成的服务

```bash
pnpm start:<service-name>
# 比如说
pnpm start:core
```