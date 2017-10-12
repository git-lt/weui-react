'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var indexof = function indexof(arr, obj) {
  if (arr.indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

var findClosest = function findClosest(target, points) {
  var diff = null;
  var current = null;
  var closest = points[0];

  for (var i = 0; i < points.length; i++) {
    diff = Math.abs(target - closest);
    current = Math.abs(target - points[i]);
    if (current < diff) {
      closest = points[i];
    }
  }

  return closest;
};

function getWidth(el) {
  var width = window.getComputedStyle(el, null)['width'];
  if (width === '100%' || width === 'auto') {
    return 0;
  }
  return parseInt(width, 10);
}

var percentage = {
  isNumber: function isNumber(num) {
    return typeof num === 'number';
  },

  of: function of(perc, num) {
    if (percentage.isNumber(perc) && percentage.isNumber(num)) return perc / 100 * num;
  },

  from: function from(part, target) {
    if (percentage.isNumber(part) && percentage.isNumber(target)) return part / target * 100;
  }
};

exports.indexof = indexof;
exports.findClosest = findClosest;
exports.getWidth = getWidth;
exports.percentage = percentage;