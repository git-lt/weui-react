'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sticky = require('./sticky');

var _sticky2 = _interopRequireDefault(_sticky);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sticky = _react2.default.createClass({
  displayName: 'Sticky',
  componentDidMount: function componentDidMount() {
    var _this = this;

    var _props = this.props,
        _props$scrollBox = _props.scrollBox,
        scrollBox = _props$scrollBox === undefined ? null : _props$scrollBox,
        offset = _props.offset,
        checkStickySupport = _props.checkStickySupport;


    setTimeout(function () {
      (0, _sticky2.default)(_this.refs.stickyWrap.getDOMNode(), {
        scrollBox: scrollBox,
        offset: offset,
        checkStickySupport: checkStickySupport
      });
    }, 4);
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      { ref: 'stickyWrap' },
      this.props.children
    );
  }
});

Sticky.propTypes = {
  scrollBox: _react2.default.PropTypes.object,
  offset: _react2.default.PropTypes.number,
  checkStickySupport: _react2.default.PropTypes.bool
};

Sticky.defaultProps = {
  offset: 0,
  checkStickySupport: true
};

exports.default = Sticky;