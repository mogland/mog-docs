/*
 * @FilePath: /nx-docs-next/global.d.ts
 * @author: Wibus
 * @Date: 2022-09-09 23:18:17
 * @LastEditors: Wibus
 * @LastEditTime: 2022-09-09 23:18:17
 * Coding With IU
 */
declare module '*.vue' {
  import { App, defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent> & {
    install(app: App): void
  }
  export default component
}