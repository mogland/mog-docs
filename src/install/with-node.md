# 使用 node 命令启动


:::warning 提示

Mog 仅推荐在 **Linux 和 macOS** 系统上使用，Windows 系统上的使用可能会出现一些问题。

如果你对 **Docker, Docker Compose, NodeJS, npm-script, git** 等技术不熟悉，建议先学习相关知识。文档中不会对这些技术进行详细介绍，且若由于不熟悉这些技术导致的问题，**我们将不会提供技术支持**。
:::



在 [最新的 Release](https://github.com/mogland/core/releases) 中找到 Assets，下载你所需要的构建包版本，目前我们提供：

- macOS x86
- Linux x86

如果其中没有符合你需要的版本，请前往[「自主构建」](../install/build.md)章节

下载后，解压压缩包，你将会获得一个文件夹，请不要修改文件夹内的任何一件东西，打开终端，使用 `cd` 命令进入此文件夹后，分别输入以下命令启动组件：

::: code-group
```bash [启动 Core 组件]
cd core
node index.js
```
```bash [启动 User-Service 组件]
cd user-service
node index.js
```
```bash [启动 xxx-Service 组件]
cd xxx-service
node index.js
```
:::

目前支持的组件，请前往[「自主构建」](../install/build.md)章节，我们在那里给出了具体的组件名称

关于组件启动时的自定义配置，请前往[「配置索引」](../config/)章节

:::info 关于持久化运行
请自行使用搜索引擎探索。这里给几个相关的关键词：**pm2**, **screen**, **docker**, **docker compose**
:::