---
title: 自定义配置 Mog Core | 进阶安装
---

# 自定义配置 Mog Core

:::warning
此功能与原本规划的具有一定区别，请注意文档的改变。
:::

Mog 的主要优势之一是它可以弹性组装服务。只要你的条件允许，你可以将服务部署至不同的终端中，但一般你只需部署到同一个终端上即可。但是当你需要配置网关连接服务的IP时（也就是当你将服务部署到了不同的终端时）你需要对 Core 进行配置

**所以一般来说，如果你只部署到了同一个终端上，以下的内容你是不需要了解且填写的，配置的内容越多，越容易出问题。**


## 启动命令的改变

我们提到「使用 NestJS CLI 命令启动你已构建完成的服务」使用的命令为


```bash
node <server bundle storge path>
```

当我们需要在启动 Mog 进行配置的时候，则需要命令之后在后方携带 `--<arg_name>=<arg_value>` 格式的参数启动

## 配置 Core

当你将服务部署到了不同的终端时，你需要对 Mog Core 的网关层进行配置。

目前支持配置的字段可以查阅 [配置索引](/config/)

我们同样支持 YAML 格式的配置文件，你可以在启动的文件夹下创建 `core.yml` 文件，然后将配置写入其中

```yaml
user_service: # 用户服务
  host: http://localhost:3001 # 用户服务部署的主机地址，可以为 IP， 也可以为域名
page_service: # 文章等模块服务
  host: http://localhost:3002 # 文章等模块服务部署的主机地址，可以为 IP， 也可以为域名
core: # 网关层
  port: 3000 # 网关层公开端口
  allow_origins: [example.com, excccc.com] # 网关层允许的跨域来源，这个地方也可以写成 localhost:9528,localhost:2323,localhost:2222 而不需要 Object

collection_name: 'mog' # 数据库的集合名
db_host: 'localhost' # 数据库主机地址
#...more
```

## 启动 Core

::: code-group
```bash [使用 Node 启动]
node dist/apps/core/main.js \
  --db_host=localhost \
  --config=core.yml
```
```bash [使用 NestJS CLI 启动]
nest start core \
	-- \
  --db_host=localhost \
  --config=core.yml

# 或者是只使用 YAML 格式的配置文件

nest start core \
  -- \
  --config=core.yml
  
```
:::

### ⚠️ 警告

无论如何都需要携带YAML配置文件，若不进行配置则会自动获取当前执行目录下的 env.yaml 文件，若文件不存在则会报错，如果全部默认参数也需要存在这个文件

命令行允许输入的参数有限，所以我们建议使用 YAML 格式的配置文件。有关允许命令行输入的参数可以查阅 [配置索引](/config/)


---

## 如何检查配置？

当 core 启动时，你可以看到出现了一个类似于 JSON 对象的文本内容，应该出现类似的内容

```js
{
  collection_name: 'mog',
  db_host: 'localhost'
  // ...
}
```

你可以在此处检查你的配置正确或否

更多配置项请查阅 [配置索引](/config/)