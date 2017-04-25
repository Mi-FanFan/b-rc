/**
 * Created by Freeman on 2017/4/25.
 */
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

 const Card = (props) => {
    const { prefixCls, className, loading, bordered,bodyStyle,...others } = props
    let { children } = props
    const cls = classNames(prefixCls, className, {
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-bordered`]: bordered,
    });
    if (loading) {
      children = (
        <div>
          <p className={`${prefixCls}-loading-block`} style={{ width: '94%' }} />
          <p>
            <span className={`${prefixCls}-loading-block`} style={{ width: '28%' }} />
            <span className={`${prefixCls}-loading-block`} style={{ width: '62%' }} />
          </p>
          <p>
            <span className={`${prefixCls}-loading-block`} style={{ width: '22%' }} />
            <span className={`${prefixCls}-loading-block`} style={{ width: '66%' }} />
          </p>
          <p>
            <span className={`${prefixCls}-loading-block`} style={{ width: '56%' }} />
            <span className={`${prefixCls}-loading-block`} style={{ width: '39%' }} />
          </p>
          <p>
            <span className={`${prefixCls}-loading-block`} style={{ width: '21%' }} />
            <span className={`${prefixCls}-loading-block`} style={{ width: '15%' }} />
            <span className={`${prefixCls}-loading-block`} style={{ width: '40%' }} />
          </p>
        </div>
      )
    }

    return (
      <div className={cls} {...others}>
        <div className={`${prefixCls}-body`} style={bodyStyle}>
          {children}
        </div>
      </div>
    )
  }
Card.propTypes = {
  loading: PropTypes.bool,
  bordered: PropTypes.bool,
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  bodyStyle: PropTypes.object,
}
Card.defaultProps = {
  loading: false,
  prefixCls: 'mff-card',
  bordered: true,
}
export default Card