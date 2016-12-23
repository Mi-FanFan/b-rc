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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Freeman on 2016/12/21.
 */
var TabPane = function (_Component) {
  (0, _inherits3.default)(TabPane, _Component);

  function TabPane(props) {
    (0, _classCallCheck3.default)(this, TabPane);
    return (0, _possibleConstructorReturn3.default)(this, (TabPane.__proto__ || (0, _getPrototypeOf2.default)(TabPane)).call(this, props));
  }

  (0, _createClass3.default)(TabPane, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          active = _props.active,
          className = _props.className,
          style = _props.style,
          children = _props.children;

      var prefixCls = this.props.rootPrefixCls + '-tabpane';
      var cls = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls, 1), (0, _defineProperty3.default)(_classNames, prefixCls + '-inactive', !active), (0, _defineProperty3.default)(_classNames, prefixCls + '-active', active), (0, _defineProperty3.default)(_classNames, className, className), _classNames));
      return _react2.default.createElement(
        'div',
        {
          role: 'tabpanel',
          'aria-hidden': active ? 'false' : 'true',
          className: cls,
          style: style
        },
        children
      );
    }
  }]);
  return TabPane;
}(_react.Component);

TabPane.propTypes = {
  className: _react.PropTypes.string,
  active: _react.PropTypes.bool,
  style: _react.PropTypes.any
};

exports.default = TabPane;
module.exports = exports['default'];