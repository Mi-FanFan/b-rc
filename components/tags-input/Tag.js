/**
 * Created by Freeman on 2018/1/17.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Animate from 'rc-animate'
import classNames from 'classnames'
import omit from 'lodash/omit'
import Icon from '../icon'

class Tag extends React.Component {
  constructor (props) {
    super(props)
    this.isPresetColor = this.isPresetColor.bind(this)
    this.close = this.close.bind(this)
    this.animationEnd = this.animationEnd.bind(this)
    this.state = {
      closing: false,
      closed: false,
    }
  }

  close (e) {
    const onClose = this.props.onClose
    if (onClose) {
      onClose(e)
    }
    if (e.defaultPrevented) {
      return
    }
    const dom = ReactDOM.findDOMNode(this)
    dom.style.width = `${dom.getBoundingClientRect().width}px`
    // It's Magic Code, don't know why
    dom.style.width = `${dom.getBoundingClientRect().width}px`
    this.setState({
      closing: true,
    })
  }

  animationEnd  (_, existed) {
    if (!existed && !this.state.closed) {
      this.setState({
        closed: true,
        closing: false,
      })

      const afterClose = this.props.afterClose
      if (afterClose) {
        afterClose()
      }
    }
  }

  isPresetColor (color) {
    if (!color) {
      return false
    }
    return (
      /^(pink|red|yellow|orange|cyan|green|blue|purple|geekblue|magenta|volcano|gold|lime)(-inverse)?$/
        .test(color)
    )
  }

  render () {
    const {prefixCls, closable, color, className, children, style, ...otherProps} = this.props
    const closeIcon = closable ? <Icon type="cross" onClick={this.close}/> : ''
    const isPresetColor = this.isPresetColor(color)
    const classString = classNames(prefixCls, {
      [`${prefixCls}-${color}`]: isPresetColor,
      [`${prefixCls}-has-color`]: (color && !isPresetColor),
      [`${prefixCls}-close`]: this.state.closing,
    }, className)
    // fix https://fb.me/react-unknown-prop
    const divProps = omit(otherProps, [
      'onClose',
      'afterClose',
    ])
    const tagStyle = {
      backgroundColor: (color && !isPresetColor) ? color : null,
      ...style,
    }
    const tag = this.state.closed ? null : (
      <div
        data-show={!this.state.closing}
        {...divProps}
        className={classString}
        style={tagStyle}
      >
        <span className={`${prefixCls}-text`}>{children}</span>
        {closeIcon}
      </div>
    )
    return (
      <Animate
        component=""
        showProp="data-show"
        transitionName={`${prefixCls}-zoom`}
        transitionAppear
        onEnd={this.animationEnd}
      >
        {tag}
      </Animate>
    )
  }
}

Tag.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  /** 标签是否可以关闭 */
  closable: PropTypes.bool,
  /** 关闭时的回调 */
  onClose: PropTypes.func,
  /** 动画关闭后的回调 */
  afterClose: PropTypes.func,
  style: PropTypes.object,
}
Tag.defaultProps = {
  prefixCls: 'mff-tag',
  closable: false,
}
export default Tag
