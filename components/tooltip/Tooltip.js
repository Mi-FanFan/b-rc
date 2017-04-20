/**
 * Created by Freeman on 2017/4/20.
 */
import React, { Component,cloneElement } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'
import uuid from 'uuid/v4'


class Tooltip extends Component {
  constructor(props, context) {
    super(props, context);
    this.renderReactTooltip = this.renderReactTooltip.bind(this);
    this._mountNode = null;
    this.toolTipId = `$tooltip_${uuid()}`
  }
  componentDidMount(){
    this._mountNode = document.createElement('div');
    document.body.appendChild(this._mountNode);
    this.renderReactTooltip();
  }
  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this._mountNode);
    this._mountNode = null;
  }
  renderReactTooltip(){
    const {place, type, effect, title,extraClass} = this.props
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      <ReactTooltip className={extraClass} id={this.toolTipId} place={place} type={type} effect={effect}>
        {title}
      </ReactTooltip>
      , this._mountNode
    );
  }

  render(){
    const {children} = this.props
    return (
      cloneElement(children, {'data-for': this.toolTipId, 'data-tip': true})
    )
  }



}
Tooltip.propTypes = {
  type: PropTypes.oneOf(['success', 'warning', 'error', 'info', 'light', 'dark']),
  place: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  effect: PropTypes.oneOf(['float', 'solid']),
  trigger: PropTypes.oneOf(['hover', 'focus', 'click']),
  title: PropTypes.node.isRequired,
  extraClass:PropTypes.string,
}
Tooltip.defaultProps = {
  type: 'dark',
  place: 'top',
  effect: 'solid',
  extraClass:'mff-tooltip'
}
export default Tooltip