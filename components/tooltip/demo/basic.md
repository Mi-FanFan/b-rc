---
order: 0
title: 基本
---

最简单的用法。

````jsx
import { Tooltip, Button } from 'b-rc';

ReactDOM.render(
    <div className="toaster">
      <Tooltip title="Default Tooltip">
        <Button type="primary">Top</Button>
        <span>Tooltip will show when mouse enter.</span>
      </Tooltip>
      <Tooltip title="danger Tooltip" place="left">
        <Button type="danger">Top</Button>
      </Tooltip>
    </div>
, mountNode);
````
