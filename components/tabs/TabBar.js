/**
 * Created by Freeman on 2016/12/21.
 */
import React, {Component, PropTypes} from 'react'
import classNames from 'classnames';

import {setTransform, isTransformSupported, getScroll} from './utils'

function offset(elem) {
  let box;
  let x;
  let y;
  const doc = elem.ownerDocument;
  const body = doc.body;
  const docElem = doc && doc.documentElement;
  box = elem.getBoundingClientRect();
  x = box.left;
  y = box.top;
  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;
  const w = doc.defaultView || doc.parentWindow;
  x += getScroll(w)
  y += getScroll(w, true)
  return {
    left: x,
    top: y
  }
}
function componentDidUpdate(component, init = false) {
  const refs = component.refs;
  const wrapNode = refs.nav || refs.root;
  const containerOffset = offset(wrapNode);
  const inkBarNode = refs.inkBar;
  const activeTab = refs.activeTab;

  const inkBarNodeStyle = inkBarNode.style;
  const tabBarPosition = component.props.tabBarPosition;
  if (init) {
    inkBarNodeStyle.display = 'none';
  }
  if (activeTab) {
    const tabNode = activeTab;
    const tabOffset = offset(tabNode);
    const transformSupported = isTransformSupported(inkBarNodeStyle);
    //
    if (tabBarPosition == 'top' || tabBarPosition === 'bottom') {
      const left = tabOffset.left - containerOffset.left;
      if (transformSupported) {
        setTransform(inkBarNodeStyle, `transform3d(${left}px,0,0)`)
        inkBarNodeStyle.width = `${tabNode.offsetWidth}px`;
        inkBarNodeStyle.height = '';
      } else {
        inkBarNodeStyle.left = `${left}px`;
        inkBarNodeStyle.top = '';
        inkBarNodeStyle.bottom = '';
        inkBarNodeStyle.right = `${wrapNode.offsetWidth - left - tabNode.offsetWidth}px`;
      }
    }
    //方向为垂直方向时 //TODO

  }
  inkBarNodeStyle.display = activeTab ? 'block' : 'none';

}


class TabBar extends Component {
  constructor(props) {
    super(props)
    this.getTabs = this.getTabs.bind(this)
    this.getInkBarNode = this.getInkBarNode.bind(this)
    this.onTabClick = this.onTabClick.bind(this)
  }

  componentDidMount() {
    componentDidUpdate(this,true)
  }

  componentDidUpdate() {
    componentDidUpdate(this)
  }

  onTabClick(key) {
    const {onTabClick} = this.props;
    onTabClick(key)
  }
  getInkBarNode(){
    const {prefixCls, style, inkBarAnimated} = this.props;
    const className = `${prefixCls}-ink-bar`;
    const classes = classNames({
      [className]: true,
      [
        inkBarAnimated ?
          `${className}-animated` :
          `${className}-no-animated`
        ]: true,
    })
    return (
      <div
        style={style.inkBar}
        className={classes}
        key="inkBar"
        ref="inkBar"
      >
      </div>
    )
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
    const {style, prefixCls, className} = this.props;

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
        {this.getInkBarNode()}
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
  inkBarAnimated:PropTypes.bool
}

TabBar.defaultProps = {
  style: {},
  inkBarAnimated:true
}

export default TabBar