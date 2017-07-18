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

var GridItem = _react2.default.createClass({
  displayName: 'GridItem',
  render: function render() {
    var _props = this.props,
        label = _props.label,
        icon = _props.icon,
        link = _props.link,
        className = _props.className,
        children = _props.children,
        others = (0, _objectWithoutProperties3.default)(_props, ['label', 'icon', 'link', 'className', 'children']);


    var cls = (0, _classnames2.default)('weui-grid', (0, _defineProperty3.default)({}, className, className));

    return _react2.default.createElement(
      'a',
      (0, _extends3.default)({ href: link ? link : 'javascript:;', className: cls }, others),
      !!icon && _react2.default.createElement(
        'div',
        { className: 'weui-grid__icon' },
        icon
      ),
      !!label && _react2.default.createElement(
        'p',
        { className: 'weui-grid__label' },
        label
      ),
      children
    );
  }
});

GridItem.propTypes = {
  label: _react2.default.PropTypes.any,
  icon: _react2.default.PropTypes.any,
  link: _react2.default.PropTypes.string
};

GridItem.defaultProps = {
  label: '',
  icon: '',
  link: ''
};

exports.default = GridItem;