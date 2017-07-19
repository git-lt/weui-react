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

var Button = _react2.default.createClass({
  displayName: 'Button',
  clickEv: function clickEv(e) {
    var _props = this.props,
        href = _props.href,
        onClick = _props.onClick;

    !!href && (window.location.href = href);
    !!onClick && onClick(e);
  },
  render: function render() {
    var _classNames;

    var _props2 = this.props,
        className = _props2.className,
        type = _props2.type,
        children = _props2.children,
        text = _props2.text,
        disabled = _props2.disabled,
        actionType = _props2.actionType,
        mini = _props2.mini,
        plain = _props2.plain,
        loading = _props2.loading,
        others = _objectWithoutProperties(_props2, ['className', 'type', 'children', 'text', 'disabled', 'actionType', 'mini', 'plain', 'loading']);

    var cls = (0, _classnames2.default)('weui-btn', (_classNames = {
      'weui-btn_disabled': disabled,
      'weui-btn_mini': mini,
      'packagemainbackground': type === 'primary' && !plain,
      'maincolor mainbordercolor': plain && type === 'primary'
    }, _defineProperty(_classNames, 'weui-btn_' + type, true), _defineProperty(_classNames, 'weui-btn_plain-' + type, plain), _defineProperty(_classNames, 'weui-btn_loading', loading), _defineProperty(_classNames, className, className), _classNames));

    return _react2.default.createElement(
      'button',
      _extends({ className: cls, disabled: disabled }, others, { type: actionType, onClick: this.clickEv }),
      loading && _react2.default.createElement('i', { className: 'weui-loading' }),
      text || children
    );
  }
});

Button.propTypes = {
  disabled: _react2.default.PropTypes.bool,
  type: _react2.default.PropTypes.string,
  mini: _react2.default.PropTypes.bool,
  plain: _react2.default.PropTypes.bool,
  text: _react2.default.PropTypes.string,
  loading: _react2.default.PropTypes.bool,
  href: _react2.default.PropTypes.string,
  actionType: _react2.default.PropTypes.string
};

Button.defaultProps = {
  disabled: false, // 是否禁用
  type: 'default', // 样式主题：default / primary / warn
  mini: false, // 大小是否是 mini
  plain: false, // 是否是边框按钮
  text: '', // 按钮文字
  href: '', // 跳转链接
  loading: false, // 是否显示loading
  actionType: 'button' // 按钮类型 type=buttton / type=reset
};

exports.default = Button;