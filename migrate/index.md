---
title: 升级版本 | 迁移指南
---

# 升级版本

## 从 Mog v1 升级到 Mog v2 <Badge text="No Release" color="gray" />

v1 至 v2 的技术栈改动不是很大，仍然沿用的是 v1 的技术栈，但是 v2 对数据模型有一些重大的改动，其中有部分是修复了 v1 的一些设计缺陷导致的严重问题。

你可以通过以下方式升级到 v2：

- 前往 Console，前往「导入与备份」页面，点击「导出 MnogoDB 数据」，下载数据备份文件，再点击「导出 Markdown 数据」，下载 Markdown 数据备份文件
- 前往命令行，使用 MongoDB 的 `mongodump` 命令导出数据备份文件

```bash
# 假设 MongoDB 的数据存储在 /data/db 目录下
mongodump --db mog --out /data/db/mog
```

:::warning 注意
导出的数据备份文件需要保证在导入之前不要被修改，否则可能会导致数据丢失

直接使用 `mongodump` 导出的数据备份文件可能在 v2 导入时会无法使用，需要使用 `mongorestore` 命令进行转换，或只使用 Markdown 数据备份文件进行导入

```bash
mongorestore --db mog --dir /data/db/mog
```
:::

## 从 Mog v0 升级到 Mog v1

问题是这样的，v0 我们使用的是 MySQL 作为数据库，而 v1 我们使用的是 MongoDB，其中使用了很多 MongoDB 的特性，因此无法直接升级。

目前只有一个可行的方案，就是将 v0 的文章页面数据导出，然后导入到 v1 中，v0 和 v1 在处理文章页面数据的方式是一致的，因此可以直接导入。

::: warning 注意
由于 v0 是 Beta 版本，充满了不确定性，因此我们无法保证导出的数据能够完全正确导入到 v1 中，因此我们建议你在导入之前先备份好 v1 的数据库。
:::