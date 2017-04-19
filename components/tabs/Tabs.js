/**
 * Created by Freeman on 2016/12/20.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import RcTabs, { TabPane } from 'rc-tabs';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import TabContent from 'rc-tabs/lib/TabContent';
class Tabs extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange (activeKey){
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(activeKey);
    }
  }

  render() {
    let {
      prefixCls,
      className = '',
      size,
      type = 'line',
      tabPosition,
      children,
      tabBarExtraContent,
      tabBarStyle,
      onTabClick,
      onPrevClick,
      onNextClick,
      animated,
    } = this.props;
    let { inkBarAnimated, tabPaneAnimated } = typeof animated === 'object' ? {
      inkBarAnimated: animated.inkBar, tabPaneAnimated: animated.tabPane,
    } : {
        inkBarAnimated: animated, tabPaneAnimated: animated,
      };
    if (type !== 'line') {
      tabPaneAnimated = false;
    }

    let cls = classNames(className, {
      [`${prefixCls}-mini`]: size === 'small' || size === 'mini',
      [`${prefixCls}-vertical`]: tabPosition === 'left' || tabPosition === 'right',
      [`${prefixCls}-card`]: type.indexOf('card') >= 0,
      [`${prefixCls}-${type}`]: true,
      [`${prefixCls}-no-animation`]: !animated,
    });

    tabBarExtraContent = tabBarExtraContent ? (
      <div className={`${prefixCls}-extra-content`}>
        {tabBarExtraContent}
      </div>
    ) : null;
    const renderTabBar = () => (
      <ScrollableInkTabBar
        inkBarAnimated={inkBarAnimated}
        extraContent={tabBarExtraContent}
        onTabClick={onTabClick}
        onPrevClick={onPrevClick}
        onNextClick={onNextClick}
        style={tabBarStyle}
      />
    );
    return (
      <RcTabs
        {...this.props}
        className={cls}
        tabBarPosition={tabPosition}
        renderTabBar={renderTabBar}
        renderTabContent={() => <TabContent animated={tabPaneAnimated} animatedWithMargin />}
        onChange={this.handleChange}
      >
        {children}
      </RcTabs>
    );
  }

}
Tabs.propTypes = {
  activeKey: PropTypes.string,
  defaultActiveKey: PropTypes.string,
  onChange: PropTypes.func,
  onTabClick: PropTypes.func,
  onPrevClick: PropTypes.func,
  onNextClick: PropTypes.func,
  tabBarExtraContent: PropTypes.node,
  tabBarStyle: PropTypes.object,
  type: PropTypes.oneOf(['line' , 'card']),
  tabPosition: PropTypes.oneOf(['top' , 'right' , 'bottom' , 'left']),
  size: PropTypes.oneOf(['default' , 'small']),
  style: PropTypes.object,
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  animated:   PropTypes.bool,
}

Tabs.defaultProps = {
  prefixCls: 'mff-tabs',
  animated: true,
}

Tabs.TabPane = TabPane;
export default Tabs