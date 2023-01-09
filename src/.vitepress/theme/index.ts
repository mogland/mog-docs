/*
 * @FilePath: /mog-docs/.vitepress/theme/index.ts
 * @author: Wibus
 * @Date: 2022-09-09 23:13:45
 * @LastEditors: Wibus
 * @LastEditTime: 2022-10-05 19:03:08
 * Coding With IU
 */
import { App, h } from 'vue'
import { VPTheme } from '@vue/theme'
import 'uno.css'
import '../style/main.css'
import '../style/vars.css'
// import HomePage from '../components/HomePage.vue'

// import { useRouter } from 'vitepress'
// import { createHead } from '@vueuse/head'

export default Object.assign({}, VPTheme, {
  Layout: () => {
    // @ts-ignore
    return h(VPTheme.Layout, null, {
      // banner: () => h(Banner),
    })
  },
  enhanceApp({ app }: { app: App }) {

  }
})