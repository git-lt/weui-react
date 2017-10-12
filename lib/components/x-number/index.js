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

var Big = require('big.js');
var noop = function noop() {};

var XNumber = _react2.default.createClass({
  displayName: 'XNumber',
  getInitialState: function getInitialState() {
    return {
      currentValue: this.props.value
    };
  },
  sub: function sub() {
    var _props = this.props,
        min = _props.min,
        step = _props.step,
        onChange = _props.onChange;

    if (!this.disabledMin()) {
      var x = new Big(this.state.currentValue);
      var curr = x.minus(step) * 1;
      if (min !== null && curr < min) curr = min;
      this.setState({ currentValue: curr });
      onChange(curr);
    }
  },
  add: function add() {
    var _props2 = this.props,
        max = _props2.max,
        step = _props2.step,
        onChange = _props2.onChange;

    if (!this.disabledMax()) {
      var x = new Big(this.state.currentValue);
      var curr = x.plus(step) * 1;
      if (max !== null && curr > max) curr = max;
      this.setState({ currentValue: curr });
      onChange(curr);
    }
  },
  blur: function blur() {
    if (this.state.currentValue === '') {
      this.setState({ currentValue: 0 });
    }
  },
  disabledMin: function disabledMin() {
    var min = this.props.min;
    var currentValue = this.state.currentValue;
    return min === null ? false : currentValue === '' ? true : currentValue <= min;
  },
  disabledMax: function disabledMax() {
    var max = this.props.max;
    var currentValue = this.state.currentValue;
    return max === null ? false : currentValue === '' ? true : currentValue >= max;
  },
  componentWillReceiveProps: function componentWillReceiveProps(props) {
    this.setState({ currentValue: props.value });
  },
  render: function render() {
    var _props3 = this.props,
        label = _props3.label,
        readonly = _props3.readonly,
        name = _props3.name,
        value = _props3.value,
        width = _props3.width,
        fillable = _props3.fillable,
        buttonStyle = _props3.buttonStyle;
    var currentValue = this.state.currentValue;


    return _react2.default.createElement(
      'div',
      { className: 'weui-cell' },
      _react2.default.createElement(
        'div',
        { className: 'weui-cell__bd' },
        label
      ),
      _react2.default.createElement(
        'div',
        { className: 'weui-cell__ft ' + (buttonStyle === 'round' && 'mt-number-round'), style: { fontSize: 0 } },
        readonly ? value : _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'a',
            { onClick: this.sub, className: 'mt-number-selector mt-number-selector-sub ' + (this.disabledMin() && 'mt-number-disabled') },
            _react2.default.createElement(
              'svg',
              { viewBox: '0 0 1024 1024', version: '1.1', xmlns: 'http://www.w3.org/2000/svg', width: '18', height: '18' },
              _react2.default.createElement('defs', null),
              _react2.default.createElement('path', { d: 'M863.74455 544.00086 163.424056 544.00086c-17.664722 0-32.00086-14.336138-32.00086-32.00086s14.336138-32.00086 32.00086-32.00086l700.320495 0c17.695686 0 31.99914 14.336138 31.99914 32.00086S881.440237 544.00086 863.74455 544.00086z' })
            )
          ),
          _react2.default.createElement('input', { value: currentValue, name: name, className: 'mt-number-input', style: { width: width }, readOnly: !fillable, pattern: '[0-9]*', type: 'number', onBlur: this.blur }),
          _react2.default.createElement(
            'a',
            { onClick: this.add, className: 'mt-number-selector mt-number-selector-plus ' + (this.disabledMax() && 'mt-number-disabled') },
            _react2.default.createElement(
              'svg',
              { viewBox: '0 0 1024 1024', version: '1.1', xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '20' },
              _react2.default.createElement('defs', null),
              _react2.default.createElement('path', { d: 'M863.328262 481.340895l-317.344013 0.099772L545.984249 162.816826c0-17.664722-14.336138-32.00086-32.00086-32.00086s-31.99914 14.336138-31.99914 32.00086l0 318.400215-322.368714-0.17718c-0.032684 0-0.063647 0-0.096331 0-17.632039 0-31.935493 14.239806-32.00086 31.904529-0.096331 17.664722 14.208843 32.031824 31.871845 32.095471l322.59234 0.17718 0 319.167424c0 17.695686 14.336138 32.00086 31.99914 32.00086s32.00086-14.303454 32.00086-32.00086L545.982529 545.440667l317.087703-0.099772c0.063647 0 0.096331 0 0.127295 0 17.632039 0 31.935493-14.239806 32.00086-31.904529S880.960301 481.404542 863.328262 481.340895z' })
            )
          )
        )
      )
    );
  }
});

XNumber.propTypes = {
  label: _react2.default.PropTypes.any,
  value: _react2.default.PropTypes.number,
  min: _react2.default.PropTypes.number,
  max: _react2.default.PropTypes.number,
  readonly: _react2.default.PropTypes.bool,
  step: _react2.default.PropTypes.number,
  name: _react2.default.PropTypes.string,
  fillable: _react2.default.PropTypes.bool,
  width: _react2.default.PropTypes.number,
  buttonStyle: _react2.default.PropTypes.string,
  onChange: _react2.default.PropTypes.func
};

XNumber.defaultProps = {
  label: '',
  value: 0,
  min: null,
  max: null,
  readonly: false,
  step: 1,
  name: '',
  fillable: false,
  width: 50,
  buttonStyle: null, //square或者round
  onChange: noop
};

exports.default = XNumber;