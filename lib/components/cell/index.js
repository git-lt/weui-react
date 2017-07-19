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

var Cell = _react2.default.createClass({
  displayName: 'Cell',
  clickEv: function clickEv() {
    var href = this.props.href;
    !!href && (window.location.href = this.props.href);
  },
  render: function render() {
    var _props = this.props,
        label = _props.label,
        desc = _props.desc,
        subDesc = _props.subDesc,
        icon = _props.icon,
        href = _props.href,
        isLink = _props.isLink,
        className = _props.className,
        others = _objectWithoutProperties(_props, ['label', 'desc', 'subDesc', 'icon', 'href', 'isLink', 'className']);

    !!href && (isLink = true);

    var cls = (0, _classnames2.default)('weui-cell', _defineProperty({
      'weui-cell_access': isLink
    }, className, className));

    return _react2.default.createElement(
      'a',
      _extends({ className: cls, onClick: this.clickEv }, others, { href: 'javascript:;' }),
      !!icon && _react2.default.createElement(
        'div',
        { className: 'weui-cell__hd' },
        icon
      ),
      _react2.default.createElement(
        'div',
        { className: 'weui-cell__bd' },
        _react2.default.createElement(
          'p',
          null,
          label
        ),
        !!subDesc && _react2.default.createElement(
          'span',
          null,
          subDesc
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'weui-cell__ft' },
        desc
      )
    );
  }
});

Cell.propTypes = {
  label: _react2.default.PropTypes.any, // 一般使用文本，更复杂的可使用jsx
  desc: _react2.default.PropTypes.any, // 一般使用文本，更复杂的可使用jsx
  subDesc: _react2.default.PropTypes.any, // 一般使用文本，更复杂的可使用jsx
  icon: _react2.default.PropTypes.any, // 一般使用jsx <i className="icon icon-left" />
  href: _react2.default.PropTypes.string, // 链接地址
  isLink: _react2.default.PropTypes.bool // 是否是链接，如果 href 有值，则isLink自动为true, 显示箭头
};

Cell.defaultProps = {
  label: '',
  desc: '',
  subDesc: '',
  icon: '',
  href: '',
  isLink: false
};

exports.default = Cell;