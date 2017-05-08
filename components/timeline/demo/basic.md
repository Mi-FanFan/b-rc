---
order: 0
title: 基本用法
---

基本的时间轴。


````jsx
import { Timeline } from 'b-rc';

ReactDOM.render(
  <Timeline>
    <Timeline.Item time="2015-09-01 21:52:01">Create a services site </Timeline.Item>
    <Timeline.Item time="2015-08-01 21:52:01">Solve initial network problems </Timeline.Item>
    <Timeline.Item time="2015-07-01 21:52:01">Technical testing </Timeline.Item>
    <Timeline.Item time="2015-06-01 21:52:01">Network problems being solved </Timeline.Item>
  </Timeline>
, mountNode);
````
