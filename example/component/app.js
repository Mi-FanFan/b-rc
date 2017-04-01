/**
 * Created by jf on 15/12/10.
 */
import React from 'react';
import {Link} from 'react-router'
import {Layout, Menu, Icon,Row,Col} from 'antd';
const SubMenu = Menu.SubMenu;
const {Header, Content, Footer, Sider} = Layout

export default class App extends React.Component {
  render() {
    const {children} = this.props
    return (
        <Layout>
          <Header id="header" >
            <Row gutter={16}>
              <Col span={6} >
                <Link id="logo" href="/index-cn">
                  <img alt="logo" src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg"/>
                    <span>Ant Design</span>
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
          <Layout >
            <Sider>
              <div className="ant-layout-logo"></div>
              <Menu mode="inline" theme="light"
                    defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
                <SubMenu key="sub1" title={<span><Icon type="user"/>General</span>}>
                  <Menu.Item key="1">
                    <Link to={'icon'}>Icon</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to={'button'}>Button</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop"/>Navigation</span>}>
                  <Menu.Item key="5">
                    <Link to={'backtop'}>BackTop</Link>
                  </Menu.Item>
                  <Menu.Item key="6">
                    <Link to={'tabs'}>Tabs</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="notification"/>Feedback</span>}>
                  <Menu.Item key="9">
                    <Link to={'toaster'}>Toaster</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ margin: '0 16px' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: 500 }}>
                  {children}
              </div>
            </Content>
          </Layout>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design 版权所有 © 2017 由蚂蚁金服体验技术部支持
          </Footer>
        </Layout>
    );
  }
};