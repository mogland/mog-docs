---
title: 自定义配置 Mog Core | 进阶安装
---

# 自定义配置 Mog Core <Badge text="Feature Preview" color="gray" />

:::warning
此功能仍然处于开发阶段，尚未上线。仅作为 Feature Preview。
:::

Mog 的主要优势之一是它可以弹性组装服务。只要你的条件允许，你可以将服务部署至不同的终端中，但一般你只需部署到同一个终端上即可。但是当你需要配置网关连接服务的IP时（也就是当你将服务部署到了不同的终端时）你需要对 Core 进行配置

**所以一般来说，如果你只部署到了同一个终端上，以下的内容你是不需要了解且填写的，配置的内容越多，越容易出问题。**


## 启动命令的改变

我们提到「使用 NestJS CLI 命令启动你已构建完成的服务」使用的命令为

```bash
pnpm start:<service-name>
```

此命令等价为

```bash
nest start <service-name>
# 或
node dist/apps/<service-name>/main.js
```

当我们需要在启动 Mog 进行配置的时候，则需要「等价」的命令（当然使用 `pnpm` 也可以，如果你会的话），之后在后方携带 `--<arg_name>=<arg_value>` 格式的参数启动

## 配置 Core

当你将服务部署到了不同的终端时，你需要对 Mog Core 的网关层进行配置。

目前支持配置的字段有：

- `userService` - 用户服务
  - `userService_host` - 用户服务部署的主机地址，可以为 IP， 也可以为域名
- `pageService` - 文章等模块服务
  - `pageService_host` - 服务部署的主机地址，可以为 IP， 也可以为域名
- `core` - 网关层
  - `core_port` - 网关层公开端口
  - `core_allow_origins` - 网关层允许的跨域来源，**不可以为 `*`**，使用 `,` 进行分隔

我们同样支持 YAML 格式的配置文件，你可以在启动的文件夹下创建 `core.yml` 文件，然后将配置写入其中

```yaml
userService: # 用户服务
  host: http://localhost:3001 # 用户服务部署的主机地址，可以为 IP， 也可以为域名
pageService: # 文章等模块服务
  host: http://localhost:3002 # 文章等模块服务部署的主机地址，可以为 IP， 也可以为域名
core: # 网关层
  port: 3000 # 网关层公开端口
  allow_origins: [example.com, excccc.com] # 网关层允许的跨域来源，不可以为 `*`，使用 `,` 进行分隔
```

## 启动 Core

若你使用 NestJS CLI 启动，则命令应当如：

```bash
nest start core \
	-- \
	--userService_host=192.168.101.2 \
	--pageService_host=192.168.101.3 \
	--core_port=8888 \
	--core_allow_origins=example.com,excccc.com

# 或者是使用 YAML 格式的配置文件

nest start core \
  -- \
  --config=core.yml
```

若你直接使用 node 启动，则命令应当如：

```bash
node dist/apps/core/main.js \
	--userService_host=192.168.101.2 \
	--pageService_host=192.168.101.3 \
	--core_port=8888 \
	--core_allow_origins=example.com,excccc.com

# 或者是使用 YAML 格式的配置文件

node dist/apps/core/main.js \
  --config=core.yml
```

---

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