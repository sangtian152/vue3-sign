// 核心插件
import corePlugin from './plugin/core'
// 组件
import Vue3Sign from './sign'
import type { App } from 'vue'

const components = [
  Vue3Sign
]

const install = function (app: App):void {
  components.forEach(component => {
    app.component(component.name, component)
  })
  app.use(corePlugin)
}

export { default as Vue3Sign } from './sign'
export default {
  install, Vue3Sign
}
