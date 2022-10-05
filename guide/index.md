---
title: 快速起步 | 指南
---

# 快速起步

## 总览

Mog 是一个基于 Nest.js 的前后端分离博客系统，采用了微服务架构。

你可以在 [为什么选择 Mog？](/guide/why) 中了解有关此项目背后的想法。

## 在线试用 Mog <Badge text="Feature Preview" color="gray" />

你 ~~[暂时还不可以在线尝试 Mog](#)~~。它是 Mog 的后台系统 Demo，你可以在这里体验 Mog 的后台系统，当然，它自然是受到一定的限制的。

## 将 Mog Core 安装到服务器

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

当你成功启动 core 的时候，你应该可以看到类似于如下的内容：

<summary></summary>



:::info 提示

Mog 仅推荐在 **Linux** 系统上使用，Windows 系统上的使用可能会出现一些问题。

如果你对 **Docker, Docker Compose, NodeJS, npm-script, git** 等技术不熟悉，建议先学习相关知识。文档中不会对这些技术进行详细介绍，且若由于不熟悉这些技术导致的问题，**我们将不会提供技术支持**。
:::

## 社区

如果你有疑问或者需要帮助，可以到 [GitHub Discussions](https://github.com/mogland/core/discussions) 社区来寻求帮助。
