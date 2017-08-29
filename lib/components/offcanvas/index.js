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

var noop = function noop() {};
window.__$mtOffcanvas = window.__$mtOffcanvas || {};

var Offcanvas = _react2.default.createClass({
  displayName: 'Offcanvas',
  getInitialState: function getInitialState() {
    this.uuid = 'offcanvas-' + Math.random().toString(16).substr(2).slice(-5) + new Date().getTime().toString(16).slice(9);;
    this.isFirstShow = true;

    return {
      active: false,
      display: false,
      maskTransparent: false
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(next) {
    next.show !== this.state.active && this.update(next.show);
  },
  update: function update(show) {
    var _this = this;

    this.setState({ active: true, display: false, maskTransparent: show && !!Object.keys(window.__$mtOffcanvas).length });
    setTimeout(function () {
      _this.setState({ display: show, active: show });
      if (show) {
        _this.props.onShow();
        if (_this.isFirstShow) _this.props.onFirstShow();
        window.__$mtOffcanvas[_this.uuid] = 1;
      } else {
        _this.props.onHide();
        _this.isFirstShow = false;
        delete window.__$mtOffcanvas[_this.uuid];
      }
    }, show ? 10 : 400);
  },
  render: function render() {
    var _classNames;

    var _props = this.props,
        closeByMask = _props.closeByMask,
        show = _props.show,
        position = _props.position,
        animate = _props.animate,
        onClose = _props.onClose,
        hideMask = _props.hideMask,
        height = _props.height,
        width = _props.width,
        children = _props.children,
        others = _objectWithoutProperties(_props, ['closeByMask', 'show', 'position', 'animate', 'onClose', 'hideMask', 'height', 'width', 'children']);

    var _state = this.state,
        active = _state.active,
        display = _state.display,
        maskTransparent = _state.maskTransparent;


    var wrapCls = (0, _classnames2.default)((_classNames = {
      'mt-offcanvas': true,
      'mt-offcanvas_mask-transparent': maskTransparent || hideMask,
      'active': active
    }, _defineProperty(_classNames, 'mt-offcanvas-' + position, true), _defineProperty(_classNames, 'mt-offcanvas-' + position + '__show', display), _classNames));

    var innerCls = (0, _classnames2.default)('mt-offcanvas-inner', _defineProperty({}, 'mt-offcanvas-inner__' + animate, position === 'center'));

    var sty = {};
    if (height !== 'auto') sty.height = height;
    if (width !== 'auto') sty.width = width;

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: wrapCls, style: sty },
        _react2.default.createElement(
          'div',
          { className: innerCls, style: sty },
          children
        )
      ),
      _react2.default.createElement('div', { className: 'mt-offcanvas-mask',
        onTouchMove: function onTouchMove(e) {
          return e.preventDefault();
        },
        onClick: closeByMask ? onClose : null
      })
    );
  }
});

Offcanvas.propTypes = {
  show: _react2.default.PropTypes.bool,
  position: _react2.default.PropTypes.string,
  animate: _react2.default.PropTypes.string,
  closeByMask: _react2.default.PropTypes.bool,
  onClose: _react2.default.PropTypes.func,
  onShow: _react2.default.PropTypes.func,
  onHide: _react2.default.PropTypes.func,
  onFirstShow: _react2.default.PropTypes.func,
  hideMask: _react2.default.PropTypes.bool,
  height: _react2.default.PropTypes.string,
  width: _react2.default.PropTypes.string
};

Offcanvas.defaultProps = {
  show: false, // 显示隐藏，由外部控制
  position: 'center', // top/left/bottom/center
  animate: 'slide-in-top', // 居中显示时的动画，slide-in-top / slide-in-bottom / zoom-in
  closeByMask: true, // 是否可以点击遮罩关闭
  onClose: noop, // 关闭事件，组件关闭调用这个事件
  onShow: noop, // 显示之后的回调
  onHide: noop, // 关闭之后的回调
  hideMask: false, // 用于隐藏遮罩，使其透明
  onFirstShow: noop, // 用于第一次显示时的回调
  height: 'auto',
  width: 'auto'
};

exports.default = Offcanvas;