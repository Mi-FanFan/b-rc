/**
 * Created by Freeman on 2017/4/19.
 */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Animate from 'rc-animate'
import Notice from './Notice'
import createChainedFunction from '../_util/createChainedFunction'

let seed = 0;
const now = Date.now();
const getUuid = () => {
  return `mff_notification_${now}_${seed++}`
}

class Notification extends Component {
  constructor (props) {
    super(props)
    this.add = this.add.bind(this)
    this.remove = this.remove.bind(this)
    this.state = {
      notices: [],
    }
  }

  add(notice){
    const key = notice.key = notice.key || getUuid();
    this.setState(previousState =>{
      const notices = previousState.notices;
      if (!notices.filter( v => v.key === key).length){
        return {
          notices:notices.concat(notice)
        }
      }
    })
  }

  remove(key){
    this.setState(previousState => {
      return {
        notices: previousState.notices.filter(v => v.key !== key)
      }
    })
  }

  render () {
    const {prefixCls,className,style,transitionName} = this.props
    const noticeNodes = this.state.notices.map((notice) => {
      const onClose = createChainedFunction(this.remove.bind(this, notice.key), notice.onClose)
      return (
        <Notice
          prefixCls={prefixCls}
          {...notice}
          closeCallBack={onClose}
        >
          {notice.content}
        </Notice>)
    })
    const cls = {
      [prefixCls]: 1,
      [className]: !!className,
    };
    return (
      <div className={classNames(cls)} style={style}>
        <Animate transitionName={transitionName}>{noticeNodes}</Animate>
      </div>
    )
  }
}
Notification.propTypes = {
  prefixCls:PropTypes.string,
  className:PropTypes.string,
  style:PropTypes.object,
  transitionName:PropTypes.string,
}
Notification.defaultProps = {
  prefixCls:'mff-message',
  transitionName:'fade',
  style: {
    top: 65,
    left: '50%',
  },
}

Notification.newInstance = function newNotificationInstance(properties = {}){
  const { getContainer, ...props } = properties
  let div;
  if (getContainer) {
    div = getContainer();
  } else {
    div = document.createElement('div');
    document.body.appendChild(div);
  }
  const notification = ReactDOM.render(<Notification {...props} />, div);

  return {
    notice(noticeProps) {
      notification.add(noticeProps);
    },
    removeNotice(key) {
      notification.remove(key);
    },
    component: notification,
    destroy() {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
    },
  }
}

export default Notification