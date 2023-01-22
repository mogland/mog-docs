---
title: 配置索引 | 配置
outline: deep
---

# 配置索引

## 配置

`Mog Core` 将可以从以下两个地方获取配置信息以匹配你的不同需求并设置为你的 Mog 运行时环境。

- 获取 YAML 的配置文件，优先级最高，默认读取当前目录下的 `env.yaml` 文件。
- 命令行参数，优先级次之，有局限性，不建议使用

## 选项

当你使用传递命令行参数时，参数传递格式为 `--<key>=<value>`，例如 `--db_port=8123`：

```bash
$ node index.js --db_port=8123
```

当你使用 YAML 配置文件时，配置文件格式为：

```yaml
<service_name>:
  <key>: <value>

<key>: <value>
```

### <service_name>.\<key>

- 类型：`unknown`
- 默认值：`undefined`

`<service_name>` 为 `Mog Core` 的服务名称，`<key>` 为服务的配置项。

### \<key>

- 类型：`unknown`
- 默认值：`undefined`

`<key>` 为 `Mog Core` 的配置项。你可以通过后接 `--help / -h` 来查看有关配置项。

### config

- 类型：`string`
- 默认值：`<cwd>/env.yaml`
- 别名： `c`

配置文件路径。

### collection_name

- 类型：`string`
- 默认值：`mog`
- 别名： `N`

数据库集合名称。

### db_host

- 类型：`string`
- 默认值：`localhost`
- 别名： `H`

数据库地址。

### db_port

- 类型：`number`
- 默认值：`27017`
- 别名： `P`

数据库端口。

### db_user

- 类型：`string | undefined`
- 默认值：`undefined`
- 别名： `U`

数据库用户名。

### db_password

- 类型：`string | undefined`
- 默认值：`undefined`
- 别名： `W`

数据库密码。

### redis_host

- 类型：`string`
- 默认值：`localhost`
- 别名： `RH`

Redis 地址。

### redis_port

- 类型：`number`
- 默认值：`6379`
- 别名： `RP`

Redis 端口。

### redis_password

- 类型：`string | undefined`
- 默认值：`undefined`
- 别名： `RW`

Redis 密码。

### redis_user

- 类型：`string | undefined`
- 默认值：`undefined`
- 别名： `RU`

Redis 用户名。

### jwt_secret

- 类型：`string`
- 默认值： `无可奉告`

JWT 密钥。

### jwt_expire

- 类型：`number`
- 默认值：`7d`

JWT 过期时间（天）。

### console.enable

- 类型：`boolean`
- 默认值：`false`

是否启用内置控制台。

### console.versionType

- 类型：`string`
- 默认值：无默认

版本类型，若需要使用非正式版本，则填入 `pre-release`，若需要正式版本，则任意填入一个字符串 或 不填写。

### console.source

- 类型：`string`
- 默认值：`gh`

获取方式，可选择 `gh` 或 `npm`。gh 即 GitHub Release，npm 即 npmjs.com。

事实上，并不建议使用 npm 方式，这似乎会导致 rate limit

### console.proxy\.gh

- 类型：`string`
- 默认值：`https://ghproxy.com`

GitHub Release 的代理地址。

::: info
我们没有提供支持 npm 是因为我们从 npm 获取文件使用的是官方的一个接口 https://www.npmjs.com/package/${name}/file/${fileId}，而此接口似乎无镜像
:::

### core.listen_ip

- 类型：`string`
- 默认值：`0.0.0.0`

Mog Core 监听 IP

### core.port

- 类型：`number`
- 默认值：`2330`

Mog Core 网关层启动的端口号

### core.allow_origins

- 类型：`string[]`
- 默认值：`['localhost:9528', 'localhost:2323', 'localhost:2222', '127.0.0.1', 'localhost:3000']`

允许跨域的域名列表， **不可以为 `*`**，使用 `,` 进行分隔

## 配置举例

### 传递命令行参数

```bash
$ node index.js --core_port=8080 --core_allow_origins=localhost:9528,localhost:2323,localhost:2222 --user_service_host=http://localhost:2331 --user_service_port=2331 --page_service_host=http://localhost:2332 --page_service_port=2332
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
```

### 其他

```bash
$ node index.js --help

Usage: main [options]                                                                                 

Options:
  -c, --config <path>                config file path 配置文件路径
  -N, --collection_name <name>       collection name 数据库集合名
  -H, --db_host <host>               host of database 数据库地址
  -U, --db_user <user>               user of database 数据库用户名
  -P, --db_password <password>       password of database 数据库密码
  #...

$ node index.js
# config.yaml 默认获取执行目录下的 env.yaml

$ node index.js --config=/Users/wibus/Desktop/env.yaml # 当然也可以自定义
# config.yaml 是必须要存在的，这里面储存的是不同服务的环境变量
# 通过命令行参数输入的都是全局变量，都是通用的。
```
