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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var MarqueeItem = _react2.default.createClass({
  displayName: 'MarqueeItem',
  render: function render() {
    var _props = this.props,
        children = _props.children,
        className = _props.className,
        others = _objectWithoutProperties(_props, ['children', 'className']);

    var cls = (0, _classnames2.default)(_defineProperty({}, className, className));

    return _react2.default.createElement(
      'li',
      { className: cls },
      children
    );
  }
});

exports.default = MarqueeItem;