import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames';
import TimelineItem from './TimelineItem';

const Timeline = (props) => {

  const {prefixCls, children, pending, className, ...restProps} = props;
  const pendingNode = typeof pending === 'boolean' ? null : pending;
  const classString = classNames(prefixCls, {
    [`${prefixCls}-pending`]: !!pending,
  }, className);
  const items = React.Children.map(children, (ele, idx) =>
    React.cloneElement(ele, {
      last: idx === (children).length - 1,
    }),
  );
  const pendingItem = (!!pending) ? (
    <TimelineItem pending={!!pending}>{pendingNode}</TimelineItem>
  ) : null;
  return (
    <ul {...restProps} className={classString}>
      {items}
      {pendingItem}
    </ul>
  );
}
Timeline.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  /** 指定最后一个幽灵节点是否存在或内容 */
  pending: PropTypes.node,
  style: PropTypes.object,
}
Timeline.defaultProps = {
  prefixCls: 'mff-timeline',
}

export default Timeline
