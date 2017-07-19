'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Divider = _react2.default.createClass({
  displayName: 'Divider',
  render: function render() {
    var _props = this.props,
        text = _props.text,
        children = _props.children,
        others = _objectWithoutProperties(_props, ['text', 'children']);

    return _react2.default.createElement(
      'p',
      _extends({ className: 'mt-divider' }, others),
      text || children
    );
  }
});

Divider.propTypes = {
  text: _react2.default.PropTypes.any // 一般使用文本，更复杂的可使用jsx
};

Divider.defaultProps = {
  text: ''
};

exports.default = Divider;