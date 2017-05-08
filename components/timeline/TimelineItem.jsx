import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const TimelineItem = props => {

  const {prefixCls, className, color = '', last, children, pending, dot,time, ...restProps} = props;
  const itemClassName = classNames({
    [`${prefixCls}-item`]: true,
    [`${prefixCls}-item-last`]: last,
    [`${prefixCls}-item-pending`]: pending,
  }, className)
  const dotClassName = classNames({
    [`${prefixCls}-item-head`]: true,
    [`${prefixCls}-item-head-custom`]: dot,
    [`${prefixCls}-item-head-${color}`]: true,
  })
  const timeCls = classNames({
    [`${prefixCls}-item-time`]: true,
  })
  return (
    <li {...restProps} className={itemClassName}>
      <div className={timeCls}>
        {time}
      </div>
      <div className={`${prefixCls}-item-tail`}/>
      <div
        className={dotClassName}
        style={{borderColor: /primary|red|green/.test(color) ? null : color}}
      >
        {dot}
      </div>
      <div className={`${prefixCls}-item-content`}>
        {children}
      </div>
    </li>
  )
}
TimelineItem.propsTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  dot: PropTypes.node,
  pending: PropTypes.bool,
  last: PropTypes.bool,
  style: PropTypes.object,
}
TimelineItem.defaultProps = {
  prefixCls: 'mff-timeline',
  color: 'primary',
  last: false,
  pending: false,
}


export default TimelineItem
