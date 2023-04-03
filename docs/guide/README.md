### 介绍

一个简易签名组件，基于vue3和canvas。

### 安装

```shell
npm i @sangtian152/vue3-sign -S
# or 
yarn add @sangtian152/vue3-sign
```

### 引入

在 main.js 中写入以下内容：

```javascript
import { createApp } from 'vue'
import vue3Sign from '@sangtian152/vue3-sign';
import "@sangtian152/vue3-sign/lib/vue3-sign.css";

const app = createApp(App)

app.use(vue3Sign)
app.mount('#app')
```

### 源码

[gitee地址](https://gitee.com/sangtian152/vue3-sign)

[github地址](https://github.com/sangtian152/vue3-sign)

### 最新版本

[![NPM version](https://img.shields.io/npm/v/vue3-sign)](https://www.npmjs.com/package/vue3-sign)
