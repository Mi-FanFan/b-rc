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
        <span style={{display:'inline-block'}}>Tooltip will show when mouse enter.</span>
      </Tooltip>
      <br />
      <Tooltip title="danger Tooltip" place="left">
        <Button type="danger">Top</Button>
      </Tooltip>
    </div>
, mountNode);
````
