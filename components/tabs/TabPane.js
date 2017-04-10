/**
 * Created by Freeman on 2016/12/21.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
class TabPane extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {active,className,style,children} = this.props;
    const prefixCls = `${this.props.rootPrefixCls}-tabpane`;
    const cls = classNames({
      [prefixCls]:1,
      [`${prefixCls}-inactive`]:!active,
      [`${prefixCls}-active`]:active,
      [className]:className,
    })
    return (
      <div
      role="tabpanel"
      aria-hidden={active?'false':'true'}
      className={cls}
      style={style}
      >
        {children}
      </div>
    )
  }
}
TabPane.propTypes = {
  className:PropTypes.string,
  active:PropTypes.bool,
  style:PropTypes.any,
}

export default TabPane