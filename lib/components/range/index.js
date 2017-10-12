'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _powerange = require('./powerange');

var _powerange2 = _interopRequireDefault(_powerange);

require('./powerange.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};

var Range = _react2.default.createClass({
  displayName: 'Range',
  getInitialState: function getInitialState() {
    this.$el = null;
    this.currentValue = this.props.value;
    return {};
  },
  componentDidMount: function componentDidMount() {
    var _props = this.props,
        decimal = _props.decimal,
        min = _props.min,
        max = _props.max,
        minHTML = _props.minHTML,
        maxHTML = _props.maxHTML,
        disabled = _props.disabled,
        onChange = _props.onChange,
        disabledOpacity = _props.disabledOpacity,
        step = _props.step,
        rangeBarHeight = _props.rangeBarHeight,
        rangeHandleHeight = _props.rangeHandleHeight;


    var currentValue = this.currentValue;
    // console.log(this.$el)
    // console.log(this.$el.parentNode)
    // return
    var initialBarWidth = window.getComputedStyle(this.$el.parentNode).width.replace('px', '') - 80;

    var options = {
      callback: onChange,
      decimal: decimal,
      start: currentValue,
      min: min,
      max: max,
      minHTML: minHTML,
      maxHTML: maxHTML,
      disabled: disabled,
      disabledOpacity: disabledOpacity,
      initialBarWidth: initialBarWidth
    };

    if (step !== 0) options.step = step;

    this.range = new _powerange2.default(this.$el.querySelector('.mt-range-input'), options);

    var handleTop = (rangeHandleHeight - rangeBarHeight) / 2;
    this.$el.querySelector('.range-handle').style.top = '-' + handleTop + 'px';
    this.$el.querySelector('.range-bar').style.height = rangeBarHeight + 'px';
    window.addEventListener('orientationchange', this.handleOrientationchange, false);
  },
  handleOrientationchange: function handleOrientationchange() {
    this.update();
  },
  update: function update() {
    var _props2 = this.props,
        min = _props2.min,
        max = _props2.max,
        step = _props2.step,
        onChange = _props2.onChange;

    var currentValue = this.currentValue;
    if (currentValue < min) currentValue = min;
    if (currentValue > max) currentValue = max;

    this.range.reInit({
      min: min,
      max: max,
      step: step,
      value: currentValue
    });
    this.range.setStart(currentValue);
    this.range.steStep();
    this.currentValue = currentValue;
    console.log(currentValue);
    onChange(currentValue);
    console.log(currentValue);
  },
  componentDidUpdate: function componentDidUpdate() {
    var _props3 = this.props,
        value = _props3.value,
        onChange = _props3.onChange;

    if (this.currentValue !== value) {
      this.range && this.range.setStart(value);
      console.log('change');
      // onChange(value)
    }
  },
  componentWillUnMount: function componentWillUnMount() {
    window.removeEventListener('orientationchange', this.handleOrientationchange, false);
  },
  render: function render() {
    var _this = this;

    return _react2.default.createElement(
      'div',
      { className: 'mt-range-input-box', ref: function ref(el) {
          return _this.$el = el && el.getDOMNode();
        } },
      _react2.default.createElement('input', { className: 'mt-range-input', defaultValue: this.currentValue })
    );
  }
});

Range.propTypes = {
  value: _react2.default.PropTypes.number,
  decimal: _react2.default.PropTypes.bool,
  min: _react2.default.PropTypes.number,
  max: _react2.default.PropTypes.number,
  minHTML: _react2.default.PropTypes.string,
  maxHTML: _react2.default.PropTypes.string,
  disabled: _react2.default.PropTypes.bool,
  disabledOpacity: _react2.default.PropTypes.number,
  step: _react2.default.PropTypes.number,
  rangeBarHeight: _react2.default.PropTypes.number,
  rangeHandleHeight: _react2.default.PropTypes.number,
  onChange: _react2.default.PropTypes.func
};

Range.defaultProps = {
  value: 0,
  decimal: false,
  min: 0,
  max: 100,
  minHTML: '',
  maxHTML: '',
  disabled: false,
  disabledOpacity: .6,
  step: 1,
  rangeBarHeight: 1,
  rangeHandleHeight: 30,
  onChange: noop
};

exports.default = Range;