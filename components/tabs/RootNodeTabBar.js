/**
 * Created by Freeman on 2016/12/23.
 */
import React, {Component} from 'react';
import classNames from 'classnames';
import ScrollableTabBar from './ScrollableTabBar'
function rootNodeEnhance() {
  return Comp => {
    return class RootNode extends Component {

      constructor(props) {
        super(props)
      }

      render(){
        const {style, prefixCls, className} = this.props;

        const cls = classNames({
          [`${prefixCls}-bar`]: true,
          [className]: !!className
        })
        return (
            <div
                role="tablist"
                className={cls}
                ref="root"
                style={style}
                tabIndex="0"
            >
             <Comp {...this.props}/>
            </div>
        )
      }
    };
  }
}

export default rootNodeEnhance()(ScrollableTabBar)