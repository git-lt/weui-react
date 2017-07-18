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

var GroupTitle = _react2.default.createClass({
  displayName: 'GroupTitle',
  render: function render() {
    var _props = this.props,
        title = _props.title,
        children = _props.children,
        others = (0, _objectWithoutProperties3.default)(_props, ['title', 'children']);


    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({ className: 'weui-cells__title' }, others),
      title || children
    );
  }
});

GroupTitle.propTypes = {
  title: _react2.default.PropTypes.any
};

GroupTitle.defaultProps = {
  text: '' // 一般使用文本，更复杂的可使用jsx
};

exports.default = GroupTitle;