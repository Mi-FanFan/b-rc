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
                defaultSelectedKeys={['1']}>
            <Menu.Item key="0">
              <Link to={'spec/color'}>Color色彩</Link>
            </Menu.Item>
            <Menu.Item key="1">
              <Link to={'spec/font'}>Font字体</Link>
            </Menu.Item>
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