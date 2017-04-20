---
order: 1
title: 位置
---

四个方向。

````jsx
import { Tooltip, Button } from 'b-rc';

ReactDOM.render(
    <div className="toaster">
        <Tooltip title="Top Tooltip">
            <Button type="primary">Top</Button>
        </Tooltip>
        <Tooltip title="Left Tooltip" place="left">
            <Button type="primary">Left</Button>
        </Tooltip>
        <Tooltip title="Right Tooltip" place="right">
          <Button type="primary">Right</Button>
        </Tooltip>
        <Tooltip title="Bottom Tooltip" place="bottom">
            <Button type="primary">Bottom</Button>
        </Tooltip>
    </div>
, mountNode);
````
