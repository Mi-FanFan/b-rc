/**
 * Created by Freeman on 2016/12/20.
 */
import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'
class Tabs extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
        prefixCls,
        tabBarPosition,
        className,
        style,
    }  = this.props;
    const cls = classNames({
      [prefixCls]: 1,
      [`${prefixCls}-${tabBarPosition}`]: 1,
      [className]: !!className,
    });


    return (
      <div
          className={cls}
          style={style}
      >
        this is unfinished tabs demo
      </div>
    )
  }
}
Tabs.propTypes = {
  children: PropTypes.any,
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  tabBarPosition: PropTypes.string,
  style: PropTypes.object,
}

Tabs.defaultProps = {
  prefixCls: 'mi-tabs',
  destroyInactiveTabPane: false,
  onChange: noop,
  tabBarPosition: 'top',
  style: {},
}

export default Tabs