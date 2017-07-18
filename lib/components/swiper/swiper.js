'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _swiper = require('./swiper.js');

var _swiper2 = _interopRequireDefault(_swiper);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};

var Swiper = _react2.default.createClass({
  displayName: 'Swiper',
  getInitialState: function getInitialState() {
    this.rendered = false;
    return {
      current: this.props.current || 0,
      height: this.props.height,
      list: this.props.list
    };
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    setTimeout(function () {
      _this.$el = _this.refs.swiperWrap.getDOMNode();
      var aspectRatio = _this.props.aspectRatio;
      var height = _this.state.height;

      if (aspectRatio) {
        height = _this.$el.offsetWidth * aspectRatio + 'px';
        _this.setState({ height: height });
      }

      _this.init(_this.$el, height);
    }, 30);
  },
  componentWillReceiveProps: function componentWillReceiveProps(next) {
    // 更新当前要展示的item
    if (next.current !== this.state.current && this.swiper) {
      this.swiper.go(next.current);
    }
  },
  componentDidUpdate: function componentDidUpdate(props) {
    // 更新 items 数据
    if (this.props.list != this.state.list) {
      this.refresh();
    }
  },
  init: function init($el, height) {
    var _this2 = this;

    var _props = this.props,
        direction = _props.direction,
        auto = _props.auto,
        loop = _props.loop,
        interval = _props.interval,
        threshold = _props.threshold,
        duration = _props.duration,
        minMovingDistance = _props.minMovingDistance,
        list = _props.list;


    this.swiper && this.swiper.destroy();
    this.swiper = new _swiper2.default({
      container: $el,
      direction: direction,
      auto: auto,
      loop: loop,
      interval: interval,
      threshold: threshold,
      duration: duration,
      height: height,
      minMovingDistance: minMovingDistance
    }).on('swiped', function (prev, curr) {
      _this2.setState({ current: curr });
      _this2.props.onChange && _this2.props.onChange(curr);
      // console.log(`curr=${curr} prev=${prev}`)
    });

    if (this.state.current > 0) {
      this.swiper.go(this.state.current);
    }
  },
  refresh: function refresh() {
    if (!this.$el || this.rendered) return;
    this.rendered = true;
    this.$el = this.refs.swiperWrap.getDOMNode();
    this.destroy();
    this.init(this.$el, this.state.height);
  },
  destroy: function destroy() {
    this.swiper && this.swiper.destroy();
  },
  renderItems: function renderItems(list) {
    var showDescMask = this.props.showDescMask;


    return list.map(function (item, i) {
      return _react2.default.createElement(
        'div',
        { className: 'mt-swiper-item', key: i, 'data-index': i },
        _react2.default.createElement(
          'a',
          { href: 'javascript:' },
          _react2.default.createElement('div', { className: 'mt-img', style: { backgroundImage: 'url(' + item.img + ')' } }),
          showDescMask && _react2.default.createElement(
            'p',
            { className: 'mt-swiper-desc' },
            item.title
          )
        )
      );
    });
  },
  renderDots: function renderDots(count) {
    var _classNames;

    var dots = [],
        current = this.state.current;
    var _props2 = this.props,
        dotsClass = _props2.dotsClass,
        dotsPosition = _props2.dotsPosition;


    for (var i = 0; i < count; i++) {
      var dotCls = (0, _classnames2.default)({
        'mt-icon-dot': true,
        'active': i === current
      });
      dots.push(_react2.default.createElement(
        'a',
        { href: 'javascript:', key: i },
        _react2.default.createElement('i', { className: dotCls })
      ));
    }

    var cls = (0, _classnames2.default)('mt-indicator', (_classNames = {}, (0, _defineProperty3.default)(_classNames, 'mt-indicator-' + dotsPosition, true), (0, _defineProperty3.default)(_classNames, dotsClass, dotsClass), _classNames));

    return _react2.default.createElement(
      'div',
      { className: cls },
      ' ',
      dots,
      ' '
    );
  },
  componentWillUnMount: function componentWillUnMount() {
    this.destroy();
  },
  render: function render() {
    var _props3 = this.props,
        list = _props3.list,
        showDots = _props3.showDots,
        children = _props3.children,
        className = _props3.className,
        others = (0, _objectWithoutProperties3.default)(_props3, ['list', 'showDots', 'children', 'className']);


    var height = this.state.height;
    var count = list.length;

    var cls = (0, _classnames2.default)('mt-slider', (0, _defineProperty3.default)({}, className, className));

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({ className: cls, ref: 'swiperWrap' }, others),
      _react2.default.createElement(
        'div',
        { className: 'mt-swiper', style: { height: height } },
        count > 0 ? this.renderItems(list) : children
      ),
      showDots && this.renderDots(count)
    );
  }
});

Swiper.propTypes = {
  aspectRatio: _react2.default.PropTypes.number,
  onChange: _react2.default.PropTypes.func
};

Swiper.defaultProps = {
  list: [],
  direction: 'horizontal',
  showDots: true,
  showDescMask: true,
  dotsPosition: 'right',
  dotsClass: '',
  auto: false,
  loop: false,
  interval: 3000,
  threshold: 50,
  duration: 300,
  height: 180,
  aspectRatio: 0,
  minMovingDistance: 0,
  onChange: noop
};

exports.default = Swiper;