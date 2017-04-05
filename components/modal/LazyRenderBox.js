/**
 * Created by Freeman on 2017/4/5.
 */
import React, { Component, PropTypes } from 'react'
import assign from 'object-assign'
class LazyRenderBox extends Component {

  shouldComponentUpdate (nextProps) {
    return !!nextProps.hiddenClassName || !!nextProps.visible
  }

  render () {
    let className = this.props.className
    if (!!this.props.hiddenClassName && !this.props.visible) {
      className += ` ${this.props.hiddenClassName}`
    }
    const props = assign({}, this.props)
    delete props.hiddenClassName
    delete props.visible
    props.className = className
    return <div {...props} />
  }
}
LazyRenderBox.propTypes = {
  className: PropTypes.string,
  visible: PropTypes.bool,
  hiddenClassName: PropTypes.string,
  role: PropTypes.string,
  style: PropTypes.object
}

export default LazyRenderBox