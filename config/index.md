---
title: 配置索引 | 配置
outline: deep
---

# 配置索引

## 配置

`Mog Core` 将可以从以下两个地方获取配置信息以匹配你的不同需求并设置为你的 Mog 运行时环境。

- 传递命令行参数，优先级最高
- 获取 YAML 的配置文件，优先级次之，建议放入 `.mog/env`，例如 `.mog/env/config.yaml`

## 选项

当你使用传递命令行参数时，参数传递格式为 `--<ServiceName>_<key>=<value>`，例如 `--core_port=8080`：

```bash
$ node index.js --core_port=8080
```

当你使用 YAML 配置文件时，配置文件格式为：

```yaml
<service_name>:
  <key>: <value>
```

### <service_name>.\<key>

- 类型：`unknown`
- 默认值：`undefined`

`<service_name>` 为 `Mog Core` 的服务名称，`<key>` 为服务的配置项。

### core.port

- 类型：`number`
- 默认值：`2330`

Mog Core 网关层启动的端口号

### core.allow_origins

- 类型：`string[]`
- 默认值：`['localhost:9528', 'localhost:2323', 'localhost:2222', '127.0.0.1', 'localhost:3000']`

允许跨域的域名列表， **不可以为 `*`**，使用 `,` 进行分隔

### userService.host

- 类型：`string`
- 默认值：`'http://localhost:2331'`

用户服务部署的主机地址，可以为 IP， 也可以为域名

### userService.port

- 类型：`number`
- 默认值：`2331`

用户服务部署的端口号

### pageService.host

- 类型：`string`
- 默认值：`'http://localhost:2332'`

页面服务部署的主机地址，可以为 IP， 也可以为域名

### pageService.port

- 类型：`number`
- 默认值：`2332`

页面服务部署的端口号

## 配置举例

### 传递命令行参数

```bash
$ node index.js --core_port=8080 --core_allow_origins=localhost:9528,localhost:2323,localhost:2222 --userService_host=http://localhost:2331 --userService_port=2331 --pageService_host=http://localhost:2332 --pageService_port=2332
```

上述命令将会启动 `Mog Core` 网关层，端口号为 `8080`，允许跨域的域名列表为 `['localhost:9528', 'localhost:2323', 'localhost:2222']`，用户服务部署的主机地址为 `http://localhost:2331`，用户服务部署的端口号为 `2331`，页面服务部署的主机地址为 `http://localhost:2332`，页面服务部署的端口号为 `2332`

### YAML 配置文件

```yaml
core:
  port: 8080
  allow_origins: [
    'localhost:9528',
    'localhost:2323',
    'localhost:2222',
  ]
userService:
  host: http://localhost:2331
  port: 2331
pageService:
  host: http://localhost:2332
  port: 2332
```

上述配置文件将会启动 `Mog Core` 网关层，端口号为 `8080`，允许跨域的域名列表为 `['localhost:9528', 'localhost:2323', 'localhost:2222']`，用户服务部署的主机地址为 `http://localhost:2331`，用户服务部署的端口号为 `2331`，页面服务部署的主机地址为 `http://localhost:2332`，页面服务部署的端口号为 `2332`