/*
 * @FilePath: /nx-docs-next/.vitepress/theme/pwa.ts
 * @author: Wibus
 * @Date: 2022-09-09 23:14:20
 * @LastEditors: Wibus
 * @LastEditTime: 2022-09-09 23:14:20
 * Coding With IU
 */
import { registerSW } from 'virtual:pwa-register'

registerSW({ immediate: true })