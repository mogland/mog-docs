---
title: 从其他博客系统迁移 | 迁移指南
---

# 从其他博客系统迁移

## 使用 Markdown 迁移 {#markdown}

::: warning
你的 Markdown 文件必须要携带 YAML Front Matter，并且最好是符合 [CommonMark](https://commonmark.org/) 规范的，否则可能会出现一些问题。
:::

如果你的博客系统支持 Markdown，那么你可以直接将你的博客内容导出为 Markdown 文件，然后在 Mog 后台的迁移页面，导入这些 Markdown 文件。

## 从 Typecho 迁移 {#typecho}

1. 下载 Typecho 数据导出插件 [MogRun-Typecho <Badge text="WIP" color="gray" /> ](#typecho) 插件，安装并启用。
2. 在后台的插件管理页面，点击 MogRun 插件的设置按钮，选择你要导出的内容，点击导出按钮。
3. 下载导出的 zip 文件，解压后，将其中的 `data.json` 文件放入 Mog 后台的迁移页面，点击导入按钮。
4. 等待导入完成，即可完成迁移。

## 从 WordPress 迁移 {#wordpress}

1. 下载 WordPress 数据导出插件 [MogRun-WordPress <Badge text="WIP" color="gray" /> ](#wordpress) 插件，安装并启用。
2. 在后台的插件管理页面，点击 MogRun 插件的设置按钮，选择你要导出的内容，点击导出按钮。
3. 下载导出的 zip 文件，解压后，将其中的 `data.json` 文件放入 Mog 后台的迁移页面，点击导入按钮。
4. 等待导入完成，即可完成迁移。

## 从 Ghost 迁移 {#ghost}

1. 下载 Ghost 数据导出插件 [MogRun-Ghost <Badge text="WIP" color="gray" /> ](#ghost) 插件，安装并启用。
2. 在后台的插件管理页面，点击 MogRun 插件的设置按钮，选择你要导出的内容，点击导出按钮。
3. 下载导出的 zip 文件，解压后，将其中的 `data.json` 文件放入 Mog 后台的迁移页面，点击导入按钮。
4. 等待导入完成，即可完成迁移。

## 从 Hexo 迁移 {#hexo}

因为 Hexo 为静态博客，其文件使用的是 Markdown + YAML Front Matter 的格式，所以你可以直接将 Hexo 的博客文件导入到 Mog 中。

1. 打包 Hexo 的博客文章 Markdown 文件，将其放入 Mog 后台的迁移页面，点击导入按钮。

## 从 Jekyll 迁移 {#jekyll}

因为 Jekyll 为静态博客，其文件使用的是 Markdown + YAML Front Matter 的格式，所以你可以直接将 Jekyll 的博客文件导入到 Mog 中。

1. 打包 Jekyll 的博客文章 Markdown 文件，将其放入 Mog 后台的迁移页面，点击导入按钮。

## 从 Hugo 迁移 {#hugo}

因为 Hugo 为静态博客，其文件使用的是 Markdown + YAML Front Matter 的格式，所以你可以直接将 Hugo 的博客文件导入到 Mog 中。

1. 打包 Hugo 的博客文章 Markdown 文件，将其放入 Mog 后台的迁移页面，点击导入按钮。