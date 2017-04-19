/**
 * Created by Freeman on 2017/4/19.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
class Notice extends Component {
  constructor (props) {
    super(props)
    this.close = this.close.bind(this)
    this.clearCloseTimer = this.clearCloseTimer.bind(this)
  }

  componentDidMount() {
    const {duration} = this.props
    if (duration) {
      this.closeTimer = setTimeout(() => {
        this.close();
      }, duration * 1000);
    }
  }

  componentWillUnmount() {
    this.clearCloseTimer();
  }

  clearCloseTimer() {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  }

  close() {
    const {closeCallBack} = this.props
    this.clearCloseTimer();
    closeCallBack();
  }
  render () {
    const {prefixCls,className,style,children,closable} = this.props;
    const componentClass = `${prefixCls}-notice`;
    const cls = {
      [`${componentClass}`]: 1,
      [`${componentClass}-closable`]: closable,
      [className]: !!className,
    };
    return (
      <div className={classNames(cls)} style={style}>
        <div className={`${componentClass}-content`}>{children}</div>
        {
          closable ?
          <a tabIndex="0" onClick={this.close} className={`${componentClass}-close`}>
            <span className={`${componentClass}-close-x`}/>
          </a> : null
        }
      </div>
    )
  }
}
Notice.propTypes = {
  prefixCls:PropTypes.string,
  className:PropTypes.string,
  duration: PropTypes.number,
  closable: PropTypes.bool,
  children: PropTypes.any,
  closeCallBack: PropTypes.func,
  style: PropTypes.object,
}
Notice.defaultProps = {
  duration: 1.5,
  style: {
    right: '50%',
  },
  closeCallBack:() =>{}
}
export default Notice