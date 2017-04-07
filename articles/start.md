---
category: Article
title: 快速开始
order: 1
---

> b-rc 是一个基于 React 封装的组件库


## 特性

- 基于Ant Design为MIFanFan 精心封装的高质量 UI 组件。
- 基于 npm + webpack + babel 的工作流，支持 ES2015。

## 安装

```bash
$ npm install b-rc --save
```
```bash
$ yarn add b-rc
```
## 示例

```jsx
import { Button } from 'b-rc';
ReactDOM.render(<Button />, mountNode);
```

引入样式：

```jsx
import 'b-rc/dist/b-rc.css'; 
```

以下两种方法都可以达到按需加载的目的：

- `import Button from 'b-rc/lib/button'`
- 配合插件 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 使用 `import { Button } from 'b-rc';`

> babel-plugin-import 支持 js 和 css 同时按需加载。


## 浏览器支持

现代浏览器和 IE9 及以上。

> [IE8 issues](https://github.com/xcatliu/react-ie8)
