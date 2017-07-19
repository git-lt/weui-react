'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SwiperItem = _react2.default.createClass({
  displayName: 'SwiperItem',
  render: function render() {
    var className = this.props.className;


    var cls = (0, _classnames2.default)('mt-swiper-item', _defineProperty({}, className, className));

    return _react2.default.createElement(
      'div',
      { className: cls },
      this.props.children
    );
  }
});

exports.default = SwiperItem;