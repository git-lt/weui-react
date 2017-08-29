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

var Circle = _react2.default.createClass({
  displayName: 'Circle',
  getInitialState: function getInitialState() {
    var radius = 50 - this.props.strokeWidth / 2;

    return {
      radius: radius, // 半径
      len: Math.PI * 2 * radius, // 周长
      pathString: 'M 50,50 m 0,-' + radius + '\n            a ' + radius + ',' + radius + ' 0 1 1 0,' + 2 * radius + '\n            a ' + radius + ',' + radius + ' 0 1 1 0,-' + 2 * radius
    };
  },
  render: function render() {
    var _state = this.state,
        pathString = _state.pathString,
        len = _state.len,
        radius = _state.radius;

    var _props = this.props,
        strokeWidth = _props.strokeWidth,
        strokeColor = _props.strokeColor,
        trailWidth = _props.trailWidth,
        trailColor = _props.trailColor,
        percent = _props.percent,
        strokeLinecap = _props.strokeLinecap,
        className = _props.className,
        children = _props.children,
        others = _objectWithoutProperties(_props, ['strokeWidth', 'strokeColor', 'trailWidth', 'trailColor', 'percent', 'strokeLinecap', 'className', 'children']);

    var pathStyle = {
      'strokeDasharray': len + 'px ' + len + 'px',
      'strokeDashoffset': (100 - percent) / 100 * len + 'px',
      'transition': 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
    };

    var cls = (0, _classnames2.default)('mt-circle', _defineProperty({}, className, className));

    return _react2.default.createElement(
      'div',
      { className: cls },
      _react2.default.createElement(
        'svg',
        { viewBox: '0 0 100 100' },
        _react2.default.createElement('path', {
          d: pathString,
          stroke: trailColor,
          strokeWidth: trailWidth,
          fillOpacity: '0' }),
        _react2.default.createElement('path', {
          d: pathString,
          strokeLinecap: strokeLinecap,
          stroke: strokeColor,
          strokeWidth: strokeWidth,
          fillOpacity: '0',
          style: pathStyle })
      ),
      _react2.default.createElement(
        'div',
        { className: 'mt-circle-content' },
        children
      )
    );
  }
});

Circle.propTypes = {
  strokeWidth: _react2.default.PropTypes.number,
  strokeColor: _react2.default.PropTypes.string,
  trailWidth: _react2.default.PropTypes.number,
  trailColor: _react2.default.PropTypes.string,
  percent: _react2.default.PropTypes.number,
  strokeLinecap: _react2.default.PropTypes.string
};

Circle.defaultProps = {
  strokeWidth: 1,
  strokeColor: '#37c7fa',
  trailWidth: 1,
  trailColor: '#d9d9d9',
  percent: 0,
  strokeLinecap: 'round'
};

exports.default = Circle;