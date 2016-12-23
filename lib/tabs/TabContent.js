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
var TabContent = function (_Component) {
  (0, _inherits3.default)(TabContent, _Component);

  function TabContent(props) {
    (0, _classCallCheck3.default)(this, TabContent);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TabContent.__proto__ || (0, _getPrototypeOf2.default)(TabContent)).call(this, props));

    _this.renderTabPanes = _this.renderTabPanes.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(TabContent, [{
    key: 'renderTabPanes',
    value: function renderTabPanes() {
      var _props = this.props,
          children = _props.children,
          activeKey = _props.activeKey,
          prefixCls = _props.prefixCls;

      var renderChildren = [];
      _react2.default.Children.forEach(children, function (child) {
        if (!child) {
          return;
        }
        var key = child.key;
        var active = activeKey === key;
        renderChildren.push(_react2.default.cloneElement(child, {
          active: active,
          rootPrefixCls: prefixCls
        }));
      });
      return renderChildren;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          prefixCls = _props2.prefixCls,
          children = _props2.children,
          activeKey = _props2.activeKey,
          style = _props2.style;

      var classes = (0, _classnames2.default)((0, _defineProperty3.default)({}, prefixCls + '-content', true));
      return _react2.default.createElement(
        'div',
        {
          className: classes,
          style: style
        },
        this.renderTabPanes()
      );
    }
  }]);
  return TabContent;
}(_react.Component);

TabContent.propTypes = {
  prefixCls: _react.PropTypes.string,
  activeKey: _react.PropTypes.string,
  animated: _react.PropTypes.bool,
  style: _react.PropTypes.any
};

exports.default = TabContent;
module.exports = exports['default'];