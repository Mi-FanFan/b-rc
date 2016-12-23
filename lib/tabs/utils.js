'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by Freeman on 2016/12/22.
 */
var setTransform = exports.setTransform = function setTransform(style, v) {
  style.transform = v;
  style.webkitTransform = v;
  style.mozTransform = v;
};

var isTransformSupported = exports.isTransformSupported = function isTransformSupported(style) {
  return 'transform' in style || 'webkitTransform' in style || 'mozTransform' in style;
};

var getScroll = exports.getScroll = function getScroll(w, top) {
  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
  var method = 'scroll' + (top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      ret = d.body[method];
    }
  }
  return ret;
};