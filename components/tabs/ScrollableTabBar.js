/**
 * Created by Freeman on 2016/12/21.
 */
import React, {Component, PropTypes} from 'react'
import classNames from 'classnames';
import InkTabBar from './InkTabBar'
class ScrollableTabBar extends Component {
  constructor(props) {
    super(props)
    this.contents = this.contents.bind(this)
    this.getTabs = this.getTabs.bind(this)
    this.inkBarNode = this.inkBarNode.bind(this)
    this.onTabClick = this.onTabClick.bind(this)
  }

  onTabClick(key) {
    console.log(key);
    const {onTabClick} = this.props;
    onTabClick(key)
  }

  getTabs() {
    const {panels, activeKey, prefixCls} = this.props;
    const rst = [];
    React.Children.forEach(panels, child => {
      if (!child) {
        return;
      }
      const key = child.key;
      let cls = activeKey === key ? `${prefixCls}-tab-active` : '';
      cls += ` ${prefixCls}-tab`
      let events = {};
      if (child.props.disabled) {
        cls += ` ${prefixCls}-tab-disabled`;
      } else {
        events = {
          onClick: () => this.onTabClick(key)
        };
      }
      const ref = {};
      if (activeKey === key) {
        ref.ref = 'activeTab';
      }

      rst.push(
        <div
          role="tab"
          aria-disabled={child.props.disabled ? 'true' : 'false'}
          aria-selected={activeKey === key ? 'true' : 'false'}
          {...events}
          className={cls}
          key={key}
          {...ref}
        >
          {child.props.tab}
        </div>
      )
    });

    return rst;
  }

  contents() {

  }

  inkBarNode() {
    return (
      <InkTabBar {...this.props} />
    )

  }

  render() {
    const {children, style, prefixCls, className} = this.props;

    const cls = classNames({
      [`${prefixCls}-bar`]: true,
      [className]: !!className
    })
    return (
      <div
        role="tablist"
        className={cls}
        ref="root"
        style={style}
        tabIndex="0"
      >
        {this.getTabs()}
      </div>
    )
  }
}
ScrollableTabBar.propTypes = {
  prefixCls: PropTypes.string,
  onTabClick: PropTypes.func.isRequired,
  activeKey: PropTypes.string,
  panels: PropTypes.any,
  style: PropTypes.any
}

ScrollableTabBar.defaultProps = {
  style: {}
}

export default ScrollableTabBar