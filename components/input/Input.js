import React, { cloneElement }from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
export default class Input extends React.Component {
  constructor (props) {
    super(props)
    this.renderInput = this.renderInput.bind(this)
    this.renderLabel = this.renderLabel.bind(this)
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
    const {type, placeholder, size, className, prefixCls} = this.props

    const inputClassName = classNames(prefixCls, {
      [`${prefixCls}-sm`]: size === 'small',
      [`${prefixCls}-lg`]: size === 'large',
    }, className)
    return (
      <input type={type} placeholder={placeholder} className={inputClassName} {...this.props}/>
    )
  }

  render () {
    return this.renderLabel(this.renderInput())
  }
}
Input.defaultProps = {
  prefixCls: 'mi-input',
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
}
