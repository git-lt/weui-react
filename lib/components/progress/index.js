"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Progress = _react2.default.createClass({
  displayName: "Progress",
  cancel: function cancel(v) {
    this.props.onCancel(v);
  },
  render: function render() {
    var _props = this.props,
        showCancel = _props.showCancel,
        percent = _props.percent;


    return _react2.default.createElement(
      "div",
      { className: "weui-progress" },
      _react2.default.createElement(
        "div",
        { className: "weui-progress__bar" },
        _react2.default.createElement("div", { className: "weui-progress__inner-bar", style: { width: percent + '%' } })
      ),
      showCancel && _react2.default.createElement(
        "a",
        { href: "javascript:;", className: "weui-progress_opr" },
        _react2.default.createElement("i", { className: "weui-icon-cancel", onClick: this.cancel })
      )
    );
  }
});

Progress.propTypes = {
  percent: _react2.default.PropTypes.number,
  showCancel: _react2.default.PropTypes.bool,
  onCancel: _react2.default.PropTypes.func
};

Progress.defaultProps = {
  percent: 0,
  showCancel: true,
  onCancel: function onCancel() {}
};

exports.default = Progress;