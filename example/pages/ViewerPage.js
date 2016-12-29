/**
 * Created by Freeman on 2016/12/21.
 */
import React from 'react'
import {Viewer} from '../../components'

const TabsPage = () => {

  const data = [
    'http://7jpp73.com1.z0.glb.clouddn.com/M_1.jpg',
    'http://7jpp73.com1.z0.glb.clouddn.com/M_2.jpg',
    'http://7jpp73.com1.z0.glb.clouddn.com/M_3.jpg',
    'http://7jpp73.com1.z0.glb.clouddn.com/M_4.jpg',
    'http://7jpp73.com1.z0.glb.clouddn.com/M_5.jpg',
    'http://7jpp73.com1.z0.glb.clouddn.com/M_6.jpg',
  ]
    return (
      <div>
        <Viewer data={data} />
      </div>
    )
}

export default TabsPage