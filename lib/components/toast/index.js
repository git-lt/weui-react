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

var _mask = require('../mask');

var _mask2 = _interopRequireDefault(_mask);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iconTpls = {
  'loading': _react2.default.createElement('i', { className: 'weui-icon_toast weui-loading' }),
  'success': _react2.default.createElement('i', { className: 'weui-icon_toast weui-icon-success-no-circle' }),
  'cancel': _react2.default.createElement('i', { className: 'weui-icon_toast weui-icon-cancel' })
};
var noop = function noop() {};

var Toast = _react2.default.createClass({
  displayName: 'Toast',

  getInitialState: function getInitialState() {
    return { display: this.props.show };
  },

  componentWillReceiveProps: function componentWillReceiveProps(next) {
    if (next.show !== this.state.display) {
      return this.update(next.show);
    }
    return false;
  },

  update: function update(show) {
    var _this = this;

    this.setState({ display: true });

    setTimeout(function () {
      !show && _this.setState({ display: false });
      show ? _this.props.onShow() : _this.props.onClose();
    }, 400);
  },
  render: function render() {
    var _props = this.props,
        className = _props.className,
        type = _props.type,
        children = _props.children,
        position = _props.position,
        show = _props.show,
        message = _props.message,
        others = (0, _objectWithoutProperties3.default)(_props, ['className', 'type', 'children', 'position', 'show', 'message']);


    var cls = (0, _classnames2.default)('weui-toast', (0, _defineProperty3.default)({
      'mt-toast-enter toast-animated': show && position !== 'top' && position !== 'bottom',
      'mt-toast-leave toast-animated': !show && position !== 'top' && position !== 'bottom',
      'mt-toast-top mt-toast-top-enter animated-y': show && position === 'top',
      'mt-toast-top mt-toast-top-leave animated-y': !show && position === 'top',
      'mt-toast-bottom mt-toast-bottom-enter animated-y': show && position === 'bottom',
      'mt-toast-bottom mt-toast-bottom-leave animated-y': !show && position === 'bottom'
    }, className, className));

    var iconTpl = iconTpls[type] || null;
    if (type == 'warning') message = _react2.default.createElement(
      'span',
      { className: 'weui-toast__content-warning' },
      _react2.default.createElement('i', { className: 'weui-icon-warn weui-icon_msg-primary' }),
      ' ',
      message
    );

    return _react2.default.createElement(
      'div',
      { style: { display: this.state.display ? 'block' : 'none' } },
      _react2.default.createElement(_mask2.default, { transparent: true }),
      _react2.default.createElement(
        'div',
        { className: 'weui-toast-wrap ' + position },
        _react2.default.createElement(
          'div',
          (0, _extends3.default)({ className: cls }, others, { ref: 'mtToast' }),
          iconTpl,
          _react2.default.createElement(
            'p',
            { className: 'weui-toast__content' },
            message || children
          )
        )
      )
    );
  }
});

Toast.propTypes = {
  /**
   * display tips
   */
  show: _react2.default.PropTypes.bool,
  /**
   * type: `default`, `success`, `loading`, 'warning','success','cancel'
   */
  type: _react2.default.PropTypes.string,
  /**
   * position: top`, `bottom`
   */
  position: _react2.default.PropTypes.string,
  /**
   * message: anything
   */
  message: _react2.default.PropTypes.any,
  /**
   * onShow: opened callback
   */
  onShow: _react2.default.PropTypes.func,
  /**
   * onShow: closed callback
   */
  onClose: _react2.default.PropTypes.func
};

Toast.defaultProps = {
  show: false,
  type: 'default',
  position: '',
  message: '',
  onShow: noop,
  onClose: noop
};

exports.default = Toast;