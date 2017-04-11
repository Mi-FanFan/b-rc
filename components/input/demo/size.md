---
order: 1
title: 三种尺寸
---

我们为`<Input />` 输入框定义了三种尺寸(大，默认、小)，高度分别是 `32px` 、`28px` 、`22px`.


````jsx
import { Input } from 'b-rc';

ReactDOM.render(
  <div className="example-input">
    <Input size="large" placeholder="Large Size" />
    <Input  placeholder="Default Size" />
    <Input size="small" placeholder="Small Size" />
  </div>, mountNode);
````

````css
.example-input .mi-input{
  width:200px;
  margin:0 8px 8px 0;
}

````
