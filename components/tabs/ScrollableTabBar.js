/**
 * Created by Freeman on 2016/12/21.
 */
import React, {Component, PropTypes} from 'react'

class ScrollableTabBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {children} = this.props;
    return (
      <div>
        {children}
      </div>
    )
  }
}
ScrollableTabBar.propTypes = {
  onTabClick:PropTypes.func.isRequired
}

export default ScrollableTabBar