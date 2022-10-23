/*
 * @FilePath: /mog-docs/src/.vitepress/config.ts
 * @author: Wibus
 * @Date: 2022-09-09 23:09:43
 * @LastEditors: Wibus
 * @LastEditTime: 2022-10-23 21:39:56
 * Coding With IU
 */


import type { Config } from '@vue/theme'
//@ts-ignore
import baseConfig from '@vue/theme/config'
import { defineConfigWithTheme } from 'vitepress'

import { teamMembers } from './contributors'
import { NavbarFix } from './plugins/navbar'

export default defineConfigWithTheme<Config>({
  extends: baseConfig,

  lang: "zh-CN",
  title: "Mog",
  description: "一款弹性的模块化 CMS 博客系统",
  head: [
    ['meta', { name: 'theme-color', content: '#729b1a' }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'alternate icon', href: '/favicon.ico', type: 'image/png', sizes: '16x16' }],
    ['meta', { name: 'author', content: `${teamMembers.map(c => c.name).join(', ')} and ${"Mog"} contributors` }],
    ['meta', { name: 'keywords', content: 'vitest, vite, test, coverage, snapshot, react, vue, preact, svelte, solid, lit, ruby, cypress, puppeteer, jsdom, happy-dom, test-runner, jest, typescript, esm, tinypool, tinyspy, c8, node' }],
    ['meta', { property: 'og:title', content: "Mog" }],
    ['meta', { property: 'og:description', content: "一款永向未来的 CMS 博客系统" }],
    ['meta', { property: 'og:url', content: "https://mog.js.org" }],
    ['meta', { property: 'og:image', content: "https://mog.js.org/logo.svg" }],
    ['meta', { name: 'twitter:title', content: "Mog" }],
    ['meta', { name: 'twitter:description', content: "一款永向未来的 CMS 博客系统" }],
    ['meta', { name: 'twitter:image', content: "https://mog.js.org/logo.svg" }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['link', { rel: 'mask-icon', href: '/logo.svg', color: '#ffffff' }],
    ['script', { async: "", defer: "", 'data-website-id': 'db355c05-e3d6-4e4c-a813-fccbc15e39b0', src: 'https://umami.iucky.cn/umami.js' }],
  ],
  lastUpdated: true,
  markdown: {
    config: (md) => {
      md.use(require('markdown-it-task-lists'))
    }
  },
  themeConfig: {

    editLink: {
      repo: 'mogland/mog-docs',
      text: '为此页提供修改建议',
    },

    socialLinks: [
      { icon: 'github', link: "https://github.com/mogland" },
    ],

    nav: [
      { text: '指南', link: '/guide/' },
      { text: '生态系统', items: [
        { text: '官方与社区', items: [
          { text: 'Awesome-Mog', link: 'https://github.com/mogland/awesome-mog' },
        ]},
        { text: '核心部分', items: [
          { text: 'Mog-Core', link: 'https://github.com/mogland/core' },
          { text: 'Mog-Console', link: 'https://github.com/mogland/console' },
        ]},
        { text: '评论组件', items: [
          { text: 'Mog-Comments-WC', link: 'https://github.com/mogland/mog-comments-wc' },
          { text: 'Mog-Comments-React', link: 'https://github.com/mogland/mog-comments-react' },
        ]},
        { text: '前端程序', items: [
          { text: 'Mog-Theme-Tiny', link: 'https://github.com/mogland/mog-theme-tiny' },
          { text: 'Mog-Theme-Single', link: 'https://github.com/mogland/mog-theme-Single' },
        ]},
        
      ]},
      {
        text: '关于',
        items: [  
          { text: '常见问题', link: '/about/faq' },
          { text: 'RoadMap', link: '/about/roadmap' },
          { text: '版本发布', link: '/about/releases' },
          { text: '行为准则', link: '/about/code-of-conduct' },
        ]
      }
    ],

    sidebar: {
      '/': [
        {
          text: '指南',
          items: [
            {
              text: "简介",
              link: '/guide/why',
            },
            {
              text: '快速起步',
              link: '/guide/',
            },
            {
              text: '主要功能',
              link: '/guide/features',
            },
            {
              text: '跟其他的博客系统进行对比',
              link: '/guide/compare',
            }
          ],
        },
        {
          text: '进阶安装',
          items: [
            {
              text: '自定义配置 Mog Core',
              link: '/install/',
            },
            {
              text: '自主构建',
              link: '/install/build',
            }
          ],
        },
        {
          text: '迁移指南',
          items: [
            {
              text: '升级版本',
              link: '/migrate/',
            },
            {
              text: '从其他博客系统迁移',
              link: '/migrate/from-other',  
            },
          ]
        },
        {
          text: '配置',
          items: [
            {
              text: '配置索引',
              link: '/config/',
            },
          ],
        }
      ]
    },

    footer: {
      license: {
        text: 'AGPLv3 License',
        link: 'https://www.gnu.org/licenses/agpl-3.0.html',
      },
      copyright: 'Copyright © 2021-PRESENT Wibus and Mog contributors',
    },
  },

  vite: {
    plugins: [
      NavbarFix(),
    ]
  }
})