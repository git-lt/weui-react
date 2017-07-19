'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FlexItem = _react2.default.createClass({
  displayName: 'FlexItem',
  render: function render() {
    var _props = this.props,
        options = _props.options,
        children = _props.children,
        others = _objectWithoutProperties(_props, ['options', 'children']);

    return _react2.default.createElement(
      'div',
      _extends({ 'data-cell': options }, others),
      children
    );
  }
});

FlexItem.propTypes = {
  options: _react2.default.PropTypes.string
};

FlexItem.defaultProps = {
  options: ''
};

exports.default = FlexItem;

/**
options为以下取值:
  flex
  start
  end
  center
  baseline
  stretch
  order1
  order2
  order3
  order4
  order5
  order6
  order7
  order8
  order9
  order10

  1/2
  1/3
  1/4
  1/5
  1/6
 */