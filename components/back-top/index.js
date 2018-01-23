import React from 'react';
import PropTypes from 'prop-types';
import Animate from 'rc-animate';
import addEventListener from 'rc-util/lib/Dom/addEventListener';
import classNames from 'classnames';
import omit from 'lodash/omit';
import Icon from '../icon';
import getScroll from '../_util/getScroll';

const currentScrollTop = () => {
  return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
};
const easeInOutCubic = (t, b, c, d) => {
  const cc = c - b;
  t /= d / 2;
  if (t < 1) {
    return cc / 2 * t * t * t + b;
  }
  else {
    return cc / 2 * ((t -= 2) * t * t + 2) + b;
  }
};
function noop() { }
function getDefaultTarget() {
  return typeof window !== 'undefined' ?
      window : null;
}
export default class BackTop extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      visible: false,
    };
  }

  handleScroll(){
    const { visibilityHeight, target = getDefaultTarget } = this.props;
    const scrollTop = getScroll(target(), true);
    this.setState({
      visible: scrollTop > visibilityHeight,
    });
  };

  scrollToTop(e){
    const scrollTop = currentScrollTop();
    const startTime = Date.now();
    const frameFunc = () => {
      const timestamp = Date.now();
      const time = timestamp - startTime;
      this.setScrollTop(easeInOutCubic(time, scrollTop, 0, 450));
      if (time < 450) {
        requestAnimationFrame(frameFunc);
      }
    };
    requestAnimationFrame(frameFunc);
    (this.props.onClick || noop)(e);
  };

  setScrollTop(value) {
    const targetNode = (this.props.target || getDefaultTarget)();
    if (targetNode === window) {
      document.body.scrollTop = value;
      document.documentElement.scrollTop = value;
    }
    else {
      targetNode.scrollTop = value;
    }
  }
  componentDidMount() {
    this.handleScroll();
    this.scrollEvent = addEventListener((this.props.target || getDefaultTarget)(), 'scroll', this.handleScroll);
  }
  componentWillUnmount() {
    if (this.scrollEvent) {
      this.scrollEvent.remove();
    }
  }
  render() {
    const { prefixCls = 'mff-back-top', className = '', children } = this.props;
    const classString = classNames(prefixCls, className);
    const defaultElement = (<div className={`${prefixCls}-content`}>
      <Icon className={`${prefixCls}-icon`} type="to-top"/>
    </div>);
    // fix https://fb.me/react-unknown-prop
    const divProps = omit(this.props, [
      'prefixCls',
      'className',
      'children',
      'visibilityHeight',
    ]);
    const backTopBtn = this.state.visible ? (<div {...divProps} className={classString} onClick={this.scrollToTop}>
          {children || defaultElement}
        </div>) : null;
    return (<Animate component="" transitionName="fade">
      {backTopBtn}
    </Animate>);
  }
}

BackTop.propTypes = {
  visibilityHeight: PropTypes.number,
  onClick: PropTypes.func,
  target: PropTypes.any,
}

BackTop.defaultProps = {
  visibilityHeight: 400,
};
