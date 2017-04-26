import React, { Children, cloneElement }from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const Row = (props) => {

  const {type, justify, align, className, gutter, style, children, prefixCls, ...others} = props
  const classes = classNames({
    [prefixCls]: !type,
    [`${prefixCls}-${type}`]: type,
    [`${prefixCls}-${type}-${justify}`]: type && justify,
    [`${prefixCls}-${type}-${align}`]: type && align,
  }, className)
  const rowStyle = (gutter ) > 0 ? {
    marginLeft: (gutter ) / -2,
    marginRight: (gutter ) / -2,
    ...style
  } : style
  const cols = Children.map(children, (col) => {
    if (!col) {
      return null
    }
    if (col.props && (gutter ) > 0) {
      return cloneElement(col, {
        style: assign({}, {
          paddingLeft: (gutter ) / 2,
          paddingRight: (gutter) / 2,
        }, col.props.style),
      })
    }
    return col
  })
  return <div {...others} className={classes} style={rowStyle}>{cols}</div>
}

Row.propTypes = {
  type: PropTypes.string,
  align: PropTypes.string,
  justify: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  gutter: PropTypes.number,
  prefixCls: PropTypes.string,
  style: PropTypes.object,
}
Row.defaultProps = {
  gutter: 0,
  prefixCls: 'mff-row',
}

export default Row