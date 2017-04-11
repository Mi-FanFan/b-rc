---
category: Data Entry
title: Input输入框
---

Input输入框。

> 通过鼠标或键盘输入内容，是最基础的表单域的包装

## 何时使用

* 需要用户输入表单域内容时。
* 提供组合型输入框，带搜索的输入框，还可以进行大小选择

## API

### Input

| 参数      | 说明                                     | 类型       | 默认值 |
|-----------|-----------------------------------------|------------|-------|--------|
| type | 声明 input 类型，同原生 input 标签的 type 属性。 | string  | `text` |
| id | 输入框的 id | string | |
| value | 输入框内容 | string | |
| defaultValue | 输入框默认内容 | string | |
| size | 控件大小。注：标准表单内的输入框大小限制为 `large`。可选 `large` `default` `small` | string | `default` |
| disabled | 是否禁用状态，默认为 false | boolean | false |
| prefix | 带有前缀图标的 input | string\|ReactNode | |
| suffix | 带有后缀图标的 input | string\|ReactNode | |