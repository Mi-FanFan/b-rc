/**
 * Created by Freeman on 2016/12/19.
 */
import React, {PropTypes} from 'react'
import classNames from 'classnames';
const Icon = (props) => {
  const classString = classNames(props.className);

  return (
      <i {...props} className={classString}/>
  )

}
Icon.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  style: React.object,
}

export default Icon