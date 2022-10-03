/*
 * @FilePath: /mog-docs/.vitepress/theme/index.ts
 * @author: Wibus
 * @Date: 2022-09-09 23:13:45
 * @LastEditors: Wibus
 * @LastEditTime: 2022-10-03 18:33:17
 * Coding With IU
 */
import { h } from 'vue'
import Theme from 'vitepress/theme'

import '../style/main.css'
import '../style/vars.css'
import 'uno.css'
import HomePage from '../components/HomePage.vue'
// import { useRouter } from 'vitepress'
// import { createHead } from '@vueuse/head'

export default {
  ...Theme,
  Layout() {

    // const router = useRouter()

    // watch(
    //   () => router.route.data.relativePath,
    //   (path) => {
    //     if (import.meta.env.DEV) {
    //       return
    //     }
    //     ;(window as any).umami.trackView(path)
    //     ;(window as any).umami.trackEvent(router.route.data.title, 'view')
    //   },
    //   { immediate: true }
    // )

    return h(Theme.Layout, null, {
      'home-features-after': () => h(HomePage),
    })
  },
  // enhanceApp({ app }: { app: App }) {
  //   const head = createHead()
  //   app.use(head)
  // },
}