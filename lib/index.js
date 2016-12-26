'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _backTop = require('./back-top');

Object.defineProperty(exports, 'BackTop', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_backTop).default;
  }
});

var _tabs = require('./tabs');

Object.defineProperty(exports, 'Tabs', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tabs).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }