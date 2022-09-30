---
title: 快速起步 | 指南
---

# 快速起步

## 总览

Mog 是一个基于 Nest.js 的前后端分离博客系统，采用了微服务架构。

你可以在 [为什么选择 Mog？](/guide/why) 中了解有关此项目背后的想法。

## 在线试用 Mog

你 ~~[暂时还不可以在线尝试 Vitest](#)~~。它是 Mog 的后台系统 Demo，你可以在这里体验 Mog 的后台系统，当然，它自然是受到一定的限制的。

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

## 配置 Mog Core `[Preview Feature]`

Mog 的主要优势之一是它可以弹性组装服务。只要你的条件允许，你可以将服务部署至不同的终端中，但一般你只需部署到同一个终端上即可。但是当你需要配置网关连接服务的IP时（也就是当你将服务部署到了不同的终端时）你需要对 Core 进行配置

:::info

所以一般来说，如果你只部署到了同一个终端上，以下的内容你是不需要了解且填写的，配置的内容越多，越容易出问题。

:::

上面我们提到「使用 NestJS CLI 命令启动你已构建完成的服务」使用的命令为

```bash
pnpm start:<service-name>
```

此命令等价为

```bash
nest start <service-name>
# 或
node dist/apps/<service-name>/main.js
```

当我们需要在启动 Mog 进行配置的时候，则需要「等价」的命令，之后在后方携带 `--<arg_name>=<arg_value>` 格式的参数启动

当你将服务部署到了不同的终端时，你需要对 Mog Core 的网关层进行配置。

目前支持配置的字段有：

- `userService` - 用户服务
  - `userService_host` - 用户服务部署的主机地址，可以为 IP， 也可以为域名
- `pageService` - 文章等模块服务
  - `pageService_host` - 服务部署的主机地址，可以为 IP， 也可以为域名
- `core` - 网关层
  - `core_port` - 网关层公开端口
  - `core_allow_origins` - 网关层允许的跨域来源，**不可以为 `*`**，使用 `,` 进行分隔

若你使用 NestJS CLI 启动，则命令应当如：

```bash
nest start core \
	-- \
	--userService_host=192.168.101.2 \
	--pageService_host=192.168.101.3 \
	--core_port=8888 \
	--core_allow_origins=example.com,excccc.com
```

若你直接使用 node 启动，则命令应当如：

```bash
node dist/apps/core/main.js \
	--userService_host=192.168.101.2 \
	--pageService_host=192.168.101.3 \
	--core_port=8888 \
	--core_allow_origins=example.com,excccc.com
```

:::tip 如何检查配置？

当 core 启动时，你可以看到出现了一个类似于 JSON 对象的文本内容，若按照上方例子运行，则应该出现如下内容

```json
{                                                                     
  _: [], // 正常情况没有配置下，应该只有这一行
  userService_host: '192.168.101.2',
  pageService_host: '192.168.101.3',
  core_port: 8888,
  core_allow_origins: 'example.com,excccc.com'
}
```

你可以在此处检查你的配置正确或否

:::

## 社区

如果你有疑问或者需要帮助，可以到 [GitHub Discussions](https://github.com/mogland/core/discussions) 社区来寻求帮助。
