# 拓展新的服务模块

::: warning
此文章仅考虑的是 NestJS Gateway 场景下，对于其他情况暂时不做解释，按理来说应该你也能理解。

此外，这篇文章使用的是 Redis 作为传输层，你需要知道基本操作才能来看此文章，并且此文章仅讲述交互原理。

---

文章来自 [可愛い松 | NestJS 微服务通过订阅发布事件与其他技术栈交互](https://blog.iucky.cn/posts/programming/use-nestjs-microservice-with-other-tech), 但基于 Mog 做了部分补充
:::

如果你想直接越过解释前往实践，可以直接看 [使用 NodeJS 写一个微服务](#使用-nodejs-写一个微服务) 这一节

## 创建一个微服务模块


使用 `nest g app tester` NestJS CLI 将会自动帮你创建对应的模块，但是你需要自己修改部分内容，比如在 main.ts，你需要将 `create` 替换为 `createMicroservice`，还有其他的，但是需要注意的是，请将 transporter 设置为 REDIS

```ts
const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    YourModule,
    {
      transport: Transport.REDIS,
      options: {
        port: REDIS.port,
        host: REDIS.host,
        password: REDIS.password,
        username: REDIS.user,
      },
    },Ï
  );
await app.listen();
```

接下来我们使用 redis-cli 来监控事件变化

```ts
redis-cli monitor
```

## 使用微服务订阅事件

与 `@nestjs/common` 中不一样的 `@Get()`，你需要使用在 microservices 包内的 MessagePattern，以下是一个示范

```ts
@MessagePattern({ cmd: "get.something" })
async getSomething() {
  console.log('getSomething');
}
```

接下来，启动这个微服务，注意一下上方 redis-cli monitor 出现的日志

```bash
1673269961.656461 [0 127.0.0.1:63956] "info"
1673269961.657177 [0 127.0.0.1:63957] "info"
1673269961.659145 [0 127.0.0.1:63956] "subscribe" " {\"cmd\":\"get.something\"}
```

看样子我们找到了一个开始订阅的事件，让我们记住这一个事件，继续下去。

> 后续，我将使用 `user.get.master` 来代替 `get.something` 事件
>
> 另外，这种事件命名方式并不是必须的，这只是我个人习惯

## 在网关层订阅事件

你需要在网关层模块中导入一个 `ClientModule`：

```ts
ClientsModule.register([
      {
        name: "YOUR_MODULE",
        transport: Transport.REDIS,
        options: {
          port: REDIS.port,
          host: REDIS.host,
          password: REDIS.password,
          username: REDIS.user,
        },
      },
    ]),
```

之后在 controller 构造函数中注入它，再任意搞一个请求：

```ts
constructor(
    @Inject("YOUR_MODULE") private readonly yourModule: ClientProxy,
  ) {}

@Get('/')
async getMaster() {
  return this.category.send({ cmd: "user.get.master" }, {})
}
```

让我们继续启动网关层，redis-cli monitor 此时不会出现任何日志，这是正常的

## 当收到请求时，事件发生了什么变化

我们访问一下网关层中配置的路径，注意一下 redis-cli monitor 出现的日志：

```bash
1673270738.710378 [0 127.0.0.1:64424] "subscribe" "{\"cmd\":\"user.get.master\"}.reply"
1673270738.710744 [0 127.0.0.1:64425] "publish" "{\"cmd\":\"user.get.master\"}" "{\"pattern\":{\"cmd\":\"user.get.master\"},\"data\":{},\"id\":\"6c1475df-b357-4bc9-8443-5f0f06bf8e0b\"}"
1673270738.781133 [0 127.0.0.1:64931] "publish" "{\"cmd\":\"user.get.master\"}.reply" "{\"response\":{\"_id\":\"638c311569199e8250503d80\",\"username\":\"wibus-wee\",\"nickname\":\"Wibus\",\"description\":\"\xe6\x88\x91\xe6\x98\xaf\xe7\xbb\x83\xe4\xb9\xa0\xe6\x97\xb6\xe9\x95\xbf\xe4\xb8\xa4\xe5\xb9\xb4\xe5\x8d\x8a\xe7\x9a\x84\xe4\xb8\xaa\xe4\xba\xba\xe7\xbb\x83\xe4\xb9\xa0\xe7\x94\x9f\",\"avatar\":\"http://example.com\",\"email\":\"example@example.com\",\"url\":\"http://example.com\",\"role\":0,\"created\":\"2022-12-04T05:33:09.526Z\",\"__v\":0,\"lastLoginTime\":\"2023-01-09T08:39:39.723Z\",\"id\":\"638c311569199e8250503d80\"},\"isDisposed\":true,\"id\":\"da1d3910-5e1b-4193-8637-9cbfdd8ebac1\"}"
1673270738.714335 [0 127.0.0.1:64424] "unsubscribe" "{\"cmd\":\"user.get.master\"}.reply"
```

这日志有点辣眼睛，而且这个是我们开了网关层 & 微服务出现的日志，我们暂时只想知道网关层，我们将上面的微服务关掉，再访问一次：

```bash
1673270936.835823 [0 127.0.0.1:64424] "subscribe" "{\"cmd\":\"user.get.master\"}.reply"
1673270936.836329 [0 127.0.0.1:64425] "publish" "{\"cmd\":\"user.get.master\"}" "{\"pattern\":{\"cmd\":\"user.get.master\"},\"data\":{},\"id\":\"f118b8f7-26ce-44dc-b8b0-592fceab1250\"}"
1673270939.835447 [0 127.0.0.1:64424] "unsubscribe" "{\"cmd\":\"user.get.master\"}.reply"
```

我们精简一下，将无用的数据去掉，只留下我们想要的东西吧：

```bash
"subscribe" "cmd.reply"
"publish" "cmd" "{\"pattern\":{\"cmd\":\"user.get.master\"},\"data\":{},\"id\":\"6c1475df-b357-4bc9-8443-5f0f06bf8e0b\"}"
"unsubscribe" "cmd.reply"
```

可以看到网关层先订阅了一个基于之前我们定义的 `user.get.master` 的 reply 事件，之后，在 `user.get.master` 事件上发布了数据，就是将 pattern, data, id 发布了，十分重要的就是这个id，这是网关层中传输来的。

对比一下，你就可以知道其中有一个特别长的日志就是由微服务发布的，可以发现微服务是向 reply 事件发布了事件，内容还包含了之前我们提到的 id，之后网关层收到了数据返回，接着返回来自微服务的数据，取消订阅对应的事件

让我们用一个图来解释下吧：

```mermaid
graph TD;
A[网关层接受请求] --> B[开始订阅 event.reply 事件]
A --> C[向 event 发布 data 和 id]
C --> D
B --> F
E --> F[网关层收到来自 event.reply 的数据]
F --> G[取消订阅 event.reply 事件]

AA[微服务开始订阅 event 事件] --> D[微服务收到来自 event 的数据]
D --> E[向 event.reply 发布数据]
```

总结一下，其实就是这样的：

![SCR-20230109-nrl](https://cdn.my-api.cn/user/w/asset-pic-picgo/2023-01-202301092137599.png)

## 使用 NodeJS 写一个微服务

使用 pnpm 安装上 redis，根据上方我所说的内容，抽出来一些功能函数，以提高可维护性。

因为 [NestJS 文档](https://docs.nestjs.com/microservices/basics) 有说到两种模式，分别是 `message` 和 `event`，因此我们需要做一个判定和快捷生成对应的 pattern：

```ts
/**
 * isEmitter 判断是否为 event-based 模式
 * 
 * 通过 JSON.stringify 判断是否为 event-based 模式。
 * 原理：在 event-based 模式下, pattern 是不带 cmd 的。
 *
 * PS：`isEmitter` 方法可能在这个案例里面没有用，但不排除有其他需求时是有用的
 * 
 * @param {string} pattern 模式
 * @returns boolean
 */
function isEmitter(pattern) {
  try {
    JSON.stringify(pattern)
    return false
  } catch {
    return true
  }
}

/**
 * 快捷生成模式
 * @param {string} pattern 活动名称
 * @param {boolean} isEmit 是否为 event-based 模式
 * @returns string
 */
function generagtePattern(pattern, isEmit) {
  if (!isEmit) {
    return JSON.stringify({ cmd: pattern })
  }
  return pattern
}
```

我们分析一下信息的结构吧，很明显来自Gateway的信息带有3个key：pattern, data, id，其中 id 是自动生成的，也是返回响应时必要的；

再分析一下NestJS Microservice 是怎么响应的，它的信息也带有3个key：response, isDispose, id，其中 isDispose 必须为 true，id 必须是来自 Gateway 的。

```ts
/**
 * 解析来自 NestJS Gateway 发布的信息
 * @param {string} message
 * @returns object
 */
function parseEventDataFromGateway(message) {
  message = JSON.parse(message)
  return {
    id: message.id,
    data: message.data,
    pattern: JSON.stringify(message.pattern),
    isEmitter: isEmitter(message.pattern),
  }
}

/**
 * 生成响应数据
 * @param {string} id 事件ID
 * @param {string | object} data 事件数据
 * @returns string
 */
function generagteResponse(id, data) {
  return JSON.stringify(
    {
      response: data,
      isDisposed: true,
      id,
    }
  )
}
```

所以剩下的就是创建 redis client 和发布/订阅事件了，需要注意的是，返回给 Gateway 的信息需要在事件后加上`.reply`，你在 monitor 上也能看到 Gateway 在发布事件的时候会同时订阅对应的reply事件：

```ts
import { createClient } from 'redis';

const client = createClient()
const subscriber = client.duplicate();
await subscriber.connect();
const publisher = client.duplicate();
await publisher.connect();
const pattern = generagtePattern("<YOUR_EVENT_SETTING>", false)

await subscriber.subscribe(pattern, async (message) => {
  const { id, data, pattern, isEmitter } = parseEventDataFromGateway(message)
  console.log("Message: ", message)
  console.log("Event ID: ", id)
  console.log("Data: ", data)
  console.log("Pattern: ", pattern)
  console.log("isEmitter: ", isEmitter)
  // ⚠️ 注意下这里，这个的 event 是 pattern.reply！
  await publisher.publish(`${pattern}.reply`, generagteResponse(id, { name: 'test' }))
});
```

这样便是一个简单易启动的服务啦！使用 node^18 更可以使用其实验性功能：`--watch` 直接监听文件变化重载程序

```bash
node --watch service.js
```

![](https://cdn.my-api.cn/user/w/asset-pic-picgo/2023-01-202301102241094.jpeg)

## 在 Mog Core 中注册事件

在 Mog Core 中，我们需要在 Gateway 运行目录下创建一个 `events.yaml` 文件，它是用于注册非常规事件的，即非官方实现的事件，例如：`user.login`，`user.register` 等等。

```yaml
render: # controller --> {API}/render/*
  - path: /events # {API}/render/events
    method: get
    handler: events.get # 发布活动
    emit: true # 是否为 event-based 模式
  - path: /events/{id} # {API}/render/events/{id}
    method: get
    handler: events.get.id
```

如上方例子，当请求 `{API}/render/events` 时，会触发 `events.get` 事件，由于 `emit` 为 true，因此 Gateway 会触发 `events.get` 事件，而不会开始监听 `.reply` 事件。

但是下方的 `events.get.id` 事件，由于 `emit` 为 undefined，因此 Gateway 会同时监听 `events.get.id` 和 `events.get.id.reply` 事件，如果你的服务没有返回响应，那么 Gateway 会在 5 秒后返回一个超时的响应。

## 注意事项

注意的是：一个事件只能由一个服务受理，否则则会出现冲突情况。别问我问什么，问就是写的时候卡这个问题了。但是一个事件（Event-based）可以调度到多个方法

> You can register multiple event handlers for a single event pattern and all of them will be automatically triggered in parallel. -- [NestJS Documentaion](https://docs.nestjs.com/microservices/basics)

因此，在编码的时候，不要与现有的服务监听的事件冲突，否则会出现不可预知的情况。