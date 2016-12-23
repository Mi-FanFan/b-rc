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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabBar = function (_Component) {
  (0, _inherits3.default)(TabBar, _Component);

  function TabBar(props) {
    (0, _classCallCheck3.default)(this, TabBar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TabBar.__proto__ || (0, _getPrototypeOf2.default)(TabBar)).call(this, props));

    _this.getTabs = _this.getTabs.bind(_this);
    _this.onTabClick = _this.onTabClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(TabBar, [{
    key: 'onTabClick',
    value: function onTabClick(key) {
      var onTabClick = this.props.onTabClick;

      onTabClick(key);
    }
  }, {
    key: 'getTabs',
    value: function getTabs() {
      var _this2 = this;

      var _props = this.props,
          panels = _props.panels,
          activeKey = _props.activeKey,
          prefixCls = _props.prefixCls;

      var rst = [];
      _react2.default.Children.forEach(panels, function (child) {
        if (!child) {
          return;
        }
        var key = child.key;
        var cls = activeKey === key ? prefixCls + '-tab-active' : '';
        cls += ' ' + prefixCls + '-tab';
        var events = {};
        if (child.props.disabled) {
          cls += ' ' + prefixCls + '-tab-disabled';
        } else {
          events = {
            onClick: function onClick() {
              return _this2.onTabClick(key);
            }
          };
        }
        var ref = {};
        if (activeKey === key) {
          ref.ref = 'activeTab';
        }

        rst.push(_react2.default.createElement(
          'div',
          (0, _extends3.default)({
            role: 'tab',
            'aria-disabled': child.props.disabled ? 'true' : 'false',
            'aria-selected': activeKey === key ? 'true' : 'false'
          }, events, {
            className: cls,
            key: key
          }, ref),
          child.props.tab
        ));
      });

      return rst;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.getTabs()
      );
    }
  }]);
  return TabBar;
}(_react.Component); /**
                      * Created by Freeman on 2016/12/21.
                      */


TabBar.propTypes = {
  prefixCls: _react.PropTypes.string,
  onTabClick: _react.PropTypes.func.isRequired,
  activeKey: _react.PropTypes.string,
  panels: _react.PropTypes.any,
  style: _react.PropTypes.any,
  inkBarAnimated: _react.PropTypes.bool,
  tabBarPosition: _react.PropTypes.string
};

TabBar.defaultProps = {
  style: {},
  inkBarAnimated: true,
  tabBarPosition: 'top'
};

exports.default = TabBar;
module.exports = exports['default'];