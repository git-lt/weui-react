'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _gridItem = require('./grid-item');

var _gridItem2 = _interopRequireDefault(_gridItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Grid = _react2.default.createClass({
  displayName: 'Grid',
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'weui-grids' },
      this.props.children
    );
  }
});

Grid.GridItem = _gridItem2.default;

exports.default = Grid;