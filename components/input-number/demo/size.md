---
order: 1
title: 三种尺寸
---

我们为`<InputNumber />` 输入框定义了三种尺寸(大，默认、小)，高度分别是 `32px` 、`28px` 、`22px`.


````jsx
import { InputNumber } from 'b-rc';

function onChange(value) {
  console.log('changed', value);
}

ReactDOM.render(
  <div>
    <InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={onChange} />
    <InputNumber min={1} max={100000} defaultValue={3} onChange={onChange} />
    <InputNumber size="small" min={1} max={100000} defaultValue={3} onChange={onChange} />
  </div>
, mountNode);
````

````css
.mff-input-number {
  margin-right: 10px;
}
````
