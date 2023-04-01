/*
 * @FilePath: /mog-docs/src/.vitepress/config.ts
 * @author: Wibus
 * @Date: 2022-09-09 23:09:43
 * @LastEditors: Wibus
 * @LastEditTime: 2022-10-23 21:39:56
 * Coding With IU
 */

import type { Config } from "@vue/theme";
import Components from "unplugin-vue-components/vite";
import { SearchPlugin } from "vitepress-plugin-search";
import flexSearchIndexOptions from "flexsearch";
import Unocss from "unocss/vite";
import { presetAttributify, presetIcons, presetUno } from "unocss";
import type { Plugin } from "vite";
//@ts-ignore
import baseConfig from "@vue/theme/config";
import { defineConfigWithTheme } from "vitepress";
import { teamMembers } from "./contributors";
import { NavbarFix } from "./plugins/navbar";

const Segment = require("segment");
const segment = new Segment();
segment.useDefault();

export default defineConfigWithTheme<Config>({
  extends: baseConfig,

  lang: "zh-CN",
  title: "Mog",
  description: "一款弹性的模块化 CMS 博客系统",
  head: [
    ["meta", { name: "theme-color", content: "#729b1a" }],
    ["link", { rel: "icon", href: "/logo.svg", type: "image/svg+xml" }],
    [
      "link",
      {
        rel: "alternate icon",
        href: "/favicon.ico",
        type: "image/png",
        sizes: "16x16",
      },
    ],
    [
      "meta",
      {
        name: "author",
        content: `${teamMembers
          .map((c) => c.name)
          .join(", ")} and ${"Mog"} contributors`,
      },
    ],
    [
      "meta",
      {
        name: "keywords",
        content:
          "vitest, vite, test, coverage, snapshot, react, vue, preact, svelte, solid, lit, ruby, cypress, puppeteer, jsdom, happy-dom, test-runner, jest, typescript, esm, tinypool, tinyspy, c8, node",
      },
    ],
    ["meta", { property: "og:title", content: "Mog" }],
    [
      "meta",
      { property: "og:description", content: "一款弹性的模块化 CMS 博客系统" },
    ],
    ["meta", { property: "og:url", content: "https://mog.js.org" }],
    ["meta", { property: "og:image", content: "https://mog.js.org/logo.svg" }],
    ["meta", { name: "twitter:title", content: "Mog" }],
    [
      "meta",
      { name: "twitter:description", content: "一款弹性的模块化 CMS 博客系统" },
    ],
    ["meta", { name: "twitter:image", content: "https://repository-images.githubusercontent.com/410121979/404c046c-4d7e-49f7-9f68-d959b30a112e" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["link", { rel: "mask-icon", href: "/logo.svg", color: "#ffffff" }],
    [
      "script",
      {
        async: "",
        defer: "",
        "data-website-id": "db355c05-e3d6-4e4c-a813-fccbc15e39b0",
        src: "https://umami.iucky.cn/umami.js",
      },
    ],
  ],
  lastUpdated: true,
  markdown: {
    config: (md) => {
      md.use(require("markdown-it-task-lists"));
    },
    theme: {
      light: "vitesse-light",
      dark: "vitesse-dark",
    },
  },
  themeConfig: {
    editLink: {
      repo: "mogland/mog-docs",
      text: "为此页提供修改建议",
    },

    socialLinks: [{ icon: "github", link: "https://github.com/mogland" }],

    nav: [
      { text: "指南", link: "/guide/", activeMatch: "^/guide/" },
      { text: "进阶安装", link: "/install/", activeMatch: "^/install/" },
      { text: "迁移", link: "/migrate/", activeMatch: "^/migrate/" },
      { text: "配置", link: "/config/", activeMatch: "^/config/" },
      {
        text: "生态系统",
        items: [
          {
            text: "官方与社区",
            items: [
              {
                text: "Awesome-Mog",
                link: "https://github.com/mogland/awesome-mog",
              },
            ],
          },
          {
            text: "衍生组织",
            items: [
              { text: "Mog Dev", link: "https://github.com/mogland-dev" },
            ],
          },
          {
            text: "核心组件",
            items: [
              { text: "Mog-Core", link: "https://github.com/mogland/core" },
              {
                text: "Mog-Console",
                link: "https://github.com/mogland/console",
              },
              // { text: 'Mog-MNE', link: 'https://github.com/mogland/MNE' },
            ],
          },
        ],
      },
      {
        text: "关于",
        activeMatch: "^/about/",
        items: [
          { text: "常见问题", link: "/about/faq" },
          { text: "版本发布", link: "/about/releases" },
          { text: "行为准则", link: "/about/code-of-conduct" },
        ],
      },
    ],

    sidebar: {
      "/": [
        {
          text: "指南",
          items: [
            {
              text: "简介",
              link: "/guide/why",
            },
            {
              text: "快速起步",
              link: "/guide/",
            },
            {
              text: "主要功能",
              link: "/guide/features",
            },
          ],
        },
        {
          text: "进阶安装",
          items: [
            {
              text: "自定义配置 Mog Core",
              link: "/install/",
            },
            {
              text: "使用 node 命令启动",
              link: "/install/with-node",
            },
            {
              text: "自主构建",
              link: "/install/build",
            },
          ],
        },
        {
          text: "迁移指南",
          items: [
            {
              text: "升级版本",
              link: "/migrate/",
            },
            {
              text: "从其他博客系统迁移",
              link: "/migrate/from-other",
            },
          ],
        },
        {
          text: "配置",
          items: [
            {
              text: "配置索引",
              link: "/config/",
            },
          ],
        },
        {
          text: "使用指南",
          items: [
            {
              text: "使用内置控制台",
              link: "/usage/console",
            },
          ],
        },
        {
          text: "开发者",
          items: [
            {
              text: "拓展新的服务模块",
              link: "/developer/extend-service",
            },
            {
              text: "开发新的主题",
              link: "/developer/theme",
            },
            {
              text: "在其他地方使用评论组件",
              link: "/developer/using-comments",
            },
          ],
        },
      ],
    },

    footer: {
      license: {
        text: "AGPLv3 License",
        link: "https://www.gnu.org/licenses/agpl-3.0.html",
      },
      copyright: "Copyright © 2021-PRESENT Wibus and Mog contributors",
    },
  },

  vite: {
    build: {
      ssr: false,
    },
    plugins: [
      SearchPlugin({
        ...flexSearchIndexOptions,
        tokenize: "full",
        buttonLabel: "搜索",
        placeholder: "搜索文档",
      }),
      NavbarFix(),
      Components({
        include: [/\.vue/, /\.md/],
        dirs: ".vitepress/components",
        dts: ".vitepress/components.d.ts",
      }) as Plugin,
      Unocss({
        presets: [
          presetUno({
            dark: "class",
          }),
          presetAttributify(),
          presetIcons({
            scale: 1.2,
          }),
        ],
      }) as unknown as Plugin,
    ],
  },
});
