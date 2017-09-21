'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _clocker = require('./clocker');

var _clocker2 = _interopRequireDefault(_clocker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var noop = function noop() {};

var Clocker = _react2.default.createClass({
  displayName: 'Clocker',
  getInitialState: function getInitialState() {
    this.clocker = null;
    this.time = this.props.time;
    return {
      format: this.props.formatFn()
    };
  },
  init: function init() {
    var _this = this;

    var _props = this.props,
        onTick = _props.onTick,
        onFinish = _props.onFinish,
        formatFn = _props.formatFn,
        precision = _props.precision;


    this.clocker = new _clocker2.default(this.time, {
      precision: precision,
      tick: function tick(e) {
        var o = e.offset;
        _this.setState({ format: _this.props.formatFn(o.days_1, o.days_2, o.hours_1, o.hours_2, o.minutes_1, o.minutes_2, o.seconds_1, o.seconds_2) });
        onTick(e);
      },
      finish: function finish(e) {
        var o = e.offset;
        _this.setState({ format: _this.props.formatFn(o.days_1, o.days_2, o.hours_1, o.hours_2, o.minutes_1, o.minutes_2, o.seconds_1, o.seconds_2) });
        onFinish(e);
      }
    });
    this.clocker.start();
  },
  componentDidMount: function componentDidMount() {
    this.init();
  },
  componentWillUnmount: function componentWillUnmount() {
    this.clocker.remove();
    this.clocker = null;
  },
  componentDidUpdate: function componentDidUpdate() {
    if (this.time !== this.props.time) {
      this.time = this.props.time;
      this.clocker.remove();
      this.init();
    }
  },
  render: function render() {
    var others = _objectWithoutProperties(this.props, []);

    return _react2.default.createElement(
      'div',
      others,
      this.state.format
    );
  }
});

Clocker.propTypes = {
  precision: _react2.default.PropTypes.number,
  formatFn: _react2.default.PropTypes.func,
  time: _react2.default.PropTypes.number,
  onTick: _react2.default.PropTypes.func,
  onFinish: _react2.default.PropTypes.func
};

Clocker.defaultProps = {
  precision: 1000,
  time: 0,
  formatFn: function formatFn(D1, D2, H1, H2, M1, M2, S1, S2) {
    if (!D1) D1 = D2 = H1 = H2 = M1 = M2 = S1 = S2 = '0';
    return D1 + D2 + ' \u5929 ' + (H1 + H2) + ' \u5C0F\u65F6 ' + (M1 + M2) + ' \u5206 ' + (S1 + S2) + ' \u79D2';
  },
  onTick: noop,
  onFinish: noop
};

exports.default = Clocker;