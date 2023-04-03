import { defineClientConfig } from '@vuepress/client'
import DemoBlock from '@docs/components/demo-block.vue'
import Demo from '@docs/page/index.vue'
import Vue3Sign from '@vue3-sign'
import { ElMessage } from 'element-plus'

import '@docs/theme'
import '@/styles/index.scss'
export default defineClientConfig({
    enhance({ app }) {
      console.log(Vue3Sign)
        app.config.globalProperties.$message = ElMessage
        app.component('DemoBlock', DemoBlock)
        app.component('Demo', Demo)
        app.use(Vue3Sign)
    },
    setup() {},
    rootComponents: [],
  })