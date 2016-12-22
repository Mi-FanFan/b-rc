/**
 * Created by Freeman on 2016/12/21.
 */
import React, {Component, PropTypes} from 'react'
import Tabs, {TabPane} from '../../components/tabs'
class TabsPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Tabs>
          <TabPane key="1" tab={<span>1</span>}><span>1</span></TabPane>
          <TabPane key="2" tab={<span>2</span>}><span>2</span></TabPane>
          <TabPane key="3" tab={<span>3</span>}><span>3</span></TabPane>
        </Tabs>
      </div>
    )
  }
}

export default TabsPage