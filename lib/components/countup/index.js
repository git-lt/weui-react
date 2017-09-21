'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _countup = require('countup.js');

var _countup2 = _interopRequireDefault(_countup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};

var Countup = _react2.default.createClass({
  displayName: 'Countup',
  getInitialState: function getInitialState() {
    this.$el = null;
    this.countup = null;
    return {};
  },
  componentDidMount: function componentDidMount() {
    var _props = this.props,
        startVal = _props.startVal,
        endVal = _props.endVal,
        decimals = _props.decimals,
        duration = _props.duration,
        options = _props.options,
        start = _props.start;

    this.$el = this.refs.countup.getDOMNode();
    this.countup = new _countup2.default(this.$el, startVal, endVal, decimals, duration, options);
    if (start) {
      this.countup.start();
    }
  },
  componentDidUpdate: function componentDidUpdate() {
    this.props.start && this.countup.start();
  },
  render: function render() {
    return _react2.default.createElement(
      'span',
      { ref: 'countup' },
      this.props.startVal
    );
  }
});

Countup.propTypes = {
  start: _react2.default.PropTypes.bool,
  startVal: _react2.default.PropTypes.number,
  endVal: _react2.default.PropTypes.number,
  decimals: _react2.default.PropTypes.number,
  duration: _react2.default.PropTypes.number,
  options: _react2.default.PropTypes.object
};

Countup.defaultProps = {
  start: false,
  startVal: 0,
  endVal: 0,
  decimals: 0,
  duration: 2,
  options: {}
};

exports.default = Countup;