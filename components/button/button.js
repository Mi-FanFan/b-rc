import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {findDOMNode} from 'react-dom';
import Icon from '../icon';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.clearButton = this.clearButton.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // Handle auto focus when click button in Chrome
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  componentWillUnmount() {
    if (this.clickedTimeout) {
      clearTimeout(this.clickedTimeout);
    }
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  clearButton(button) {
    button.className = button.className.replace(` ${this.props.prefixCls}-clicked`, '');
  }
  handleClick(e){
    // Add click effect
    const buttonNode = findDOMNode(this);
    this.clearButton(buttonNode);
    this.clickedTimeout = setTimeout(() => buttonNode.className += ` ${this.props.prefixCls}-clicked`, 10);
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.clearButton(buttonNode), 500);
    const {onClick} = this.props;
    if (onClick) {
      onClick(e);
    }
  }
  handleMouseUp(e){
    findDOMNode(this).blur();
    if (this.props.onMouseUp) {
      this.props.onMouseUp(e);
    }
  }
  render() {
    const props = this.props;
    const {type, shape, size = '', className, htmlType, children, icon, loading, prefixCls,...others} = props;
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
  prefixCls: 'mff-btn',
  loading: false,
};
Button.propTypes = {
  type: PropTypes.string,
  shape: PropTypes.oneOf(['circle', 'circle-outline']),
  size: PropTypes.oneOf(['large', 'default', 'small']),
  htmlType: PropTypes.oneOf(['submit', 'button', 'reset']),
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.string,
};
