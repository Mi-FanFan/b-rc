/**
 * Created by Freeman on 2016/12/21.
 */
import React, {Component, PropTypes} from 'react'
import '../styles/Tab.css'
class Tab extends Component {
  constructor(props) {
    super(props)
    this.onTabClick = this.onTabClick.bind(this)
  }

  onTabClick(){
    const {onTabClick} = this.props
    onTabClick(key)
  }

  render() {
    const {key,activeKey,disabled,prefixCls,children} = this.props;
    let cls = activeKey === key?`${prefixCls}-tab-active`:'';
    let event = {};
    if (disabled){
      cls += ` ${prefixCls}-tab-disabled`;
    }else {
      event = {
        onClick:() =>this.onTabClick(key)
      };
    }
    const ref = {};
    if (activeKey === key){
      ref.ref = 'activeTab';
    }
    return (
      <div
        role="tab"
        aria-disabled={disabled ? 'true':'false'}
        aria-selected={activeKey === key?'true':'false'}
        {...event}
        className={cls}
        key={key}
        {...ref}
      >
        {children}
      </div>
    )
  }
}
Tab.propTypes = {
  key:PropTypes.string.isRequired,
  onTabClick:PropTypes.func.isRequired,
  disabled:PropTypes.bool,
  activeKey:PropTypes.string.isRequired,
  prefixCls:PropTypes.string,
}

export default Tab