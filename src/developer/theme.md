# 开发新的主题


## 主题开发

::: warning 注意
创建主题时，需要在 `package.json` 中指定 `name` 字段、在 `config.yml` 中指定 `id` 字段和 `language` 字段，否则合法性检查会失败。

示例主题可以在此处找到：[mogland-dev/mog-theme-tiny-ejs](https://github.com/mogland-dev/mog-theme-tiny-ejs)
:::

1. 按照[主题目录结构](#主题目录结构)创建主题目录。
2. 开始开发主题，其中需要有 EJS 的基础语法知识，主题渲染中提供了一些变量，可以在 EJS 中使用，具体变量见 [变量](#变量)。
3. 在 `config.yml` 中指定主题的配置，具体配置见 [主题配置](#主题配置)。
4. 开发完成后，将主题上传至 GitHub，然后标注 `mog-theme` 标签，等待 [awesome-mog](https://github.com/mogland/awesome-mog) 更新完毕即可在主题市场中搜索到。

> 正常情况下最多在 3 小时后，你的项目将能出现在 Awesome List 和 Mog 主题市场中



## 主题目录结构

- **packages.json**: 主题的配置文件，类似于 npm 的 `packages.json`，用于描述主题的基本信息，如：主题名字、版本、作者、描述等
- **config.yaml**: 主题的配置文件，用于描述主题的配置项，如：头像源、评论系统等 - [#主题配置](#主题配置)
- **i18n.yaml**: 主题的国际化文件，用于描述主题的国际化信息 - [#i18n-方案](#i18n-方案)
- **assets**: 主题的静态资源文件，如：css、js、图片等 - [#主题静态资源](#主题静态资源)
- **plugins**: 主题的插件文件，用于注入方法到主题中，如：moment.js 等方法类库 - [#主题模板扩展](#主题模板扩展)
- **index.ejs**: 主页
- **post.ejs**: 文章页
- **page.ejs**: 页面页
- **archives.ejs**: 归档页,分类 & 标签页
- **friends.ejs**: 友链页
- **404.ejs**: 404页
- **page-\*.ejs**: 自定义页面，如：关于页 等, `*` 为自定义的页面路径
- **preview.png**: 主题预览图

## 主题配置

我们考虑使用 YAML 定义主题配置

```yaml
id: "theme.tiny.wibus-wee"
language: zh # 语言, 要与 i18n.yaml 中设置的语言一致
configs:
  - name: "头像源"
    key: "avatar_source" 
    # key is optional, if not set, it will be the same as name
    # But I recommend you to set it if your name contains special characters or use Chinese
    type: "select"
    data:
      - name: "Gravatar"
        # key: "Gravatar"
        value: "https://cn.gravatar.com/avatar/"
      - name: "国内源"
        key: "China"
        value: "https://cdn.v2ex.com/gravatar/"
    value: "Gravatar"
```

- **id**: 主题的唯一标识，格式建议为 `theme.{name}.{author}`
- **language**: 主题的语言，要与 i18n.yaml 中设置的语言匹配
- **key**: 配置储存名（取值的时候使用此名）

key 是可选的，如果不去设置就与 name 是一样的。但是当 name 中涉及到一些特殊符号或者涉及中文字符的时候，强制需要填入 key

- **type**: 配置组件
- **data**: 传入配置组件的值（内部的定义与上方相似）
- **value**: 默认值，会传入配置组件，可选


## 配置组件

所有的 key 一般情况下除特殊要求，皆为可选字段，如果不设置 key 就与 name 一样。但是当 name 中涉及到一些特殊符号或者涉及中文字符的时候，**强制需要填入 key。**

- **input**: 输入框

  ```yaml
  type: "input"
  value: "https://cn.gravatar.com/avatar/"
  ```

传入的 data 为一个对象，对象中包含 value 一个必须的字段，key 为可选字段，如果不设置 key 就与 name 一样。

- **switch**: 开关

  ```yaml
  type: "switch"
  value: true
  ```

传入的 data 为一个对象，对象中包含 value 一个必须的字段，要求 value 为布尔值。

- **color**: 颜色选择器

  ```yaml
  type: "color"
  value: "#000000"
  ```

传入的 data 为一个对象，对象中包含 value 一个必须的字段，要求 value 为颜色值。

- **radio**: 单选框

  ```yaml
  type: "radio"
  data:
    - name: "Gravatar"
      value: "https://cn.gravatar.com/avatar/"
    - name: "国内源"
      key: "China"
      value: "https://cdn.v2ex.com/gravatar/"
  value: "Gravatar"
  ```

传入的 data 为一个数组，数组中的每一项都是一个对象，对象中包含 name, value 两个必须的字段。key 为可选字段，如果不设置 key 就与 name 一样。

value 为传入的值，value 会传入配置组件，需要与 data 中的 key 对应。

- **checkbox**: 多选框

  ```yaml
  type: "checkbox"
  data:
    - name: "Gravatar"
      value: "https://cn.gravatar.com/avatar/"
    - name: "国内源"
      key: "China"
      value: "https://cdn.v2ex.com/gravatar/"
  value: "Gravatar"
  ```

传入的 data 为一个数组，数组中的每一项都是一个对象，对象中包含 name, value 两个必须的字段。key 为可选字段，如果不设置 key 就与 name 一样。

value 为传入的值，value 会传入配置组件，需要与 data 中的 key 对应。

- **textarea**: 多行文本框

  ```yaml
  type: "textarea"
  value: "https://cn.gravatar.com/avatar/"
  ```

传入的 data 为一个对象，对象中包含 value 一个必须的字段，key 为可选字段，如果不设置 key 就与 name 一样。

- **select**: 下拉选择框

  ```yaml
  type: "select"
  data:
    - name: "Gravatar"
      value: "https://cn.gravatar.com/avatar/"
    - name: "国内源"
      key: "China"
      value: "https://cdn.v2ex.com/gravatar/"
  value: "Gravatar"
  ```

传入的 data 为一个数组，数组中的每一项都是一个对象，对象中包含 name, value 两个必须的字段。key 为可选字段，如果不设置 key 就与 name 一样。

value 为传入的值，value 会传入配置组件，需要与 data 中的 key 对应。


## 变量

### 全局变量

```ts
{
  site: any, // 见 「网站变量」
  page: any, // 见 「页面变量」
  config: ConfigInterface, // 见 「ConfigInterface」- https://github.com/mogland/core/blob/main/libs/config/src/config.interface.ts#L14-L30
  theme: any, // 主题配置文件
  path: string, // 当前页面的路径（不含根路径）
  url: any, // 见 「URL变量」
}
```

### 网站变量

```ts
{
  posts: PostModel[], // 文章列表
  pages: PageModel[], // 分页列表
  categories: CategoryModel[], // 分类列表
  tags: { // 标签列表
    count: number, // 标签数量
    name: string, // 标签名
  }[],
}
```

### 页面变量

**页面（`page`）**: [`PageModel`](https://github.com/mogland/core/blob/main/apps/page-service/src/model/page.model.ts) - 不会输出 `password` 等隐私字段

**文章 (`post`)**: [`PostModel`](https://github.com/mogland/core/blob/main/apps/page-service/src/model/post.model.ts) - 不会输出 `password` 等隐私字段

**首页（`index`）**

```ts
{
  docs: PostModel[], // 文章列表
  totalDocs: number, // 文章总数
  limit: number, // 每页文章数
  totalPages: number, // 总页数
  page: number, // 当前页
  hasPrevPage: boolean, // 是否有上一页
  hasNextPage: boolean, // 是否有下一页
  prevPage: number | null, // 上一页页码
  nextPage: number | null, // 下一页页码
}
```

**分类 (`category`)** ：[`CategoryModel`](https://github.com/mogland/core/blob/main/apps/page-service/src/model/category.model.ts)

```ts
data: {
  [key in keyof CategoryModel]: CategoryModel[key]; // 继承自 CategoryModel 的字段
  children: PostModel[], // 文章列表
},
isTag: false, // 是否是标签页
isCategory: true, // 是否是分类或者标签页
```

**标签 (`tag`)**

```ts
data: {
  name: string, // 标签名
  children: PostModel[], // 文章列表
},
isTag: true, // 是否是标签页
isCategory: true, // 是否是分类或者标签页
```

**归档 (`archives`)**

```ts
data: {
  children: PostModel[], // 文章列表
},
isCategory: false, // 是否是分类或者标签页
```

**友链 (`friends`)** ：`FriendsModel`

### URL变量

```ts
{
  url: string, // 完整的链接
  path: string, // 路径
  query: object, // 查询参数
  params: object, // 路径参数
  origin: string, // 域名: protocol + host
  host: string, // 域名: host
  protocol: string, // 协议
}
```


## i18n 方案

我们可以使用内置函数 `_i(<key>)` ，这个函数可以根据传入的 key 来获取对应的 value。

### 定义 i18n key

我们使用 yaml 文件来定义 i18n，在主题根目录创建 `i18n.yaml`，并定义 key。

```yaml
en: # 语言
  hello: 'Hello' # key
  world: 'World'
zh:
  hello: '你好'
  world: '世界'
```

按照上面的定义，我们可以通过 `_i('hello')` 来获取对应的 value。当无法找到对应的 key 时，会返回 key 本身。

```html
<%- _i('hello') %> <%- _i('world') %>
<!-- zh：你好 世界 -->
<!-- en：Hello World -->
```


## 主题模板扩展

如果你想在主题模板中使用函数输出某些东西，你可以通过「扩展」来实现这个功能。

在 `plugins` 文件夹下创建一个 js 文件，然后在该文件中使用 `module.exports` 导出一个对象，对象中包含一个 `name` 属性，用于定义插件名称，以及其他函数，用于在主题模板中调用。


### 定义主题模板扩展插件

我们将会遍历 `plugins` 文件夹下的所有文件，将其作为主题模板扩展插件，将其挂载到主题模板中。

比如说，我们创建一个 `time.js` 文件，用于输出当前时间。

```js
// plugins/time.js
module.exports = {
  name: 'time',
  time: () => {
    return new Date().toLocaleString()
  },
}
```

在主题模板中，我们可以通过 `time()` 来调用 `time.js` 中定义的 `time` 函数。

```html
<%- time() %>
```

在函数内，你依然可以使用 [变量](#变量) 中定义的变量。

### 例子：在头部输出 OpenGrraph 标签

```js
module.exports = {
  name: 'opengraph', // 插件名称
  opengraph: function () {
    const siteName = config.seo.title; // 网站名称
    const siteDescription = config.seo.description; // 网站描述
    const isArticle = page.title ? true : false; // 是否是文章页(有 title)
    const title = isArticle ? page.title : siteName; // 标题
    const summary = isArticle ? 
    page.summary ? page.summary : page.text.substring(0, 100) 
    : siteDescription; // 描述，文章页取文章描述，首页取网站描述
    const image = page.image ? page?.image[0].url : config.user.avatar; // 图片，文章页取文章图片，首页取网站头像
    const _url = url.url; // 当前页面链接
    const type = isArticle ? 'article' : 'website'; // 类型，文章页为 article，首页为 website
    return ` // 返回 OpenGrraph 标签
      <meta property="og:title" content="${title}" />
      <meta property="og:type" content="${type}" />
      <meta property="og:url" content="${_url}" />
      <meta property="og:image" content="${image}" />
      <meta property="og:site_name" content="${siteName}" />
      <meta property="og:description" content="${summary}" />
    `
  },
}
```

在主题模板中，我们可以通过 `opengraph()` 来调用 `opengraph.js` 中定义的 `opengraph` 函数。

```html
<%- opengraph() %>
```

## 主题静态资源

如果你想在主题中使用静态资源，你可以将静态资源放在 `assets` 文件夹下，然后在主题模板中请求 `/raw/assets/*` 来获取静态资源。

```html
<link rel="stylesheet" href="/raw/assets/css/style.css">
```

需要注意的是，以下文件可以直接访问，无需通过 `/raw/*` 来访问：

- `assets/favicon.*`
- `assets/robots.txt`
- `./favicon.*`
- `./robots.txt`

```html
<link rel="icon" href="/raw/assets/favicon.ico">
<!-- 可以变成 -->
<link rel="icon" href="/favicon.ico">
```

也就是说，如果你想要获取 ejs 等源文件，你可以通过 `/raw/*` 来获取：

## 主题评论组件

以 [mog-comments-wc](https://github.com/mogland/mog-comments-wc) 为例，我们可以使用它在主题中实现评论功能。

### 本地引入

1. 从 [Release](https://github.com/mogland/mog-comments-wc/releases) 页面下载最新的 `mog-comments-wc.js` 文件，放到 `assets/js` 文件夹下。
2. 在主题模板中引入 `mog-comments-wc.js` 文件。

```html
<script src="/raw/js/mog-comments-wc.js"></script>
```

3. 在主题模板合适的地方中添加评论组件。

```html
<mog-comments api="<%= config.serverUrl %>" pid="<%= page.id %>"></mog-comments>
```

### CDN 引入

1. 在主题模板中引入 `mog-comments-wc.js` 文件。

```html
<script src="https://cdn.jsdelivr.net/gh/mogland/mog-comments-wc/dist/mog-comments-wc.js"></script>
```

2. 在主题模板合适的地方中添加评论组件。

```html
<mog-comments api="<%= config.serverUrl %>" pid="<%= page.id %>"></mog-comments>
```