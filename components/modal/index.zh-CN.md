---
type: Feedback
category: Components
subtitle: 对话框
title: Modal
---

模态对话框。

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 `Modal` 在当前页面正中打开一个浮层，承载相应的操作。

另外当需要一个简洁的确认框询问用户时，可以使用精心封装好的 `ant.Modal.confirm()` 等方法。

## API

| 参数       | 说明           | 类型             | 默认值       |
|------------|----------------|------------------|--------------|
| visible    | 对话框是否可见 | Boolean          | 无           |
| title      | 标题           | React.Element    | 无           |
| closable   | 是否显示右上角的关闭按钮 | Boolean    | true        |
| onOk       | 点击确定回调       | function     | 无           |
| onCancel   | 点击遮罩层或右上角叉或取消按钮的回调  | function(e)  | 无         |
| width      | 宽度           | String or Number | 520           |
| footer     | 底部内容       | React.Element    | 确定取消按钮 |
| okText     | 确认按钮文字    | String           | 确定       |
| cancelText | 取消按钮文字    | String           | 取消       |
| maskClosable | 点击蒙层是否允许关闭 | Boolean   | true       |
| style | 可用于设置浮层的样式，调整浮层位置等 | Object   | - |
| wrapClassName | 对话框外层容器的类名 | String   | - |

