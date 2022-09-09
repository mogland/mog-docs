# NEXT Space Documentation

## Contributing 贡献

这个站点使用的是 Vitepress. 站点内容使用 Markdown 编写，文件都在 `docs` 文件夹中. 如果只有一些简单的修改，你可以直接在 GitHub 网页端进行修改并新建一个 Pull Request.

在本地开发中，[pnpm](https://pnpm.io/) 被选用为项目的包管理器，你需要使用pnpm安装依赖：

```bash
pnpm i
pnpm run start
pnpm run build
pnpm run serve
```

**请注意！请务必在修改后使用 `build` 和 `serve` 查看构建产物是否正常输出！**

## Working on the content 修改文字

- 关于支持的 Markdown 扩展和在 Markdown 内部使用 Vue 语法的能力，请参阅 Vitepress 文档
- 有关编写和维护文档内容的规则和建议，请参阅编写指南。

## Guide 编写指南

**<u>编写内容的时候需要注意的事情</u>**：

1. 中文与英文之间请保留一个空格，如`测试 test 测试`