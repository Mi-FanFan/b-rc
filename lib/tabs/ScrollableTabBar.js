'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames5 = require('classnames');

var _classnames6 = _interopRequireDefault(_classnames5);

var _utils = require('./utils');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TabBar = require('./TabBar');

var _TabBar2 = _interopRequireDefault(_TabBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scrollableEnhance(Comp) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    (0, _inherits3.default)(Scrollable, _Component);

    function Scrollable(props) {
      (0, _classCallCheck3.default)(this, Scrollable);

      var _this = (0, _possibleConstructorReturn3.default)(this, (Scrollable.__proto__ || (0, _getPrototypeOf2.default)(Scrollable)).call(this, props));

      _this.prev = _this.prev.bind(_this);
      _this.next = _this.next.bind(_this);
      _this.setNextPrev = _this.setNextPrev.bind(_this);
      _this.getOffsetWH = _this.getOffsetWH.bind(_this);
      _this.getOffsetLT = _this.getOffsetLT.bind(_this);
      _this.setOffset = _this.setOffset.bind(_this);
      _this.setPrev = _this.setPrev.bind(_this);
      _this.setNext = _this.setNext.bind(_this);
      _this.scrollToActiveTab = _this.scrollToActiveTab.bind(_this);

      _this.offset = 0;
      _this.state = {
        next: false,
        prev: false
      };
      return _this;
    }

    (0, _createClass3.default)(Scrollable, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.componentDidUpdate();
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var props = this.props;
        if (prevProps && prevProps.tabBarPosition !== props.tabBarPosition) {
          this.setOffset(0);
          return;
        }
        var nextPrev = this.setNextPrev();
        // wait next, prev show hide
        /* eslint react/no-did-update-set-state:0 */
        if (this.isNextPrevShown(this.state) !== this.isNextPrevShown(nextPrev)) {
          this.setState({}, this.scrollToActiveTab);
        } else {
          // can not use props.activeKey
          if (!prevProps || props.activeKey !== prevProps.activeKey) {
            this.scrollToActiveTab();
          }
        }
      }
    }, {
      key: 'setNextPrev',
      value: function setNextPrev() {
        var navNode = this.refs.nav;
        var navNodeWH = this.getOffsetWH(navNode);
        var navWrapNode = this.refs.navWrap;
        var navWrapNodeWH = this.getOffsetWH(navWrapNode);
        var offset = this.offset;

        var minOffset = navWrapNodeWH - navNodeWH;
        var _state = this.state,
            next = _state.next,
            prev = _state.prev;

        if (minOffset >= 0) {
          next = false;
          this.setOffset(0, false);
          offset = 0;
        } else if (minOffset < offset) {
          next = true;
        } else {
          next = false;
          this.setOffset(minOffset, false);
          offset = minOffset;
        }

        if (offset < 0) {
          prev = true;
        } else {
          prev = false;
        }

        this.setNext(next);
        this.setPrev(prev);
        return {
          next: next,
          prev: prev
        };
      }
    }, {
      key: 'getOffsetWH',
      value: function getOffsetWH(node) {
        var tabBarPosition = this.props.tabBarPosition;
        var prop = 'offsetWidth';
        if (tabBarPosition === 'left' || tabBarPosition === 'right') {
          prop = 'offsetHeight';
        }
        return node[prop];
      }
    }, {
      key: 'getOffsetLT',
      value: function getOffsetLT(node) {
        var tabBarPosition = this.props.tabBarPosition;
        var prop = 'left';
        if (tabBarPosition === 'left' || tabBarPosition === 'right') {
          prop = 'top';
        }
        return node.getBoundingClientRect()[prop];
      }
    }, {
      key: 'setOffset',
      value: function setOffset(offset) {
        var checkNextPrev = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        var target = Math.min(0, offset);
        if (this.offset !== target) {
          this.offset = target;
          var navOffset = {};
          var tabBarPosition = this.props.tabBarPosition;
          var navStyle = this.refs.nav.style;
          var transformSupported = (0, _utils.isTransformSupported)(navStyle);
          if (tabBarPosition === 'left' || tabBarPosition === 'right') {
            if (transformSupported) {
              navOffset = {
                value: 'translate3d(0,' + target + 'px,0)'
              };
            } else {
              navOffset = {
                name: 'top',
                value: target + 'px'
              };
            }
          } else {
            if (transformSupported) {
              navOffset = {
                value: 'translate3d(' + target + 'px,0,0)'
              };
            } else {
              navOffset = {
                name: 'left',
                value: target + 'px'
              };
            }
          }
          if (transformSupported) {
            (0, _utils.setTransform)(navStyle, navOffset.value);
          } else {
            navStyle[navOffset.name] = navOffset.value;
          }
          if (checkNextPrev) {
            this.setNextPrev();
          }
        }
      }
    }, {
      key: 'setPrev',
      value: function setPrev(v) {
        if (this.state.prev !== v) {
          this.setState({
            prev: v
          });
        }
      }
    }, {
      key: 'setNext',
      value: function setNext(v) {
        if (this.state.next !== v) {
          this.setState({
            next: v
          });
        }
      }
    }, {
      key: 'isNextPrevShown',
      value: function isNextPrevShown(state) {
        return state.next || state.prev;
      }
    }, {
      key: 'scrollToActiveTab',
      value: function scrollToActiveTab() {
        var _refs = this.refs,
            activeTab = _refs.activeTab,
            navWrap = _refs.navWrap;

        if (activeTab) {
          var activeTabWH = this.getOffsetWH(activeTab);
          var navWrapNodeWH = this.getOffsetWH(navWrap);
          var offset = this.offset;

          var wrapOffset = this.getOffsetLT(navWrap);
          var activeTabOffset = this.getOffsetLT(activeTab);
          if (wrapOffset > activeTabOffset) {
            offset += wrapOffset - activeTabOffset;
            this.setOffset(offset);
          } else if (wrapOffset + navWrapNodeWH < activeTabOffset + activeTabWH) {
            offset -= activeTabOffset + activeTabWH - (wrapOffset + navWrapNodeWH);
            this.setOffset(offset);
          }
        }
      }
    }, {
      key: 'prev',
      value: function prev() {
        var navWrapNode = this.refs.navWrap;
        var navWrapNodeWH = this.getOffsetWH(navWrapNode);
        var offset = this.offset;

        this.setOffset(offset + navWrapNodeWH);
      }
    }, {
      key: 'next',
      value: function next() {
        var navWrapNode = this.refs.navWrap;
        var navWrapNodeWH = this.getOffsetWH(navWrapNode);
        var offset = this.offset;

        this.setOffset(offset - navWrapNodeWH);
      }
    }, {
      key: 'render',
      value: function render() {
        var _classnames3, _classnames4;

        var _state2 = this.state,
            next = _state2.next,
            prev = _state2.prev;
        var _props = this.props,
            prefixCls = _props.prefixCls,
            scrollAnimated = _props.scrollAnimated;

        var nextButton = void 0;
        var prevButton = void 0;
        var showNextPrev = prev || next;

        if (showNextPrev) {
          var _classnames, _classnames2;

          prevButton = _react2.default.createElement(
            'span',
            {
              onClick: prev ? this.prev : null,
              unselectable: 'unselectable',
              className: (0, _classnames6.default)((_classnames = {}, (0, _defineProperty3.default)(_classnames, prefixCls + '-tab-prev', 1), (0, _defineProperty3.default)(_classnames, prefixCls + '-tab-btn-disabled', !prev), _classnames))
            },
            _react2.default.createElement('span', { className: prefixCls + '-tab-prev-icon' })
          );

          nextButton = _react2.default.createElement(
            'span',
            {
              onClick: next ? this.next : null,
              unselectable: 'unselectable',
              className: (0, _classnames6.default)((_classnames2 = {}, (0, _defineProperty3.default)(_classnames2, prefixCls + '-tab-next', 1), (0, _defineProperty3.default)(_classnames2, prefixCls + '-tab-btn-disabled', !next), _classnames2))
            },
            _react2.default.createElement('span', { className: prefixCls + '-tab-next-icon' })
          );
        }

        var navClassName = prefixCls + '-nav';
        var navClasses = (0, _classnames6.default)((_classnames3 = {}, (0, _defineProperty3.default)(_classnames3, navClassName, true), (0, _defineProperty3.default)(_classnames3, scrollAnimated ? navClassName + '-animated' : navClassName + '-no-animated', true), _classnames3));

        return _react2.default.createElement(
          'div',
          {
            className: (0, _classnames6.default)((_classnames4 = {}, (0, _defineProperty3.default)(_classnames4, prefixCls + '-nav-container', 1), (0, _defineProperty3.default)(_classnames4, prefixCls + '-nav-container-scrolling', showNextPrev), _classnames4)),
            key: 'container',
            ref: 'container'
          },
          prevButton,
          nextButton,
          _react2.default.createElement(
            'div',
            { className: prefixCls + '-nav-wrap', ref: 'navWrap' },
            _react2.default.createElement(
              'div',
              { className: prefixCls + '-nav-scroll' },
              _react2.default.createElement(
                'div',
                { className: navClasses, ref: 'nav' },
                _react2.default.createElement(Comp, this.props)
              )
            )
          )
        );
      }
    }]);
    return Scrollable;
  }(_react.Component), _class.defaultProps = {
    scrollAnimated: true
  }, _temp;
}

exports.default = scrollableEnhance(_TabBar2.default);
module.exports = exports['default'];