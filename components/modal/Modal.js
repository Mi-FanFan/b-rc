import 'react';
import React from 'react'
import PropTypes from 'prop-types';
import Button from '../button'
import Dialog from './Dialog'

export default class Modal extends React.Component {
  constructor (props) {
    super(props)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleOk = this.handleOk.bind(this)
  }

  handleCancel (e) {
    const onCancel = this.props.onCancel
    if (onCancel) {
      onCancel(e)
    }
  };

  handleOk () {
    const onOk = this.props.onOk
    if (onOk) {
      onOk()
    }
  };

  render () {
    let {okText, cancelText, confirmLoading, footer, visible} = this.props
    const defaultFooter = [
      <Button key="cancel" type="ghost" size="large" onClick={this.handleCancel}>
        {cancelText || '取消'}
      </Button>,
      <Button key="confirm" type="primary" size="large" loading={confirmLoading} onClick={this.handleOk}>
        {okText || '确定'}
      </Button>,
    ]
    return (
      <Dialog onClose={this.handleCancel} footer={footer || defaultFooter} {...this.props} visible={visible}/>
    )
  }
}
Modal.defaultProps = {
  prefixCls: 'mi-modal',
  width: 520,
  transitionName: 'zoom',
  maskTransitionName: 'fade',
  visible: false,
  maskClosable:true
}
Modal.propTypes = {
  prefixCls: PropTypes.string,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  okText: PropTypes.node,
  cancelText: PropTypes.node,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  visible: PropTypes.bool,
  align: PropTypes.object,
  footer: PropTypes.node,
  title: PropTypes.node,
  closable: PropTypes.bool,
  maskClosable:PropTypes.bool,
}
