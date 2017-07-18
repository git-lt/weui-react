'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tab = _react2.default.createClass({
  displayName: 'Tab',
  render: function render() {
    var _props = this.props,
        lineWidth = _props.lineWidth,
        lineLeft = _props.lineLeft,
        lineHeight = _props.lineHeight,
        innerWidth = _props.innerWidth,
        bgColor = _props.bgColor,
        children = _props.children;

    var lineSty = { width: lineWidth, height: lineHeight };
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
          _react2.default.createElement('span', { className: 'mt-tab-ink-bar-inner mainbackground', style: (0, _extends3.default)({}, lineSty) })
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
  innerWidth: _react2.default.PropTypes.string
};

Tab.defaultProps = {
  bgColor: 'transparent',
  lineWidth: '100%',
  lineLeft: '0',
  lineHeight: '2px',
  innerWidth: '100%'
};

exports.default = Tab;