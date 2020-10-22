## 香菜 UI

详细内容请移步：[官方文档](https://evalllll.github.io/corianderUI-website/index.html#/)

### 介绍

香菜UI是一款基于 **Vue3** 和 **TypeScript** 开发的 **UI组件库**。

这款组件库其实是我为了学习 Vue3 和 TypeScript 而写的。

不建议您使用本库来进行生产，但是可以用来学习交流。

目前已有组件有（未来会添加更多组件）：
- Button 组件：[详细介绍](https://evalllll.github.io/corianderUI-website/index.html#/doc/button)
- Switch 组件：[详细介绍](https://evalllll.github.io/corianderUI-website/index.html#/doc/switch)
- Dialog 组件：[详细介绍](https://evalllll.github.io/corianderUI-website/index.html#/doc/dialog)
- Tabs 组件：[详细介绍](https://evalllll.github.io/corianderUI-website/index.html#/doc/tabs)

### 安装

#### yarn

```shell
yarn add coriander-ui@0.0.6
```

#### npm

```
npm install coriander-ui@0.0.6
```

### 快速上手

#### Vue 单文件代码示例

```html
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>

<script>
import {Button, Tabs, Switch, Dialog} from "coriander-ui"
import 'coriander-ui/dist/lib/coriander.esm.css'

export default {
  components: {Button}
}
</script>
```
