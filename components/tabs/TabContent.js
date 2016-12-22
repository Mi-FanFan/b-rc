/**
 * Created by Freeman on 2016/12/21.
 */
import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'
class TabContent extends Component {
  constructor(props) {
    super(props)
    this.renderTabPanes = this.renderTabPanes.bind(this)
  }

  renderTabPanes(){
    const {children,activeKey,prefixCls} = this.props;
    const renderChildren = [];
    React.Children.forEach(children,child =>{
      if(!child){
        return;
      }
      const key = child.key;
      const active = activeKey === key;
      renderChildren.push(
        React.cloneElement(child,{
          active,
          rootPrefixCls:prefixCls
        })
      )
    })
    return renderChildren;
  }


  render() {
    const {prefixCls,children,activeKey,style} = this.props;
    const classes = classNames({
      [`${prefixCls}-content`]:true,

    })
    return (
      <div
        className={classes}
        style={style}
      >
        {this.renderTabPanes()}
      </div>
    )
  }
}
TabContent.propTypes = {
  prefixCls:PropTypes.string,
  activeKey:PropTypes.string,
  animated:PropTypes.bool,
  style:PropTypes.any,
}

export default TabContent