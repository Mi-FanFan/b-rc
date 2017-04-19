/**
 * Created by Freeman on 2017/4/19.
 */
import React from 'react';
import Notification from './Notification'
import Icon from '../icon'

let key = 1;
let defaultDuration = 1.5;
let defaultTop;
let messageInstance;
let getContainer;
let prefixCls = 'mff-message';
//type NoticeType = 'info' | 'success' | 'error' | 'warning' | 'loading';
function getMessageInstance () {
  messageInstance = messageInstance || Notification.newInstance({
      prefixCls,
      transitionName: 'move-up',
      style: { top: defaultTop }, // 覆盖原来的样式
      getContainer,
    })
  return messageInstance;
}

function notice (content , duration= defaultDuration, type, onClose,) {
  let iconType = ({
    info: 'info-circle',
    success: 'check-circle',
    error: 'cross-circle',
    warning: 'exclamation-circle',
    loading: 'loading',
  })[type];

  let instance = getMessageInstance();
  instance.notice({
    key,
    duration,
    style: {},
    content: (
      <div className={`${prefixCls}-custom-content ${prefixCls}-${type}`}>
        <Icon type={iconType} />
        <span>{content}</span>
      </div>
    ),
    onClose,
  });
  return (function () {
    let target = key++;
    return function () {
      instance.removeNotice(target);
    };
  }());
}

export default {
  info(content, duration, onClose) {
    return notice(content, duration, 'info', onClose);
  },
  success(content, duration, onClose) {
    return notice(content, duration, 'success', onClose);
  },
  error(content, duration, onClose) {
    return notice(content, duration, 'error', onClose);
  },
  warning(content, duration, onClose) {
    return notice(content, duration, 'warning', onClose);
  },
  loading(content, duration, onClose) {
    return notice(content, duration, 'loading', onClose);
  },
  config(options) {
    if (options.top !== undefined) {
      defaultTop = options.top;
      messageInstance = null; // delete messageInstance for new defaultTop
    }
    if (options.duration !== undefined) {
      defaultDuration = options.duration;
    }
    if (options.prefixCls !== undefined) {
      prefixCls = options.prefixCls;
    }
    if (options.getContainer !== undefined) {
      getContainer = options.getContainer;
    }
  },
  destroy() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  },
};