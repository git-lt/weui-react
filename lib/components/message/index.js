'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pubsubJs = require('pubsub-js');

var _pubsubJs2 = _interopRequireDefault(_pubsubJs);

var _dialog = require('../dialog');

var _dialog2 = _interopRequireDefault(_dialog);

var _toast = require('../toast');

var _toast2 = _interopRequireDefault(_toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SHOW_DIALOG = 'SHOW_DIALOG';
var HIDE_DIALOG = 'HIDE_DIALOG';
var SHOW_TOAST = 'SHOW_TOAST';
var HIDE_TOAST = 'HIDE_TOAST';

var TYPES = ['success', 'loading', 'warning', 'success', 'cancel'];

var Message = _react2.default.createClass({
  displayName: 'Message',
  getInitialState: function getInitialState() {
    return {
      dialog: {},
      toast: {}
    };
  },
  componentDidMount: function componentDidMount() {
    _pubsubJs2.default.subscribe(SHOW_DIALOG, this.showDialog);
    _pubsubJs2.default.subscribe(HIDE_DIALOG, this.hideDialog);
    _pubsubJs2.default.subscribe(SHOW_TOAST, this.showToast);
    _pubsubJs2.default.subscribe(HIDE_TOAST, this.hideToast);
  },
  showDialog: function showDialog(e, options) {
    var t = typeof options === 'undefined' ? 'undefined' : _typeof(options);
    if (t === 'string' || t === 'object' && t._isReactElement) {
      options = { message: options };
    }
    options.show = true;
    if (!options.title) options.title = '提示';
    if (!options.buttons && options.cloaseable !== false) options.buttons = [{ label: '知道了', onClick: function onClick(e) {
        _pubsubJs2.default.publish(HIDE_DIALOG);
        e.preventDefault();
      } }];
    this.setState({ dialog: _extends({}, options) });
  },
  hideDialog: function hideDialog() {
    var dialog = this.state.dialog;
    dialog.show = false;
    this.setState({ dialog: dialog });
  },
  showToast: function showToast(e, options) {
    var t = typeof options === 'undefined' ? 'undefined' : _typeof(options);
    if (t === 'string' || t === 'object' && t._isReactElement) {
      options = { message: options };
    }
    options.show = true;
    this.setState({ toast: _extends({}, options) });

    if ('loading' === options.type) return;

    var duration = options.duration || 2;
    setTimeout(this.hideToast, duration * 1000);
  },
  hideToast: function hideToast() {
    var toast = this.state.toast;
    toast.show = false;
    this.setState({ toast: toast });
  },


  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_dialog2.default, this.state.dialog),
      _react2.default.createElement(_toast2.default, this.state.toast)
    );
  }
});

var dialog = {
  show: function show(options) {
    _pubsubJs2.default.publish(SHOW_DIALOG, options);
  },
  hide: function hide() {
    _pubsubJs2.default.publish(HIDE_DIALOG);
  }
};

var toast = {
  show: function show(options) {
    _pubsubJs2.default.publish(SHOW_TOAST, options);
  },
  hide: function hide() {
    _pubsubJs2.default.publish(HIDE_TOAST);
  }
};

// 加点糖
TYPES.forEach(function (v) {
  toast[v] = function (options) {
    var opt = { message: options, type: v };
    _pubsubJs2.default.publish(SHOW_TOAST, opt);
  };
});

Message.dialog = dialog;
Message.toast = toast;

exports.default = Message;