'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Badge = _react2.default.createClass({
  displayName: 'Badge',
  render: function render() {
    var _props = this.props,
        text = _props.text,
        children = _props.children,
        className = _props.className,
        others = _objectWithoutProperties(_props, ['text', 'children', 'className']);

    var cls = (0, _classnames2.default)('weui-badge', _defineProperty({
      'weui-badge_dot': !text && !children
    }, className, className));

    return _react2.default.createElement(
      'span',
      _extends({ className: cls }, others),
      text || children
    );
  }
});

Badge.propTypes = {
  text: _react2.default.PropTypes.any
};

Badge.defaultProps = {
  text: '' // 一般使用文本，更复杂的可使用jsx
};

exports.default = Badge;