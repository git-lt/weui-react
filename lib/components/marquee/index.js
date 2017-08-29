'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _marqueeItem = require('./marquee-item');

var _marqueeItem2 = _interopRequireDefault(_marqueeItem);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Marquee = _react2.default.createClass({
  displayName: 'Marquee',
  getInitialState: function getInitialState() {
    this.timer = null;

    return {
      currenTranslateY: 0,
      currentIndex: 0,
      noAnimate: false,
      height: 0,
      count: this.props.children.length
    };
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    setTimeout(function () {
      _this._init();
      _this._start();
    }, 300);
  },
  _destroy: function _destroy() {
    this.timer && clearInterval(this.timer);
  },
  _init: function _init() {
    this._destroy();
    var direction = this.props.direction;
    var oBox = this.refs.box.getDOMNode();

    if (this.cloneNode) {
      oBox.removeChild(this.cloneNode);
    }

    this.cloneNode = null;
    var firstItem = oBox.firstElementChild;
    if (!firstItem) {
      return false;
    }
    this.height = firstItem.offsetHeight;

    if (direction === 'up') {
      this.cloneNode = firstItem.cloneNode(true);
      oBox.appendChild(this.cloneNode);
    } else {
      this.cloneNode = oBox.lastElementChild.cloneNode(true);
      oBox.insertBefore(this.cloneNode, firstItem);
    }

    this.setState({ height: this.height });

    return true;
  },
  _start: function _start() {
    var _this2 = this;

    var count = this.state.count;
    var height = this.height;
    var _props = this.props,
        direction = _props.direction,
        duration = _props.duration,
        interval = _props.interval;
    var _state = this.state,
        currentIndex = _state.currentIndex,
        currenTranslateY = _state.currenTranslateY,
        noAnimate = _state.noAnimate;


    this.timer = setInterval(function () {
      if (currentIndex === count) {
        setTimeout(function () {
          currentIndex = 0;
          currenTranslateY = 0;
          _this2._go(currentIndex, currenTranslateY, true);
        }, duration);
      } else if (currentIndex === -1) {
        setTimeout(function () {
          currentIndex = count - 1;
          currenTranslateY = -(currentIndex + 1) * height;
          _this2._go(currentIndex, currenTranslateY, false);
        }, duration);
      } else {
        if (direction === 'up') {
          currentIndex += 1;
          currenTranslateY = -currentIndex * height;
        } else {
          currentIndex -= 1;
          currenTranslateY = -(currentIndex + 1) * height;
        }
        _this2._go(currentIndex, currenTranslateY, false);
      }
    }, interval + duration);
  },
  _go: function _go(currentIndex, currenTranslateY, noAnimate) {
    this.setState({ currentIndex: currentIndex, currenTranslateY: currenTranslateY, noAnimate: noAnimate });
  },
  refresh: function refresh() {
    var _this3 = this;

    this._destroy();
    this.setState({ count: this.props.children.length }, function () {
      setTimeout(function () {
        _this3._init();
        _this3._start();
      }, 300);
    });
  },
  componentWillUnmount: function componentWillUnmount() {
    this._destroy();
  },
  render: function render() {
    var _state2 = this.state,
        noAnimate = _state2.noAnimate,
        currenTranslateY = _state2.currenTranslateY,
        height = _state2.height;

    var _props2 = this.props,
        duration = _props2.duration,
        children = _props2.children,
        className = _props2.className,
        others = _objectWithoutProperties(_props2, ['duration', 'children', 'className']);

    var styWrap = { height: height + 'px' };
    var styUl = {
      transform: 'translate3d(0,' + currenTranslateY + 'px,0)',
      transition: 'transform ' + (noAnimate ? 0 : duration) + 'ms'
    };

    var cls = (0, _classnames2.default)('mt-marquee', _defineProperty({}, className, className));

    return _react2.default.createElement(
      'div',
      _extends({ className: cls, style: styWrap }, others),
      _react2.default.createElement(
        'ul',
        { className: 'mt-marquee-box', ref: 'box', style: styUl },
        children
      )
    );
  }
});

Marquee.MarqueeItem = _marqueeItem2.default;

Marquee.propTypes = {
  interval: _react2.default.PropTypes.number,
  duration: _react2.default.PropTypes.number,
  direction: _react2.default.PropTypes.string
};

Marquee.defaultProps = {
  interval: 2000,
  duration: 300,
  direction: 'up'
};

exports.default = Marquee;