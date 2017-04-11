---
title: 按钮类型
order: 0
---


按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。



````jsx
import { Button } from 'b-rc';

ReactDOM.render(
  <div>
    <Button type="primary" >立即夺宝</Button>
    <Button>Default</Button>
    <Button type="dashed">立即夺宝</Button>
    <Button type="ghost">立即夺宝</Button>
    <Button type="danger">Danger</Button> 
  </div>
, mountNode);
````