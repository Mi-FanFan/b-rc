/**
 * Created by Freeman on 2016/12/20.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import TabContent from './TabContent'
import TabBar from './TabBar';
function getDefaultActiveKey(props) {
  let activeKey;
  React.Children.forEach(props.children, child => {
    if (child && !activeKey && !child.props.disabled) {
      activeKey = child.key
    }
  })
  return activeKey;
}

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.setActiveKey = this.setActiveKey.bind(this);
    this.handleTabClick = this.handleTabClick.bind(this);
    this.getInitState = this.getInitState.bind(this);
    this.state = {
      activeKey: this.getInitState(props)
    }
  }

  getInitState(props) {
    let activeKey;
    if ('activeKey' in props) {
      activeKey = props.activeKey
    } else if ('defaultActiveKey' in props) {
      activeKey = props.defaultActiveKey;
    } else {
      activeKey = getDefaultActiveKey(props);
    }
    return activeKey;
  }

  setActiveKey(activeKey) {
    if (this.state.activeKey !== activeKey) {
      if (!('activeKey' in this.props)) {
        this.setState({
          activeKey: activeKey
        })
      }
    }
  }

  handleTabClick(activeKey) {
    this.setActiveKey(activeKey)
  }

  render() {
    const {
      prefixCls,
      tabBarPosition,
      className,
      style,
      size,
      renderTabBar,
      children
    } = this.props;
    const cls = classNames({
      [prefixCls]: 1,
      [`${prefixCls}-${tabBarPosition}`]: 1,
      [`${prefixCls}-mini`]: size === 'small' || size === 'mini',
      [className]: !!className,
    });

    this.tabBar = renderTabBar();
    const contents = [
      React.cloneElement(this.tabBar, {
        prefixCls,
        key: 'tabBar',
        onKeyDown: this.onNavKeyDown,
        tabBarPosition,
        onTabClick: this.handleTabClick,
        panels: children,
        activeKey: this.state.activeKey,
      }),
      <TabContent
        key="tabContent"
        activeKey={this.state.activeKey}
        children={children}
        prefixCls={prefixCls}
      />,
    ];
    if (tabBarPosition === 'bottom') {
      contents.reverse();
    }
    return (
      <div
        className={cls}
        style={style}
      >
        {contents}
      </div>
    )
  }
}
Tabs.propTypes = {
  children: PropTypes.any,
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  tabBarPosition: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.string,
  renderTabBar: PropTypes.func.isRequired,
}

Tabs.defaultProps = {
  prefixCls: 'mff-tabs',
  destroyInactiveTabPane: false,
  tabBarPosition: 'top',
  style: {},
  renderTabBar:() => <TabBar />
}

export default Tabs