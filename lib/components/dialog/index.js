'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _pubsubJs = require('pubsub-js');

var _pubsubJs2 = _interopRequireDefault(_pubsubJs);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var noop = function noop() {};

var Dialog = _react2.default.createClass({
  displayName: 'Dialog',

  getInitialState: function getInitialState() {
    return {
      display: false,
      active: false
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(next, prev) {
    return next.show !== this.state.display ? this.update(next.show) : false;
  },

  update: function update(show) {
    var _this = this;

    this.setState({ display: false, active: true });
    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(function () {
      _this.setState({ display: show, active: show });
      show ? _this.props.onShow() : _this.props.onClose();
    }, show ? 0 : 500);
  },
  renderButtons: function renderButtons() {

    return this.props.buttons.map(function (action, idx) {
      var type = action.type,
          label = action.label,
          others = _objectWithoutProperties(action, ['type', 'label']);

      type = type ? type : 'primary';

      var className = (0, _classnames2.default)({
        'weui-dialog__btn weui-dialog__btn_default': type === 'default',
        'weui-dialog__btn weui-dialog__btn_primary maincolor': type === 'primary'
      });

      return _react2.default.createElement(
        'a',
        _extends({ key: idx, href: 'javascript:;' }, others, { className: className }),
        label
      );
    });
  },
  render: function render() {
    var _props = this.props,
        title = _props.title,
        className = _props.className,
        children = _props.children,
        buttons = _props.buttons,
        closable = _props.closable,
        message = _props.message,
        others = _objectWithoutProperties(_props, ['title', 'className', 'children', 'buttons', 'closable', 'message']);

    var _state = this.state,
        active = _state.active,
        display = _state.display;


    var btnNum = this.props.buttons.length;

    var wrapCls = (0, _classnames2.default)('mt-dialog-wrap', {
      'mt-dialog-wrap__active': active,
      'mt-dialog-wrap__enter': display
    });

    var innerCls = (0, _classnames2.default)('weui-dialog', _defineProperty({}, className, className));

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: wrapCls },
        _react2.default.createElement(
          'div',
          _extends({ className: innerCls }, others, { ref: 'mtDialogCon' }),
          closable && _react2.default.createElement('i', { className: 'weui-icon-cancel weui-dialog__close', onClick: function onClick() {
              return _pubsubJs2.default.publish('HIDE_DIALOG');
            } }),
          !!title && _react2.default.createElement(
            'div',
            { className: 'weui-dialog__hd' },
            _react2.default.createElement(
              'strong',
              { className: 'weui-dialog__title' },
              title
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'weui-dialog__bd' },
            ' ',
            message || children,
            ' '
          ),
          _react2.default.createElement(
            'div',
            { className: 'weui-dialog__ft ' + (btnNum > 2 ? 'weui-dialog__ft_column' : '') },
            ' ',
            this.renderButtons(),
            ' '
          )
        )
      ),
      _react2.default.createElement('div', { className: 'weui-mask mt-dialog-mask', onTouchMove: function onTouchMove(e) {
          e.preventDefault();
        } })
    );
  }
});

Dialog.propTypes = {
  /**
  * buttons: actions buttons
  * exmaple: [{ type:'default/primary', label:'', onClick:()=>{}}]
  */
  buttons: _react2.default.PropTypes.array, // [{ type:'default/primary', label:'', onClick:()=>{}}]
  /**
  * show: diaplay tips
  */
  show: _react2.default.PropTypes.bool,
  /**
  * title: dialog title
  */
  title: _react2.default.PropTypes.string,
  /**
  * onShow: opened callback
  */
  onShow: _react2.default.PropTypes.func,
  /**
  * onShow: opened callback
  */
  onClose: _react2.default.PropTypes.func,
  /**
   * message: anything
   */
  message: _react2.default.PropTypes.any,
  closable: _react2.default.PropTypes.bool
};

Dialog.defaultProps = {
  buttons: [],
  show: false,
  closable: false,
  title: '',
  message: '',
  onShow: noop,
  onClose: noop
};

exports.default = Dialog;