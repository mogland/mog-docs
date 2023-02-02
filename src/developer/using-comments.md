# 在其他地方使用评论组件

Mog 评论服务的设计初衷是为了让用户可以在自己的网站上使用评论功能，但是也可以在其他更多的地方使用。因此它更像是一个独立的评论系统，而不是一个专属于 Mog 的内部组件。

多亏于 Mog 评论服务的设计，它可以在任何地方使用，只要你能够在你的网站上嵌入一个 HTML 组件即可。

## 变量解释

::: tip 如何获取 API 地址
一般情况下，在生产环境中，API 地址被设计为 `[protocol]://[domain]/api`，例如 `https://api.mog.land/api`。

在开发环境中，API 地址被设计为 `[protocol]://[domain]`.
:::

- `api`：API 的地址，例如 `https://api.mog.land/api`。
- `pid`：页面的唯一 ID，例如 `https://mog.land/developer/using-comments` 的 ID 就可以是 `developer/using-comments`。在 Mog 中，你可以使用 文章的 Object ID 作为页面的唯一 ID。


## 在你的网站上使用

### 本地引入

1. 从 [Release](https://github.com/mogland/mog-comments-wc/releases) 页面下载最新的 `mog-comments-wc.js` 文件，放到 `assets/js` 文件夹下。
2. 在主题模板中引入 `mog-comments-wc.js` 文件。

```html
<script src="/raw/js/mog-comments-wc.js"></script>
```

3. 在主题模板合适的地方中添加评论组件。

```html
<mog-comments api="[API 地址]" pid="[页面的唯一ID]"></mog-comments>
```

### CDN 引入

1. 在主题模板中引入 `mog-comments-wc.js` 文件。

```html
<script src="https://cdn.jsdelivr.net/gh/mogland/mog-comments-wc/dist/mog-comments-wc.js"></script>
```

2. 在主题模板合适的地方中添加评论组件。

```html
<mog-comments api="[API Gateway 地址]" pid="[页面的唯一ID]"></mog-comments>
```