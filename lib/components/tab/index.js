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

var _tabItem = require('./tab-item');

var _tabItem2 = _interopRequireDefault(_tabItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tab = _react2.default.createClass({
  displayName: 'Tab',
  render: function render() {
    var _props = this.props,
        lineWidth = _props.lineWidth,
        lineLeft = _props.lineLeft,
        lineHeight = _props.lineHeight,
        innerWidth = _props.innerWidth,
        lineColor = _props.lineColor,
        bgColor = _props.bgColor,
        children = _props.children;

    var lineSty = { width: lineWidth, height: lineHeight };

    lineColor && (lineSty.backgroundColor = lineColor);

    return _react2.default.createElement(
      'div',
      { className: 'mt-tab', style: { backgroundColor: bgColor } },
      _react2.default.createElement(
        'div',
        { className: 'mt-tab-inner', style: { width: innerWidth } },
        children,
        !!lineWidth && _react2.default.createElement(
          'div',
          { className: 'mt-tab-ink-bar', style: { width: 100 / children.length + '%', left: lineLeft } },
          _react2.default.createElement('span', { className: 'mt-tab-ink-bar-inner mainbackground', style: _extends({}, lineSty) })
        )
      )
    );
  }
});

Tab.propTypes = {
  bgColor: _react2.default.PropTypes.string,
  lineWidth: _react2.default.PropTypes.string,
  lineLeft: _react2.default.PropTypes.string,
  lineHeight: _react2.default.PropTypes.string,
  innerWidth: _react2.default.PropTypes.string,
  lineColor: _react2.default.PropTypes.string
};

Tab.defaultProps = {
  bgColor: 'transparent',
  lineWidth: '100%',
  lineLeft: '0',
  lineHeight: '2px',
  innerWidth: '100%',
  lineColor: ''
};

Tab.TabItem = _tabItem2.default;

exports.default = Tab;