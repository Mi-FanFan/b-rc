---
order: 7
title: 响应式布局
---


参照 Bootstrap 的 [响应式设计](http://getbootstrap.com/css/#grid-media-queries)，预设五个响应尺寸：`xs` `sm` `md` `lg` `xl`。

````jsx
import { Row, Col } from 'b-rc';

ReactDOM.render(
  <Row>
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>Col</Col>
    <Col xs={20} sm={16} md={12} lg={8} xl={4}>Col</Col>
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>Col</Col>
  </Row>
, mountNode);
````
