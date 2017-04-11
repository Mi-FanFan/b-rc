/**
 * Created by Freeman on 2016/12/19.
 */
import React from 'react';
import classNames from 'classnames';
import omit from 'lodash/omit';
const Icon = (props) => {

  const { type, className = '', spin } = props;
  const classString = classNames({
    anticon: true,
    'anticon-spin': !!spin || type === 'loading',
    [`anticon-${type}`]: true,
  }, className);

  return <i {...omit(props, ['type', 'spin']) } className={classString} />;
};
export default Icon;