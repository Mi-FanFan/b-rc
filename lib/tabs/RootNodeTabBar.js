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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rootNodeEnhance() {
  return function (Comp) {
    return function (_Component) {
      (0, _inherits3.default)(RootNode, _Component);

      function RootNode(props) {
        (0, _classCallCheck3.default)(this, RootNode);
        return (0, _possibleConstructorReturn3.default)(this, (RootNode.__proto__ || (0, _getPrototypeOf2.default)(RootNode)).call(this, props));
      }

      (0, _createClass3.default)(RootNode, [{
        key: 'render',
        value: function render() {
          var _classNames;

          var _props = this.props,
              style = _props.style,
              prefixCls = _props.prefixCls,
              className = _props.className;


          var cls = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-bar', true), (0, _defineProperty3.default)(_classNames, className, !!className), _classNames));
          return _react2.default.createElement(
            'div',
            {
              role: 'tablist',
              className: cls,
              ref: 'root',
              style: style,
              tabIndex: '0'
            },
            _react2.default.createElement(Comp, this.props)
          );
        }
      }]);
      return RootNode;
    }(_react.Component);
  };
} /**
   * Created by Freeman on 2016/12/23.
   */
exports.default = rootNodeEnhance()(_ScrollableTabBar2.default);
module.exports = exports['default'];