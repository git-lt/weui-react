'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Badge = _react2.default.createClass({
  displayName: 'Badge',
  render: function render() {
    var _props = this.props,
        text = _props.text,
        children = _props.children,
        className = _props.className,
        others = (0, _objectWithoutProperties3.default)(_props, ['text', 'children', 'className']);


    var cls = (0, _classnames2.default)('weui-badge', (0, _defineProperty3.default)({
      'weui-badge_dot': !text && !children
    }, className, className));

    return _react2.default.createElement(
      'span',
      (0, _extends3.default)({ className: cls }, others),
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