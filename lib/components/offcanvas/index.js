'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};

var Offcanvas = _react2.default.createClass({
  displayName: 'Offcanvas',
  getInitialState: function getInitialState() {
    return {
      active: false,
      display: false
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(next) {
    if (next.show !== this.state.active) {
      return this.update(next.show);
    }
    return false;
  },
  update: function update(show) {
    var _this = this;

    this.setState({ active: true, display: false });
    setTimeout(function () {
      _this.setState({ display: show, active: show });
      show ? _this.props.onShow() : _this.props.onHide();
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
        children = _props.children,
        others = (0, _objectWithoutProperties3.default)(_props, ['closeByMask', 'show', 'position', 'animate', 'onClose', 'children']);
    var _state = this.state,
        active = _state.active,
        display = _state.display;


    var wrapCls = (0, _classnames2.default)((_classNames = {
      'mt-offcanvas': true,
      'active': active
    }, (0, _defineProperty3.default)(_classNames, 'mt-offcanvas-' + position, true), (0, _defineProperty3.default)(_classNames, 'mt-offcanvas-' + position + '__show', display), _classNames));

    var innerCls = (0, _classnames2.default)('mt-offcanvas-inner', (0, _defineProperty3.default)({}, 'mt-offcanvas-inner__' + animate, position === 'center'));

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: wrapCls },
        _react2.default.createElement(
          'div',
          { className: innerCls },
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
  onHide: _react2.default.PropTypes.func
};

Offcanvas.defaultProps = {
  show: false, // 显示隐藏，由外部控制
  position: 'center', // top/left/bottom/center
  animate: 'slide-in-top', // 居中显示时的动画，slide-in-top / slide-in-bottom / zoom-in
  closeByMask: true, // 是否可以点击遮罩关闭
  onClose: noop, // 关闭事件，组件关闭调用这个事件
  onShow: noop, // 显示之后的回调
  onHide: noop // 关闭之后的回调
};

exports.default = Offcanvas;