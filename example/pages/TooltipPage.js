/**
 * Created by Freeman on 2016/12/21.
 */
import React from 'react'
import Button from '../../components/button'
import '../../components/button/style'
import '../../components/tooltip/style'
import Tooltip from '../../components/tooltip'
export default class TooltipDemo extends React.Component {

  render() {
    return (
        <div className="toaster">
          <Tooltip title="Default Tooltip">
            <Button type="primary">Top</Button>
          </Tooltip>
          <Tooltip title="danger Tooltip" place="left">
            <Button type="danger">Top</Button>
          </Tooltip>
        </div>
    );
  }
};