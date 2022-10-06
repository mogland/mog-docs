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

:::info 提示

Mog 仅推荐在 **Linux 和 macOS** 系统上使用，Windows 系统上的使用可能会出现一些问题。

如果你对 **Docker, Docker Compose, NodeJS, npm-script, git** 等技术不熟悉，建议先学习相关知识。文档中不会对这些技术进行详细介绍，且若由于不熟悉这些技术导致的问题，**我们将不会提供技术支持**。
:::

在 [最新的 Release](https://github.com/mogland/core/releases) 中找到 Assets，下载你所需要的构建包版本，目前我们提供：

- macOS x86
- Linux x86

如果其中没有符合你需要的版本，请前往[「自主构建」](../install/build.md)章节

下载后，解压压缩包，你将会获得一个文件夹，请不要修改文件夹内的任何一件东西，打开终端，使用 `cd` 命令进入此文件夹后，分别输入以下命令启动组件：

```bash
# 启动 core Gateway 核心组件
cd core
node index.js

# 启动 Page-Service 组件
cd page-service
node index.js

# 启动 User-Service 组件
cd user-service
node index.js

# 启动...组件
```

目前支持的组件，请前往[「自主构建」](../install/build.md)章节，我们在那里给出了具体的组件名称

关于组件启动时的自定义配置，请前往[「配置索引」](../config/)章节

> 关于如何持久化运行，请自行使用搜索引擎探索。这里给两个相关的关键词：`pm2`, `screen`, `docker`, `docker compose`

## 社区

如果你有疑问或者需要帮助，可以到 [GitHub Discussions](https://github.com/mogland/core/discussions) 社区来寻求帮助。
