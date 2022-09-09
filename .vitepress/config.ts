/*
 * @FilePath: /nx-docs-next/.vitepress/config.ts
 * @author: Wibus
 * @Date: 2022-09-09 23:09:43
 * @LastEditors: Wibus
 * @LastEditTime: 2022-09-10 00:16:20
 * Coding With IU
 */

import { defineConfig } from 'vitepress'

import { teamMembers } from './contributors'

export default defineConfig({
  lang: "zh-CN",
  title: "NEXT Space",
  description: "一款永向未来的 CMS 博客系统",
  head: [
    ['meta', { name: 'theme-color', content: '#729b1a' }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'alternate icon', href: '/favicon.ico', type: 'image/png', sizes: '16x16' }],
    ['meta', { name: 'author', content: `${teamMembers.map(c => c.name).join(', ')} and ${"NEXT Space"} contributors` }],
    ['meta', { name: 'keywords', content: 'vitest, vite, test, coverage, snapshot, react, vue, preact, svelte, solid, lit, ruby, cypress, puppeteer, jsdom, happy-dom, test-runner, jest, typescript, esm, tinypool, tinyspy, c8, node' }],
    ['meta', { property: 'og:title', content: "NEXT Space" }],
    ['meta', { property: 'og:description', content: "一款永向未来的 CMS 博客系统" }],
    ['meta', { property: 'og:url', content: "https://nx.js.org" }],
    // ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { name: 'twitter:title', content: "NEXT Space" }],
    ['meta', { name: 'twitter:description', content: "一款永向未来的 CMS 博客系统" }],
    // ['meta', { name: 'twitter:image', content: ogImage }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['link', { rel: 'mask-icon', href: '/logo.svg', color: '#ffffff' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' }],
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
      pattern: 'https://github.com/vitest-dev/vitest/tree/main/docs/:path',
      text: 'Suggest changes to this page',
    },

    socialLinks: [
      { icon: 'github', link: "https://github.com/nx-space" },
    ],

    sidebar: {
      '/': [
        {
          text: '指南',
          items: [
            {
              text: "简介",
              link: '/guide/why',
            }
          ],
        }
      ]
    },

    footer: {
      message: 'Released under the AGPLv3 License.',
      copyright: 'Copyright © 2021-PRESENT Wibus and NEXT contributors',
    },
  },
})