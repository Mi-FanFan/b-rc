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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ScrollableTabBar = require('./ScrollableTabBar');

var _ScrollableTabBar2 = _interopRequireDefault(_ScrollableTabBar);

var _TabContent = require('./TabContent');

var _TabContent2 = _interopRequireDefault(_TabContent);

var _TabPane = require('./TabPane');

var _TabPane2 = _interopRequireDefault(_TabPane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getDefaultActiveKey(props) {
  var activeKey = void 0;
  _react2.default.Children.forEach(props.children, function (child) {
    if (child && !activeKey && !child.props.disabled) {
      activeKey = child.key;
    }
  });
} /**
   * Created by Freeman on 2016/12/20.
   */

var Tabs = function (_Component) {
  (0, _inherits3.default)(Tabs, _Component);

  function Tabs(props) {
    (0, _classCallCheck3.default)(this, Tabs);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Tabs.__proto__ || (0, _getPrototypeOf2.default)(Tabs)).call(this, props));

    _this.setActiveKey = _this.setActiveKey.bind(_this);
    _this.handleTabClick = _this.handleTabClick.bind(_this);
    _this.getInitState = _this.getInitState.bind(_this);
    _this.state = {
      activeKey: _this.getInitState(props)
    };
    return _this;
  }

  (0, _createClass3.default)(Tabs, [{
    key: 'getInitState',
    value: function getInitState(props) {
      var activeKey = void 0;
      if ('activeKey' in props) {
        activeKey = props.activeKey;
      } else if ('defaultActiveKey' in props) {
        activeKey = props.defaultActiveKey;
      } else {
        activeKey = getDefaultActiveKey(props);
      }
      return activeKey;
    }
  }, {
    key: 'setActiveKey',
    value: function setActiveKey(activeKey) {
      if (this.state.activeKey !== activeKey) {
        if (!('activeKey' in this.props)) {
          this.setState({
            activeKey: activeKey
          });
        }
      }
    }
  }, {
    key: 'handleTabClick',
    value: function handleTabClick(activeKey) {
      this.setActiveKey(activeKey);
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          tabBarPosition = _props.tabBarPosition,
          className = _props.className,
          style = _props.style,
          children = _props.children;

      var cls = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls, 1), (0, _defineProperty3.default)(_classNames, prefixCls + '-' + tabBarPosition, 1), (0, _defineProperty3.default)(_classNames, className, !!className), _classNames));

      return _react2.default.createElement(
        'div',
        {
          className: cls,
          style: style
        },
        _react2.default.createElement(_ScrollableTabBar2.default, {
          activeKey: this.state.activeKey,
          panels: children,
          key: 'tabBar',
          onTabClick: this.handleTabClick
        }),
        _react2.default.createElement(_TabContent2.default, {
          key: 'tabContent',
          activeKey: this.state.activeKey,
          children: children
        })
      );
    }
  }]);
  return Tabs;
}(_react.Component);

Tabs.propTypes = {
  children: _react.PropTypes.any,
  prefixCls: _react.PropTypes.string,
  className: _react.PropTypes.string,
  tabBarPosition: _react.PropTypes.string,
  style: _react.PropTypes.object
};

Tabs.defaultProps = {
  prefixCls: 'mi-tabs',
  destroyInactiveTabPane: false,
  tabBarPosition: 'top',
  style: {}
};

Tabs.Panel = _TabPane2.default;
exports.default = Tabs;
module.exports = exports['default'];