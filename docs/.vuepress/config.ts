import { mdPlugin } from './config/plugins'
import { path } from '@vuepress/utils'
// import type { UserConfig } from 'vitepress'
import { defaultTheme } from '@vuepress/theme-default'

const buildTransformers = () => {
    const transformer = () => {
      return {
        props: [],
        needRuntime: true,
      }
    }
  
    const transformers = {}
    const directives = [
      'infinite-scroll',
      'loading',
      'popover',
      'click-outside',
      'repeat-click',
      'trap-focus',
      'mousewheel',
      'resize',
    ]
    directives.forEach((k) => {
      transformers[k] = transformer
    })
  
    return transformers
  }

export const config = {
    // 站点配置
  lang: 'zh-CN',
  title: 'vue3-sign',
  base: '/vue3-sign/',
  dest: 'dist',
  description: '基于vue3.x的签名组件',
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentDir: './components'
      }
    ]
  ],
  // 主题和它的配置
  theme: defaultTheme({
      logo: 'https://vuejs.org/images/logo.png',
      
      sidebar: [
          {
              text: '介绍',
              link: '/guide/',
          },
          {
              text: '示例',
              link: '/demo/',
          },
          {
              text: '其他',
              link: '/other/',
          }
      ]
  }),
  alias: {
    '@': path.resolve(__dirname, '..', '../src'),
    '@docs': path.resolve(__dirname, './'),
    '@examples': path.resolve(__dirname, '../examples'),
    '@vue3-sign': path.resolve(__dirname, '..', '../'),

  },
  extendsMarkdown:(md: any) => mdPlugin(md),
  vue: {
    template: {
      ssr: true,
      compilerOptions: {
        directiveTransforms: buildTransformers(),
      },
    },
  }
}

export default config