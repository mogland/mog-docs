/*
 * @FilePath: /nx-docs-next/vite.config.ts
 * @author: Wibus
 * @Date: 2022-09-09 23:22:14
 * @LastEditors: Wibus
 * @LastEditTime: 2022-09-09 23:31:57
 * Coding With IU
 */
import fs from 'fs'
import type { Plugin } from 'vite'
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'
import { resolve } from 'pathe'
import { VitePWA } from 'vite-plugin-pwa'
import fg from 'fast-glob'


export default defineConfig({
  ssr: {
    format: 'cjs',
  },
  legacy: {
    buildSsrCjsExternalHeuristics: true,
  },
  optimizeDeps: {
    // vitepress is aliased with replacement `join(DIST_CLIENT_PATH, '/index')`
    // This needs to be excluded from optimization
    exclude: ['vitepress'],
  },
  plugins: [
    // TODO remove cast when moved to Vite 3
    Components({
      include: [/\.vue/, /\.md/],
      dirs: '.vitepress/components',
      dts: '.vitepress/components.d.ts',
    }) as Plugin,
    Unocss({
      shortcuts: [
        ['btn', 'px-4 py-1 rounded inline-flex justify-center gap-2 text-white leading-30px children:mya !no-underline cursor-pointer disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
      ],
      presets: [
        presetUno({
          dark: 'media',
        }),
        presetAttributify(),
        presetIcons({
          scale: 1.2,
        }),
      ],
    }) as unknown as Plugin,
    IncludesPlugin(),
    VitePWA({
      outDir: '.vitepress/dist',
      registerType: 'autoUpdate',
      // include all static assets under public/
      includeAssets: fg.sync('**/*.{png,svg,ico,txt}', { cwd: resolve(__dirname, 'public') }),
      manifest: {
        id: '/',
        name: "Mog",
        short_name: "Mog",
        description: "一款永向未来的 CMS 博客系统",
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'logo.svg',
            sizes: '165x165',
            type: 'image/svg',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        navigateFallbackDenylist: [/^\/new$/],
        globPatterns: ['**/*.{css,js,html,woff2}'],
        
      },
    }),
  ],
})

function IncludesPlugin(): Plugin {
  return {
    name: 'include-plugin',
    enforce: 'pre',
    transform(code, id) {
      let changed = false
      code = code.replace(/\[@@include\]\((.*?)\)/, (_, url) => {
        changed = true
        const full = resolve(id, url)
        return fs.readFileSync(full, 'utf-8')
      })
      if (changed)
        return code
    },
  }
}