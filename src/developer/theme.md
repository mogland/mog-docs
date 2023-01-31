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
- **config.yaml**: 主题的配置文件，用于描述主题的配置项，如：头像源、评论系统等
- ~~**i18n.yaml**: 主题的国际化文件，用于描述主题的国际化信息 <Badge text="尚未实现" color="gray" small/>~~
- **assets**: 主题的静态资源文件，如：css、js、图片等
- ~~**plugins**: 主题的插件文件，用于注入方法到主题中，如：moment.js 等方法类库 <Badge text="尚未实现" color="gray" small/>~~
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
# name: Tiny # name 使用 package.json 中的值
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

- **name**: 配置展示名
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

- **slider**: 滑块

  ```yaml
  type: "slider"
  value: 50
  ```

传入的 data 为一个对象，对象中包含 value 一个必须的字段，要求 value 为数字。

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

## i18n 方案 <Badge text="尚未实现" color="gray" small/>

## 主题模板扩展 <Badge text="尚未实现" color="gray" small/>