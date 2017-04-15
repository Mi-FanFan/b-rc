---
order: 5
title: 迷你型
---

用在弹出框等较狭窄的容器内。


````jsx
import { Tabs } from 'b-rc';
const TabPane = Tabs.TabPane;

ReactDOM.render(
  <Tabs defaultActiveKey="2" size="small">
    <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
    <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
    <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
  </Tabs>
, mountNode);
````
