---
category: Data Display
title: Tooltip
---

简单的文字提示气泡框。

## 何时使用

鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。

可用来代替系统默认的 `title` 提示，提供一个`按钮/文字/操作`的文案解释。

## API

| 参数      | 说明                                     | 类型       | 默认值 |
|-----------|------------------------------------------|------------|--------|
| title     | 提示文字                                 | React.ReactNode | 无     |
| place | 气泡框位置，可选 `top` `left` `right` `bottom`  | string     | top    |
| effect | 气泡框是否跟随鼠标，可选 `float` `solid`  | string     | solid    |
| type | 气泡框主题类型，可选 `success` `warning` `error` `info` `light` `dark`  | string     | dark    |
*** | trigger   | 触发行为，可选 `hover/focus/click`       | string        | hover  | *** 
| extraClass | 自定义样式                            | string | 无     |

## 注意

请确保 `Tooltip` 的子元素能接受 `onMouseEnter`、`onMouseLeave`、`onFocus`、`onClick` 事件。
