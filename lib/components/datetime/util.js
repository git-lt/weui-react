'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.each = each;
exports.trimZero = trimZero;
exports.addZero = addZero;
exports.isLeapYear = isLeapYear;
exports.getMaxDay = getMaxDay;
exports.parseRow = parseRow;
exports.parseDate = parseDate;
exports.getElement = getElement;
exports.toElement = toElement;
exports.removeElement = removeElement;

var _format = require('./format');

var _format2 = _interopRequireDefault(_format);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function each(obj, fn) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (fn.call(obj[key], key, obj[key]) === false) {
        break;
      }
    }
  }
}

function trimZero(val) {
  val = String(val);
  val = val ? parseFloat(val.replace(/^0+/g, '')) : '';
  val = val || 0;
  val = val + '';
  return val;
}

function addZero(val) {
  val = String(val);
  return val.length < 2 ? '0' + val : val;
}

function isLeapYear(year) {
  return year % 100 !== 0 && year % 4 === 0 || year % 400 === 0;
}

function getMaxDay(year, month) {
  year = parseFloat(year);
  month = parseFloat(month);
  if (month === 2) {
    return isLeapYear(year) ? 29 : 28;
  }
  return [4, 6, 9, 11].indexOf(month) >= 0 ? 30 : 31;
}

function parseRow(tmpl, value) {
  return tmpl.replace(/\{value\}/g, value);
}

// parse Date String
function parseDate(format, value) {
  var formatParts = format.split(/[^A-Za-z]+/);
  var valueParts = value.split(/\D+/);
  if (formatParts.length !== valueParts.length) {
    // if it is error date, use current date
    var date = (0, _format2.default)(new Date(), format);
    valueParts = date.split(/\D+/);
  }

  var result = {};

  for (var i = 0; i < formatParts.length; i++) {
    if (formatParts[i]) {
      result[formatParts[i]] = valueParts[i];
    }
  }
  return result;
}

function getElement(expr) {
  return typeof expr === 'string' ? document.querySelector(expr) : expr;
}

function toElement(html) {
  var tempContainer = document.createElement('div');
  tempContainer.innerHTML = html;
  return tempContainer.firstElementChild;
}

function removeElement(el) {
  el && el.parentNode.removeChild(el);
}