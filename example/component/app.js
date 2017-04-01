/**
 * Created by jf on 15/12/10.
 */
import React from 'react';
import {Link} from 'react-router'
import {Layout, Menu, Row,Col} from 'antd';
const {Header, Footer} = Layout

export default class App extends React.Component {
  render() {
    const {children} = this.props
    return (
        <Layout className="page-wrapper">
          <Header id="header" >
            <Row gutter={16}>
              <Col span={6} >
                <Link id="logo" href="/index-cn">
                  <img alt="logo" src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg"/>
                    <span>MiFan Design</span>
                </Link>
              </Col>
              <Col span={8}/>
              <Col span={6} >
                <Menu id="nav" mode="horizontal" theme="light"
                      defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
                    <Menu.Item key="1">
                      <Link to={'/'}>首页</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Link to={'spec'}>规范</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                      <Link to={'components'}>组件</Link>
                    </Menu.Item>
                </Menu>
              </Col>
            </Row>
          </Header>
          {children}
          <Footer style={{ textAlign: 'center' }} id="footer">
            MiFan Design 版权所有 © 2017 由米饭网支持
          </Footer>
        </Layout>
    );
  }
};