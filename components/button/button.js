var __rest = (this && this.__rest) || function (s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
          t[p[i]] = s[p[i]];
      return t;
    };
import React from 'react';
import classNames from 'classnames';
import {findDOMNode} from 'react-dom';
import Icon from '../icon';

export default class Button extends React.Component {
  constructor() {
    super(...arguments);
    this.clearButton = (button) => {
      button.className = button.className.replace(` ${this.props.prefixCls}-clicked`, '');
    };
    this.handleClick = (e) => {
      // Add click effect
      const buttonNode = findDOMNode(this);
      this.clearButton(buttonNode);
      this.clickedTimeout = setTimeout(() => buttonNode.className += ` ${this.props.prefixCls}-clicked`, 10);
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => this.clearButton(buttonNode), 500);
      const onClick = this.props.onClick;
      if (onClick) {
        onClick(e);
      }
    };
    // Handle auto focus when click button in Chrome
    this.handleMouseUp = (e) => {
      findDOMNode(this).blur();
      if (this.props.onMouseUp) {
        this.props.onMouseUp(e);
      }
    };
  }

  componentWillUnmount() {
    if (this.clickedTimeout) {
      clearTimeout(this.clickedTimeout);
    }
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  render() {
    const props = this.props;
    const {type, shape, size = '', className, htmlType, children, icon, loading, prefixCls} = props,
        others = __rest(props, ["type", "shape", "size", "className", "htmlType", "children", "icon", "loading", "prefixCls"]);
    // large => lg
    // small => sm
    const sizeCls = ({
          large: 'lg',
          small: 'sm',
        })[size] || '';
    const classes = classNames(prefixCls, {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${shape}`]: shape,
      [`${prefixCls}-${sizeCls}`]: sizeCls,
      [`${prefixCls}-icon-only`]: !children && icon,
      [`${prefixCls}-loading`]: loading,
    }, className);
    const iconType = loading ? 'loading' : icon;
    return (
        <button
            {...others}
            type={htmlType || 'button'}
            className={classes}
            onMouseUp={this.handleMouseUp}
            onClick={this.handleClick}
        >
          {
            iconType ? <Icon type={iconType}/> : null
          }
          {children}

        </button>
    );
  }
}
Button.defaultProps = {
  prefixCls: 'mi-btn',
  loading: false,
};
Button.propTypes = {
  type: React.PropTypes.string,
  shape: React.PropTypes.oneOf(['circle', 'circle-outline']),
  size: React.PropTypes.oneOf(['large', 'default', 'small']),
  htmlType: React.PropTypes.oneOf(['submit', 'button', 'reset']),
  onClick: React.PropTypes.func,
  loading: React.PropTypes.bool,
  className: React.PropTypes.string,
  icon: React.PropTypes.string,
};
