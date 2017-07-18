'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Divider = _react2.default.createClass({
  displayName: 'Divider',
  render: function render() {
    var _props = this.props,
        text = _props.text,
        children = _props.children,
        others = (0, _objectWithoutProperties3.default)(_props, ['text', 'children']);


    return _react2.default.createElement(
      'p',
      (0, _extends3.default)({ className: 'mt-divider' }, others),
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