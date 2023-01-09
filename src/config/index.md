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

### user_service.host

- 类型：`string | undefined`
- 默认值：`空`

用户服务部署的主机地址，可以为 IP， 也可以为域名，没有特殊情况下建议不填

### user_service.port

- 类型：`number`
- 默认值：`2331`

用户服务部署的端口号

### page_service.host

- 类型：`string | undefined`
- 默认值：`空`

页面服务部署的主机地址，可以为 IP， 也可以为域名，没有特殊情况下建议不填

### page_service.port

- 类型：`number`
- 默认值：`2332`

页面服务部署的端口号

### comments_service.host

- 类型：`string | undefined`
- 默认值：`空`

评论服务部署的主机地址，可以为 IP， 也可以为域名，没有特殊情况下建议不填

### comments_service.port

- 类型：`number`
- 默认值：`2333`

评论服务部署的端口号

### friends_service.host

- 类型：`string | undefined`
- 默认值：`空`

友链服务部署的主机地址，可以为 IP， 也可以为域名，没有特殊情况下建议不填

### friends_service.port

- 类型：`number`
- 默认值：`2334`

友链服务部署的端口号

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
user_service:
  host: http://localhost:2331
  port: 2331
page_service:
  host: http://localhost:2332
  port: 2332
```

上述配置文件将会启动 `Mog Core` 网关层，端口号为 `8080`，允许跨域的域名列表为 `['localhost:9528', 'localhost:2323', 'localhost:2222']`，用户服务部署的主机地址为 `http://localhost:2331`，用户服务部署的端口号为 `2331`，页面服务部署的主机地址为 `http://localhost:2332`，页面服务部署的端口号为 `2332`

### 其他

```bash
$ npx nest start -w core -- --help

Usage: main [options]                                                                                 

Options:
  -c, --config <path>                config file path 配置文件路径
  -N, --collection_name <name>       collection name 数据库集合名
  -H, --db_host <host>               host of database 数据库地址
  -U, --db_user <user>               user of database 数据库用户名
  -P, --db_password <password>       password of database 数据库密码
  #...

$ npx nest start -w core
# config.yaml 默认获取执行目录下的 env.yaml

$ npx nest start -w core -- --config=/Users/wibus/Desktop/env.yaml # 当然也可以自定义
# config.yaml 是必须要存在的，这里面储存的是不同服务的环境变量
# 通过命令行参数输入的都是全局变量，都是通用的。
```
