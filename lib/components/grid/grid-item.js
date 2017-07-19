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

var GridItem = _react2.default.createClass({
  displayName: 'GridItem',
  render: function render() {
    var _props = this.props,
        label = _props.label,
        icon = _props.icon,
        link = _props.link,
        className = _props.className,
        children = _props.children,
        others = _objectWithoutProperties(_props, ['label', 'icon', 'link', 'className', 'children']);

    var cls = (0, _classnames2.default)('weui-grid', _defineProperty({}, className, className));

    return _react2.default.createElement(
      'a',
      _extends({ href: link ? link : 'javascript:;', className: cls }, others),
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