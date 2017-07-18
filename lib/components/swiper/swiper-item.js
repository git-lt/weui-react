'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwiperItem = _react2.default.createClass({
  displayName: 'SwiperItem',
  render: function render() {
    var className = this.props.className;


    var cls = (0, _classnames2.default)('mt-swiper-item', (0, _defineProperty3.default)({}, className, className));

    return _react2.default.createElement(
      'div',
      { className: cls },
      this.props.children
    );
  }
});

exports.default = SwiperItem;