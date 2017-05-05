---
category: Data Entry
title: InputNumber数字输入框
---

InputNumber数字输入框。

> 通过鼠标或键盘，输入范围内的数值

## 何时使用

当需要获取标准数值时

## API

### InputNumber

| 成员        | 说明           | 类型               | 默认值       |
|-------------|----------------|--------------------|--------------|
| min     | 最小值   | number | -Infinity        |
| max     | 最大值       | number      | Infinity           |
| step     | 每次改变步数，可以为小数  | number\|string      |  1      |
| defaultValue     | 初始值       | number      |            |
| onChange     | 变化回调       | Function(value: number \| string) |            |
| disabled     | 禁用       | boolean      |      false      |
| name     | input的name       | string      |            |
