import React, { cloneElement }from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import omit from 'lodash/omit'
export default class Input extends React.Component {
  constructor (props) {
    super(props)
    this.renderInput = this.renderInput.bind(this)
    this.renderLabel = this.renderLabel.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  handleKeyDown(e) {
    const { onPressEnter, onKeyDown } = this.props;
    if (e.keyCode === 13 && onPressEnter) {
      onPressEnter(e);
    }
    if (onKeyDown) {
      onKeyDown(e);
    }
  }

  renderLabel (children) {
    const {props} = this
    if (!('prefix' in props || 'suffix' in props)) {
      return children
    }
    const prefix = props.prefix ? (<span className={`${props.prefixCls}-prefix`}>
        {props.prefix}
      </span>) : null
    const suffix = props.suffix ? (<span className={`${props.prefixCls}-suffix`}>
        {props.suffix}
      </span>) : null
    return (<span className={`${props.prefixCls}-affix-wrapper`} style={props.style}>
        {prefix}
      {cloneElement(children, {style: null})}
      {suffix}
      </span>)
  }

  renderInput () {
    const {type, placeholder, size, className, prefixCls,saveRef} = this.props
    const otherProps = omit(this.props,[
      'prefixCls',
      'prefix',
      'suffix',
      'onPressEnter',
      'saveRef',
    ])
    const inputClassName = classNames(prefixCls, {
      [`${prefixCls}-sm`]: size === 'small',
      [`${prefixCls}-lg`]: size === 'large',
    }, className)
    return (
      <input type={type} placeholder={placeholder} className={inputClassName} onKeyDown={this.handleKeyDown} ref={saveRef} {...otherProps}/>
    )
  }

  render () {
    return this.renderLabel(this.renderInput())
  }
}
Input.defaultProps = {
  prefixCls: 'mff-input',
  disabled: false,
  type: 'text',
}
Input.propTypes = {
  prefixCls: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  size: PropTypes.oneOf(['small', 'default', 'large']),
  disabled: PropTypes.bool,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  className: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  onPressEnter: PropTypes.func,
  onKeyDown:  PropTypes.func,
  saveRef:PropTypes.func,//ref
}
