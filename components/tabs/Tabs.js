/**
 * Created by Freeman on 2016/12/20.
 */
import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'
import RootNodeTabBar from './RootNodeTabBar'
import TabContent from './TabContent'

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
          activeKey:activeKey
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
      children
    }  = this.props;
    const cls = classNames({
      [prefixCls]: 1,
      [`${prefixCls}-${tabBarPosition}`]: 1,
      [className]: !!className,
    });


    return (
      <div
        className={cls}
        style={style}
      >
        <RootNodeTabBar
          prefixCls={prefixCls}
          activeKey={this.state.activeKey}
          panels={children}
          key="tabBar"
          onTabClick={this.handleTabClick}
        />
        <TabContent
        key="tabContent"
        activeKey={this.state.activeKey}
        children={children}
        prefixCls={prefixCls}
        />
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
}

Tabs.defaultProps = {
  prefixCls: 'mi-tabs',
  destroyInactiveTabPane: false,
  tabBarPosition: 'top',
  style: {},
}

export default Tabs