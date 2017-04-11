---
title: 图标按钮
order: 2
---

按钮有大、中、小三种尺寸。

通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。


````jsx
import { Button,Icon } from 'b-rc';

import { Radio  } from 'antd';

class ButtonSize extends React.Component {
  state = {
    size: 'default',
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  render() {
    const size = this.state.size;
    return (
      <div>
        <Button type="primary" size="large" >立即夺宝</Button>
        <Button type="ghost" size="large" >立即夺宝</Button>
        <Button type="dashed" size="large" >立即夺宝</Button>
        <Button type="primary" size="small" >立即夺宝</Button>
        <Button type="ghost" size="small" >立即夺宝</Button>
        <Button type="dashed" size="small" >立即夺宝</Button>
        <br />
      </div>
    );
  }
}

ReactDOM.render(<ButtonSize />, mountNode);
````