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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FlexItem = _react2.default.createClass({
  displayName: 'FlexItem',
  render: function render() {
    var _props = this.props,
        options = _props.options,
        children = _props.children,
        others = (0, _objectWithoutProperties3.default)(_props, ['options', 'children']);


    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({ 'data-cell': options }, others),
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