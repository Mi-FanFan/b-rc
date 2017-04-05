/**
 * Created by jf on 15/12/10.
 */
import React from 'react'
import { Link } from 'react-router'
import { Layout, Menu, Icon, Row, Col } from 'antd'
const SubMenu = Menu.SubMenu
const {Header, Content, Footer, Sider} = Layout

export default class App extends React.Component {
  render () {
    const {children} = this.props
    return (

      <Layout className="main-wrapper">
        <Sider style={{backgroundColor:'#fff'}}>
          <div className="ant-layout-logo"/>
          <Menu mode="inline" theme="light"
                defaultSelectedKeys={['1']} defaultOpenKeys={['sub1', 'sub2', 'sub3']}>
            <SubMenu key="sub1" title={<span><Icon type="user"/>General</span>}>
              <Menu.Item key="1">
                <Link to={'components/icon'}>Icon</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to={'components/button'}>Button</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="laptop"/>Navigation</span>}>
              <Menu.Item key="5">
              <Link to={'components/backtop'}>BackTop</Link>
            </Menu.Item>
              <Menu.Item key="6">
                <Link to={'components/tabs'}>Tabs</Link>
              </Menu.Item>
              <Menu.Item key="7">
                <Link to={'components/loading'}>Loading</Link>
              </Menu.Item>
              <Menu.Item key="8">
                <Link to={'components/modal'}>Modal</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="notification"/>Feedback</span>}>
              <Menu.Item key="9">
                <Link to={'components/toaster'}>Toaster</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{margin: '0 16px'}}>
          <div style={{padding: 24, background: '#fff', minHeight: 500}}>
            {children}
          </div>
        </Content>
      </Layout>

    )
  }
}