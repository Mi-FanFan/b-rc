/**
 * Created by Freeman on 2017/1/17.
 * 顶部提示框组件
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
const TopTips = (props) => {
  const {className, type, children, show, ...others} = props;
  const cls = classNames({
    'mff-toptips': true,
    [`mff-toptips_${type}`]: true,
    [className]: className
  });
  return (
    <div className={cls} {...others} style={{display: show ? 'block' : 'none'}}>
      {children}
    </div>
  )
}

TopTips.propTypes = {
  /**
   * display tips
   *
   */
  show: PropTypes.bool,
  /**
   * type: `default`, `warn`, `info`, `primary`
   */
  type: PropTypes.oneOf([`default`, `warn`, `info`, `primary`])
}

TopTips.defaultProps = {
  show: false,
  type: 'default'
};
export default TopTips
