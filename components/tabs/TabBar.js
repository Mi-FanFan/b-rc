/**
 * Created by Freeman on 2016/12/21.
 */
import React, {Component, PropTypes} from 'react'
class TabBar extends Component {
  constructor(props) {
    super(props)
    this.getTabs = this.getTabs.bind(this)
    this.onTabClick = this.onTabClick.bind(this)
  }

  onTabClick(key) {
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

  render() {
    return (
      <div>
        {this.getTabs()}
      </div>
    )
  }
}
TabBar.propTypes = {
  prefixCls: PropTypes.string,
  onTabClick: PropTypes.func.isRequired,
  activeKey: PropTypes.string,
  panels: PropTypes.any,
  style: PropTypes.any,
  inkBarAnimated:PropTypes.bool,
  tabBarPosition:PropTypes.string,
}

TabBar.defaultProps = {
  style: {},
  inkBarAnimated:true,
  tabBarPosition:'top'
}

export default TabBar