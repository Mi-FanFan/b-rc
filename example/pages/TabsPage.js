/**
 * Created by Freeman on 2016/12/21.
 */
import React from 'react'
import {Tabs} from '../../components'
const TabPane = Tabs.TabPane;
const TabsPage = () => {
    return (
      <div style={{width:'400px'}}>
        <Tabs>
          <TabPane key="1" tab={<span>选项1</span>}><span>1</span></TabPane>
          <TabPane key="2" tab={<span>选项2</span>}><span>2</span></TabPane>
          <TabPane key="3" tab={<span>选项3</span>}><span>3</span></TabPane>
          <TabPane key="4" tab={<span>选项4</span>}><span>4</span></TabPane>
          <TabPane key="5" tab={<span>选项5</span>}><span>5</span></TabPane>
          <TabPane key="6" tab={<span>选项6</span>}><span>6</span></TabPane>
          <TabPane key="7" tab={<span>选项7</span>}><span>7</span></TabPane>
          <TabPane key="8" tab={<span>选项8</span>}><span>8</span></TabPane>
          <TabPane key="9" tab={<span>选项9</span>}><span>9</span></TabPane>
          <TabPane key="10" tab={<span>选项10</span>}><span>10</span></TabPane>
        </Tabs>
      </div>
    )
}

export default TabsPage