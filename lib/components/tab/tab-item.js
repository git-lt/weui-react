'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        others = (0, _objectWithoutProperties3.default)(_props, ['disabled', 'height', 'index', 'activeIndex', 'children', 'className']);


    var cls = (0, _classnames2.default)('mt-tab-item', (0, _defineProperty3.default)({
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