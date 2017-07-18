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
        others = (0, _objectWithoutProperties3.default)(_props, ['label', 'desc', 'subDesc', 'icon', 'href', 'isLink', 'className']);


    !!href && (isLink = true);

    var cls = (0, _classnames2.default)('weui-cell', (0, _defineProperty3.default)({
      'weui-cell_access': isLink
    }, className, className));

    return _react2.default.createElement(
      'a',
      (0, _extends3.default)({ className: cls, onClick: this.clickEv }, others, { href: 'javascript:;' }),
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