/**
 * Created by Freeman on 2016/12/21.
 */
import React from 'react'
import {Button} from '../../components'

const ButtonPage = () => {
    return (
      <div style={{width:'400px'}}>

        <section className="code-box" id="components-button-demo-basic">
          <section className="code-box-demo">
            <div>
              <Button type="primary">Primary</Button>
              <Button>Default</Button>
              <Button type="ghost">Ghost</Button>
              <Button type="dashed">Dashed</Button>
            </div>
          </section>
        </section>
        <section className="code-box" id="components-button-demo-icon">
          <section className="code-box-demo">
            <div>
              <Button type="primary" shape="circle" icon="search"></Button>
              <Button type="primary" icon="search">Search</Button>
              <Button shape="circle" icon="search"></Button>
              <Button  icon="search">Search</Button>
              <br/>
              <Button type="ghost" shape="circle" icon="search"></Button>
              <Button type="ghost"  icon="search">Search</Button>
              <Button type="dashed" shape="circle" icon="search"></Button>
              <Button type="dashed" icon="search">Search</Button>
            </div>
          </section>
        </section>
      </div>
    )
}

export default ButtonPage