/**
 * Created by Freeman on 2017/4/5.
 */
import React, { Component, PropTypes } from 'react'
import Animate from 'rc-animate'
import classNames from 'classnames'
import LazyRenderBox from './LazyRenderBox'
let uuid = 0
class Dialog extends Component {
  constructor (props) {
    super(props)
    this.onMaskClick = this.onMaskClick.bind(this)
    this.close = this.close.bind(this)
    this.getMaskTransitionName = this.getMaskTransitionName.bind(this)
    this.getTransitionName = this.getTransitionName.bind(this)
  }

  componentWillMount () {
    this.titleId = `dialogTitle${uuid++}`
  }

  onMaskClick (e) {
    const {maskClosable} = this.props
    if (maskClosable) {
      this.close(e)
    }
  }

  close (e) {
    const {onCancel} = this.props
    onCancel(e)
  }

  getMaskTransitionName () {
    const props = this.props
    let transitionName = props.maskTransitionName
    const animation = props.maskAnimation
    if (!transitionName && animation) {
      transitionName = `${props.prefixCls}-${animation}`
    }
    return transitionName
  }

  getTransitionName () {
    const props = this.props
    let transitionName = props.transitionName
    const animation = props.animation
    if (!transitionName && animation) {
      transitionName = `${props.prefixCls}-${animation}`
    }
    return transitionName
  }

  render () {
    const {prefixCls, wrapClassName, title, visible, closable, footer, bodyStyle, children, bodyProps, width, height, style, maskClosable, className} = this.props
    let wrapStyle = {}
    if (!visible) {
      wrapStyle.display = 'none'
    }
    let dest = {}
    if (width !== undefined) {
      dest.width = width
    }
    if (height !== undefined) {
      dest.height = height
    }
    const mainStyle = {...style, ...dest}
    const transitionName = this.getTransitionName()
    const maskTransition = this.getMaskTransitionName()
    return (
      <div >
        <Animate
          key="mask"
          transitionAppear
          component=""
          showProp="visible"
          transitionName={maskTransition}
        >
          <LazyRenderBox
            key="mask"
            className={`${prefixCls}-mask`}
            hiddenClassName={`${prefixCls}-mask-hidden`}
            visible={visible}
            onClick={this.mask}
          />
        </Animate>


        <div
          tabIndex={-1}
          onKeyDown={this.onKeyDown}
          ref="wrap"
          onClick={maskClosable ? this.onMaskClick : undefined}
          role="dialog"
          aria-labelledby={title ? this.titleId : null}
          className={`${prefixCls}-wrap ${wrapClassName || ''}`}
          style={wrapStyle}
        >
          <Animate
            key="dialog"
            showProp="visible"
            transitionName={transitionName}
            component=""
            transitionAppear
          >
            <LazyRenderBox
              key="dialog-element"
              role="document"
              ref="dialog"
              className={`${prefixCls} ${className || ''}`}
              visible={visible}
              style={mainStyle}>
              <div className={`${prefixCls}-content`}>
                {
                  closable &&
                  <button
                    onClick={this.close}
                    aria-label="Close"
                    className={`${prefixCls}-close`}
                  >
                    <span className={`${prefixCls}-close-x`}/>
                  </button>
                }
                {
                  title &&
                  <div className={`${prefixCls}-header`} ref="header">
                    <div className={`${prefixCls}-title`} id={this.titleId}>
                      {title}
                    </div>
                  </div>
                }
                <div
                  className={`${prefixCls}-body`}
                  style={bodyStyle}
                  ref="body"
                  {...bodyProps}
                >
                  {children}
                </div>
                {
                  footer &&
                  <div className={`${prefixCls}-footer`} ref="footer">
                    {footer}
                  </div>
                }
                <div tabIndex={0} ref="sentinel" style={{width: 0, height: 0, overflow: 'hidden'}}>
                  sentinel
                </div>
              </div>
            </LazyRenderBox>
          </Animate>
        </div>

      </div>
    )
  }
}
Dialog.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any,
}

Dialog.defaultProps = {
  className: '',
  mask: true,
  visible: false,
  closable: true,
  maskClosable: true,
  prefixCls: 'mi-modal',
}

export default Dialog