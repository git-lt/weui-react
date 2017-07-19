'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Flex = _react2.default.createClass({
  displayName: 'Flex',
  render: function render() {
    var _props = this.props,
        gutter = _props.gutter,
        options = _props.options,
        children = _props.children,
        others = _objectWithoutProperties(_props, ['gutter', 'options', 'children']);

    return _react2.default.createElement(
      'div',
      _extends({ 'data-flex': options }, others),
      children
    );
  }
});

Flex.propTypes = {
  gutter: _react2.default.PropTypes.number,
  options: _react2.default.PropTypes.string
};

Flex.defaultProps = {
  gutter: 20,
  options: ''
};

exports.default = Flex;

/**
options为以下取值:
  row: 子元素行显示
  column: 子元素列显示
  center: 子元素水平垂直居中
  wrap: 子元素如果是有固定宽度或高度，超出换行显示
  main-start: 主轴起始对齐
  main-center: 主轴居中对齐
  main-end: 主轴末尾对齐
  maine-between: 主轴两端对齐
  main-around: 主轴散列对齐
  cross-start: 侧轴起始对齐
  cross-center: 侧轴居中对齐
  cross-end: 侧轴末尾对齐
  cross-between: 侧轴两端对齐
  cross-around: 侧轴散列对齐
  cross-stretch: 侧轴拉伸对齐
 */