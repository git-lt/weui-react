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

var noop = function noop() {};

var TabItem = _react2.default.createClass({
  displayName: 'TabItem',
  clickEv: function clickEv() {
    if (this.props.disabled) return;
    this.props.onClick(this.props.index);
  },
  render: function render() {
    var _props = this.props,
        disabled = _props.disabled,
        height = _props.height,
        index = _props.index,
        activeIndex = _props.activeIndex,
        children = _props.children,
        className = _props.className,
        others = _objectWithoutProperties(_props, ['disabled', 'height', 'index', 'activeIndex', 'children', 'className']);

    var cls = (0, _classnames2.default)('mt-tab-item', _defineProperty({
      'mt-tab-item_active maincolor': !disabled && index === activeIndex,
      'mt-tab-item_disabled': disabled
    }, className, className));

    return _react2.default.createElement(
      'div',
      { className: cls, onClick: this.clickEv, style: { 'lineHeight': height } },
      children
    );
  }
});

TabItem.propTypes = {
  disabled: _react2.default.PropTypes.bool,
  index: _react2.default.PropTypes.number.isRequired,
  activeIndex: _react2.default.PropTypes.number.isRequired,
  onClick: _react2.default.PropTypes.func.isRequired,
  height: _react2.default.PropTypes.string
};

TabItem.defaultProps = {
  disabled: false, // 是否禁用
  index: 0, // 组件索引值
  acitveIndex: 0, // 当前选中的tab索引
  onClick: noop, // 点击事件
  height: '.5rem'
};

exports.default = TabItem;