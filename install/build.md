---
title: 自主构建 | 进阶安装
---

# 自主构建

:::tip 你什么时候需要自主构建？
如果你想要自定义构建过程，或者你想要在不同的平台上运行，那么你需要自主构建。我们在「快速起步」章节提供的是 **Linux + macOS x86** 平台的构建包。
:::

## 直接构建服务

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

使用 `node` 命令启动你已构建完成的服务

```bash
cd dist/<service-name>
node main.js
# 比如说
cd dist/core
node main.js
```

## 拓展：使用 @vercel/ncc 重新构建

`@vercel/ncc` 是一个可以将 Node.js 项目打包成一个单文件的工具，让你可以在不安装项目依赖（`node_modules`）的情况下运行项目。

core 中已经写好了相关构建命令，你可以直接使用，但前提是你需要先构建了服务。

```bash
pnpm bundle:<service-name>
# 比如说
pnpm bundle:core

# 你也可以使用
pnpm bundle # 构建所有服务
```

构建完成后，你可以在 `out/<service-name>` 目录下找到打包后的文件夹。请注意，请勿修改打包后的文件夹内的任何文件，否则可能会导致服务无法正常运行。

接下来使用 `node` 命令启动你已构建完成的服务

```bash
cd out/<service-name>
node main.js
# 比如说
cd out/core
node main.js
```

关于组件启动时的自定义配置，请前往[「配置索引」](../config/)章节

> 关于如何持久化运行，请自行使用搜索引擎探索。这里给两个相关的关键词：`pm2`, `screen`, `docker`, `docker compose`