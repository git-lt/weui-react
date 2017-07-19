'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defIcons = {
  'warning': _react2.default.createElement('i', { className: 'weui-icon-warn weui-icon_msg-primary mt-tip-hd-icon' }),
  'success': _react2.default.createElement('i', { className: 'weui-icon-success mt-tip-hd-icon' }),
  'error': _react2.default.createElement('i', { className: 'weui-icon-cancel mt-tip-hd-icon' }),
  'info': _react2.default.createElement('i', { className: 'weui-icon-info-circle mt-tip-hd-icon' })
};

var Tip = _react2.default.createClass({
  displayName: 'Tip',
  getInitialState: function getInitialState() {
    return { show: this.props.show };
  },
  closeEv: function closeEv() {
    this.setState({ show: false });
  },
  render: function render() {
    var _classNames;

    var _props = this.props,
        message = _props.message,
        icon = _props.icon,
        closable = _props.closable,
        duration = _props.duration,
        type = _props.type,
        show = _props.show,
        children = _props.children,
        className = _props.className,
        others = _objectWithoutProperties(_props, ['message', 'icon', 'closable', 'duration', 'type', 'show', 'children', 'className']);

    !icon && (icon = defIcons[type]);

    var cls = (0, _classnames2.default)('mt-tip', (_classNames = {}, _defineProperty(_classNames, 'mt-tip_' + type, true), _defineProperty(_classNames, className, className), _classNames));

    var sty = {};
    !this.state.show && (sty.display = 'none');

    return _react2.default.createElement(
      'div',
      { className: cls, style: sty },
      _react2.default.createElement(
        'div',
        { className: 'mt-tip-inner' },
        !!icon && _react2.default.createElement(
          'div',
          { className: 'mt-tip-hd' },
          icon
        ),
        _react2.default.createElement(
          'div',
          { className: 'mt-tip-bd' },
          message || children
        ),
        closable && _react2.default.createElement(
          'div',
          { className: 'mt-tip-ft' },
          _react2.default.createElement('i', { className: 'iconfont icon-xinjiantijianren mt-tip-ft-icon', onClick: this.closeEv })
        )
      )
    );
  }
});

Tip.propTypes = {
  message: _react2.default.PropTypes.any,
  icon: _react2.default.PropTypes.any,
  closable: _react2.default.PropTypes.bool,
  duration: _react2.default.PropTypes.number,
  type: _react2.default.PropTypes.string,
  show: _react2.default.PropTypes.bool
};

Tip.defaultProps = {
  message: '', // 消息内容，可以是任意内容
  icon: '', // 消息提示图标
  closable: false, // 是否显示关闭图标
  duration: 0, // 指定时长之后自动关闭
  type: 'warning', // warning/info/success/error/default
  show: true // 是否显示
};

exports.default = Tip;