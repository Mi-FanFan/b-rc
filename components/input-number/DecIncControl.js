import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
export default class DecIncControl extends Component {

  constructor (props) {
    super(props)
    this.waitTimer = null
    this.waitInterval = 500
    this.repeatTimer = null
    this.repeatInterval = 40
    this.isPressed = false
    // Flag for prevent trailing mouseUp handler when repeatTimer fired > 0 times
    this.isProcessed = false
    // Flag for canceling from mouseDown to mouseOut interval < waitInterval
    this.isCanceled = false

    this.handleClick = this.handleClick.bind(this)
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
    this.holdPress = this.holdPress.bind(this)
    this.releasePress = this.releasePress.bind(this)
    this.stopTimers = this.stopTimers.bind(this)
  }

  handleClick () {
    const {disabled, onClick} = this.props
    if (disabled) {
      this.stopTimers()
      return
    }

    this.isProcessed = true
    onClick()
  }

  handleMouseDown () {
    const {disabled} = this.props
    if (disabled) {
      return
    }

    this.isPressed = true
    this.waitTimer = setTimeout(this.holdPress, this.waitInterval)
  }

  handleMouseUp () {
    if (!this.isPressed) {
      return
    }

    this.releasePress()
  }

  handleMouseOut () {
    if (!this.isPressed) {
      return
    }

    this.isCanceled = true
    this.releasePress()
  }

  holdPress () {
    this.stopTimers()
    this.repeatTimer = setInterval(this.handleClick, this.repeatInterval)
  }

  releasePress () {
    this.stopTimers()
    if (!this.isProcessed && !this.isCanceled) {
      this.handleClick()
    }

    this.isPressed = false
    this.isProcessed = false
    this.isCanceled = false
  }

  stopTimers () {
    clearTimeout(this.waitTimer)
    clearInterval(this.repeatTimer)
  }

  render () {

    const {prefixCls, type, disabled} = this.props

    const controlClassName = classNames({
      [`${prefixCls}`]: true,
      [`${prefixCls}-dec`]: type === 'dec',
      [`${prefixCls}-inc`]: type === 'inc',
      [`${prefixCls}-disabled`]: disabled,
    })
    return (
      <span
        className={controlClassName}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onMouseOut={this.handleMouseOut}
      >
        {type === 'dec'?'-':'+'}
      </span>
    )
  }
}
DecIncControl.propTypes = {
  prefixCls: PropTypes.string,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
}
DecIncControl.defaultProps = {
  prefixCls: 'mff-input-number-handler',
  disabled: false,
}
