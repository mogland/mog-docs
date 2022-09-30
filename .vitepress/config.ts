/*
 * @FilePath: /mog-docs/.vitepress/config.ts
 * @author: Wibus
 * @Date: 2022-09-09 23:09:43
 * @LastEditors: Wibus
 * @LastEditTime: 2022-09-30 23:09:06
 * Coding With IU
 */

import { defineConfig } from 'vitepress'

import { teamMembers } from './contributors'

export default defineConfig({
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
  ],
  lastUpdated: true,
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },
  themeConfig: {
    logo: '/logo.svg',

    editLink: {
      pattern: 'https://github.com/mogland/mog-docs/tree/main/:path',
      text: '为此页提供修改建议',
    },

    socialLinks: [
      { icon: 'github', link: "https://github.com/mogland" },
    ],

    nav: [
      { text: '指南', link: '/guide/' },
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
            }
          ],
        },
      ]
    },

    footer: {
      message: 'Released under the AGPLv3 License.',
      copyright: 'Copyright © 2021-PRESENT Wibus and NEXT contributors',
    },
  },
})