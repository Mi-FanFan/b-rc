/**
 * Created by Freeman on 2016/12/22.
 */
import React, {Component, PropTypes} from 'react';
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
class InkTabBar extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
      componentDidUpdate(this,true)
  }

  componentDidUpdate() {
    componentDidUpdate(this)
  }

  render() {
    const {prefixCls, styles, inkBarAnimated} = this.props;
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
        style={styles.inkBar}
        className={classes}
        key="inkBar"
        ref="inkBar"
      >
      </div>
    )
  }
}
InkTabBar.propTypes = {
  prefixCls: PropTypes.string,
  styles: PropTypes.any,
  inkBarAnimated: PropTypes.bool,
}

InkTabBar.defaultProps = {
  inkBarAnimated: true
}
export default InkTabBar