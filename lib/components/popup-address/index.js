'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _popupPicker = require('../popup-picker');

var _popupPicker2 = _interopRequireDefault(_popupPicker);

var _china_address = require('../picker/china_address.json');

var _china_address2 = _interopRequireDefault(_china_address);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};

var PopupAddress = _react2.default.createClass({
  displayName: 'PopupAddress',
  getAddressName: function getAddressName(v) {
    var a = [];
    _china_address2.default.forEach(function (item) {
      if (item.value == v[0]) a[0] = item.name;
      if (item.value == v[1]) a[1] = item.name;
      if (item.value == v[2]) a[2] = item.name;
    });
    return a.join(' ');
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_popupPicker2.default, _extends({}, this.props, { displayFormat: this.getAddressName }))
    );
  }
});

PopupAddress.propTypes = {
  show: _react2.default.PropTypes.bool,
  label: _react2.default.PropTypes.any,
  displayFormat: _react2.default.PropTypes.func,
  value: _react2.default.PropTypes.array,
  cancelText: _react2.default.PropTypes.string,
  confirmText: _react2.default.PropTypes.string,
  placeholder: _react2.default.PropTypes.string,
  columns: _react2.default.PropTypes.number,
  onChange: _react2.default.PropTypes.func,
  data: _react2.default.PropTypes.array
};

PopupAddress.defaultProps = {
  show: false,
  label: '',
  displayFormat: function displayFormat(v) {
    return v;
  },
  value: [],
  data: _china_address2.default,
  cancelText: '取消',
  confirmText: '确定',
  placeholder: '',
  columns: 3,
  onChange: noop
};

exports.default = PopupAddress;