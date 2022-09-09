/*
 * @FilePath: /nx-docs-next/.vitepress/theme/index.ts
 * @author: Wibus
 * @Date: 2022-09-09 23:13:45
 * @LastEditors: Wibus
 * @LastEditTime: 2022-09-09 23:13:45
 * Coding With IU
 */
import { h } from 'vue'
import Theme from 'vitepress/theme'
import { inBrowser } from 'vitepress'
import '../style/main.css'
import '../style/vars.css'
import 'uno.css'
import HomePage from '../components/HomePage.vue'

if (inBrowser)
  import('./pwa')

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'home-features-after': () => h(HomePage),
    })
  },
}