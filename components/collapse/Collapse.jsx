import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon'
export default class Collapse extends Component {

  constructor(props) {
    super(props)
    this.closeCollapsible = this.closeCollapsible.bind(this)
    this.handleTriggerClick = this.handleTriggerClick.bind(this)
    this.whichTransitionEnd = this.whichTransitionEnd.bind(this)
    this.closeCollapsible = this.closeCollapsible.bind(this)
    this.openCollapsible = this.openCollapsible.bind(this)
    this.makeResponsive = this.makeResponsive.bind(this)
    this.prepareToOpen = this.prepareToOpen.bind(this)
    this.renderNonClickableTriggerElement = this.renderNonClickableTriggerElement.bind(this)
    this.state = {
      isClosed: !props.open,
      shouldSwitchAutoOnNextCycle: false,
      height: props.open ? 'auto' : 0,
      transition: props.open ? 'none' : 'height ' + props.transitionTime + 'ms ' + props.easing,
      hasBeenOpened: props.open,
      overflow: props.open ? props.overflowWhenOpen : 'hidden'
    }
  }


  // Taken from https://github.com/EvandroLG/transitionEnd/
  // Determines which prefixed event to listen for
  whichTransitionEnd(element) {
    const transitions = {
      'WebkitTransition': 'webkitTransitionEnd',
      'MozTransition': 'transitionend',
      'OTransition': 'oTransitionEnd otransitionend',
      'transition': 'transitionend'
    };

    for (let t in transitions) {
      if (element.style[t] !== undefined) {
        return transitions[t];
      }
    }
  }

  componentDidMount() {
    //Set up event listener to listen to transitionend so we can switch the height from fixed pixel to auto for much responsiveness;
    //TODO:  Once Synthetic transitionend events have been exposed in the next release of React move this funciton to a function handed to the onTransitionEnd prop

    this.refs.outer.addEventListener(this.whichTransitionEnd(this.refs.outer), (event) => {
      if (this.state.isClosed === false) {
        this.setState({
          shouldSwitchAutoOnNextCycle: true
        });
      }

    });
  }

  componentDidUpdate(prevProps) {

    if (this.state.shouldSwitchAutoOnNextCycle === true && this.state.isClosed === false) {
      //Set the height to auto to make compoenent re-render with the height set to auto.
      //This way the dropdown will be responsive and also change height if there is another dropdown within it.
      this.makeResponsive();
    }

    if (this.state.shouldSwitchAutoOnNextCycle === true && this.state.isClosed === true) {
      this.prepareToOpen();
    }

    //If there has been a change in the open prop (controlled by accordion)
    if (prevProps.open != this.props.open) {
      if (this.props.open === true) {
        this.openCollapsible();
      }
      else {
        this.closeCollapsible();
      }
    }
  }


  handleTriggerClick(event) {

    event.preventDefault();

    if (this.props.triggerDisabled) {
      return
    }

    if (this.props.handleTriggerClick) {
      this.props.handleTriggerClick(this.props.accordionPosition);
    } else {
      if (this.state.isClosed === true) {
        this.openCollapsible();
      } else {
        this.closeCollapsible();
      }
    }

  }

  closeCollapsible() {
    this.setState({
      isClosed: true,
      shouldSwitchAutoOnNextCycle: true,
      height: this.refs.inner.offsetHeight,
      overflow: 'hidden',
    }, this.props.onClose);
  }

  openCollapsible() {
    this.setState({
      height: this.refs.inner.offsetHeight,
      transition: 'height ' + this.props.transitionTime + 'ms ' + this.props.easing,
      isClosed: false,
      hasBeenOpened: true
    }, this.props.onOpen);
  }

  makeResponsive() {
    this.setState({
      height: 'auto',
      transition: 'none',
      shouldSwitchAutoOnNextCycle: false,
      overflow: this.props.overflowWhenOpen
    });
  }

  prepareToOpen() {
    //The height has been changes back to fixed pixel, we set a small timeout to force the CSS transition back to 0 on the next tick.
    window.setTimeout(() => {
      this.setState({
        height: 0,
        shouldSwitchAutoOnNextCycle: false,
        transition: 'height ' + this.props.transitionTime + 'ms ' + this.props.easing
      });
    }, 50);
  }

  renderNonClickableTriggerElement() {
    if (this.props.triggerSibling) {
      return (
        <span className={this.props.prefixCls + "-trigger-sibling"}>{this.props.triggerSibling}</span>
      )
    }

    return null;
  }

  render() {

    const {triggerDisabled, triggerWhenOpen, prefixCls, triggerOpenedClassName, className, openedClassName, lazyRender, contentOuterClassName, contentInnerClassName,} = this.props;

    const dropdownStyle = {
      height: this.state.height,
      WebkitTransition: this.state.transition,
      msTransition: this.state.transition,
      transition: this.state.transition,
      overflow: this.state.overflow
    }

    const openClass = this.state.isClosed ? 'is-closed' : 'is-open';
    const disabledClass = triggerDisabled ? 'is-disabled' : ''

    //If user wants different text when tray is open
    const trigger = (this.state.isClosed === false) && (triggerWhenOpen !== undefined) ? triggerWhenOpen : this.props.trigger;

    // Don't render children until the first opening of the Collapsible if lazy rendering is enabled
    let children = this.props.children;
    if (lazyRender)
      if (!this.state.hasBeenOpened)
        children = null;

    const triggerClassName = classNames({
      [`${prefixCls}-trigger`]: true,
      [`${triggerOpenedClassName}`]: !this.state.isClosed
    }, openClass, disabledClass)

    const outerCls = classNames({
      [`${prefixCls}-contentOuter`]: true,
    }, contentOuterClassName)
    const innerCls = classNames({
      [`${prefixCls}-contentInner`]: true,
    }, contentInnerClassName)
    const cls = classNames(prefixCls, {
      [`${className}`]: this.state.isClosed,
      [`${openedClassName}`]: !this.state.isClosed
    })
    return (
      <div
        className={cls}>
        <span
          className={triggerClassName}
          onClick={this.handleTriggerClick}
        >
          {trigger}
          <Icon type={this.state.isClosed?'down':'up'} />
        </span>

        {this.renderNonClickableTriggerElement()}
        <div
          className={outerCls}
          ref="outer"
          style={dropdownStyle}
        >
          <div
            className={innerCls}
            ref="inner"
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
}
Collapse.propTypes = {
  transitionTime: PropTypes.number,
  easing: PropTypes.string,
  open: PropTypes.bool,
  prefixCls: PropTypes.string,
  openedClassName: PropTypes.string,
  triggerClassName: PropTypes.string,
  triggerOpenedClassName: PropTypes.string,
  contentOuterClassName: PropTypes.string,
  contentInnerClassName: PropTypes.string,
  accordionPosition: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleTriggerClick: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  trigger: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  triggerWhenOpen: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  triggerDisabled: PropTypes.bool,
  lazyRender: PropTypes.bool,
  overflowWhenOpen: PropTypes.oneOf([
    'hidden',
    'visible',
    'auto',
    'scroll',
    'inherit',
    'initial',
    'unset',
  ]),
  triggerSibling: PropTypes.element
}
Collapse.defaultProps = {
  transitionTime: 400,
  easing: 'linear',
  open: false,
  prefixCls: 'mff-collapse',
  triggerDisabled: false,
  lazyRender: false,
  overflowWhenOpen: 'hidden',
  openedClassName: '',
  triggerClassName: '',
  triggerOpenedClassName: '',
  contentOuterClassName: '',
  contentInnerClassName: '',
  className: '',
  triggerSibling: null,
  onOpen: () => {
  },
  onClose: () => {
  },
}
