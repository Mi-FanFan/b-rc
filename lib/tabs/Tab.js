'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

require('../styles/Tab.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Freeman on 2016/12/21.
 */
var Tab = function (_Component) {
  (0, _inherits3.default)(Tab, _Component);

  function Tab(props) {
    (0, _classCallCheck3.default)(this, Tab);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Tab.__proto__ || (0, _getPrototypeOf2.default)(Tab)).call(this, props));

    _this.onTabClick = _this.onTabClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Tab, [{
    key: 'onTabClick',
    value: function onTabClick() {
      var onTabClick = this.props.onTabClick;

      onTabClick(key);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          key = _props.key,
          activeKey = _props.activeKey,
          disabled = _props.disabled,
          prefixCls = _props.prefixCls,
          children = _props.children;

      var cls = activeKey === key ? prefixCls + '-tab-active' : '';
      var event = {};
      if (disabled) {
        cls += ' ' + prefixCls + '-tab-disabled';
      } else {
        event = {
          onClick: function onClick() {
            return _this2.onTabClick(key);
          }
        };
      }
      var ref = {};
      if (activeKey === key) {
        ref.ref = 'activeTab';
      }
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          role: 'tab',
          'aria-disabled': disabled ? 'true' : 'false',
          'aria-selected': activeKey === key ? 'true' : 'false'
        }, event, {
          className: cls,
          key: key
        }, ref),
        children
      );
    }
  }]);
  return Tab;
}(_react.Component);

Tab.propTypes = {
  key: _react.PropTypes.string.isRequired,
  onTabClick: _react.PropTypes.func.isRequired,
  disabled: _react.PropTypes.bool,
  activeKey: _react.PropTypes.string.isRequired,
  prefixCls: _react.PropTypes.string
};

exports.default = Tab;
module.exports = exports['default'];