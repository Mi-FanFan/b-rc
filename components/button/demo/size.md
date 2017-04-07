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
        <Button type="primary" shape="circle" icon="download" size={size} />
        <Button type="primary" icon="download" size={size}>Download</Button>
        <Button type="primary" size={size}>Normal</Button>
        <br />
      </div>
    );
  }
}

ReactDOM.render(<ButtonSize />, mountNode);
````