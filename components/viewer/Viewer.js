/**
 * Created by Freeman on 2016/12/29.
 */
import React, {Component, PropTypes} from 'react'
import Animate from 'rc-animate'
//import classNames from 'classnames'
import {formatPage} from './_util'
class Viewer extends Component {
  constructor(props) {
    super(props)
    this.handleItemClick = this.handleItemClick.bind(this)
    this.handleBack = this.handleBack.bind(this)
    this.state = {
      index: props.startIndex,
      showViewer: false

    }
  }

  handleItemClick(index) {
    this.setState({
      index: index,
      showViewer: true
    })
  }

  handleBack() {
    this.setState({
      showViewer: false
    })
  }

  render() {
    const {prefixCls, data} = this.props;

    const imgListStyle = {};

    return (
      <div className="">
        <div className={`${prefixCls}-img-list`}>
          <ul className={`${prefixCls}-img-container`}>
            {
              data.map((url, index) => (
                <li key={index} className={`${prefixCls}-img-item`} onClick={() => this.handleItemClick(index)}>
                  <img src={url} role="presentation"/>
                </li>
              ))
            }
          </ul>
        </div>
        {
          this.state.showViewer &&
          <Animate component="" transitionName="slide-right">

            <div className="mi-viewer-overlay">
              <div className="mi-view-wrap">
                <div className="mi-viewer-toolbar">
                  <div className="mi-viewer-toolbar-back">
                    <a href="javascript:;" onClick={this.handleBack}>〈</a>
                  </div>
                  <div className="mi-viewer-toolbar-page">
                    <span className="mi-viewer-toolbar-page-current">{formatPage(this.state.index + 1)}</span>
                    <span>/</span>
                    <span className="mi-viewer-toolbar-page-total">{formatPage(data.length)}</span>
                  </div>
                </div>
                <div className="mi-viewer-view">
                  <div className="mi-viewer-imgbox">
                    <ul className="mi-viewer-imglist" style={imgListStyle}>
                      {
                        data.map((url, index) => (
                          <li key={index}>
                            <img src={url} role="presentation"/>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Animate>
        }
      </div>
    )
  }
}
Viewer.propTypes = {
  prefixCls: PropTypes.string,
  startIndex: PropTypes.number,//
  direction: PropTypes.string,//direction
  closeFunction: PropTypes.func,//close callback Function
  data: PropTypes.array.isRequired,//images data
}

Viewer.defaultProps = {
  startIndex: 0,
  direction: 'left',
  prefixCls: 'mi-viewer'
}

export default Viewer