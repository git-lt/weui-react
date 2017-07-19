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

var Switch = _react2.default.createClass({
  displayName: 'Switch',
  getInitialState: function getInitialState() {
    return { checked: !!this.props.checked };
  },
  changeEv: function changeEv(e) {
    this.setState({ checked: !this.state.checked });
    this.props.onChange && this.props.onChange(!this.state.checked);
  },
  render: function render() {
    var _props = this.props,
        label = _props.label,
        disabled = _props.disabled,
        checked = _props.checked,
        children = _props.children,
        className = _props.className,
        others = _objectWithoutProperties(_props, ['label', 'disabled', 'checked', 'children', 'className']);

    var cls = (0, _classnames2.default)('weui-cell weui-cell_switch', _defineProperty({}, className, className));

    return _react2.default.createElement(
      'div',
      { className: cls },
      _react2.default.createElement(
        'div',
        { className: 'weui-cell__bd' },
        _react2.default.createElement(
          'label',
          { className: 'weui-label' },
          label
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'weui-cell__ft' },
        _react2.default.createElement('input', { className: 'weui-switch', type: 'checkbox',
          disabled: disabled,
          checked: this.state.checked,
          onChange: this.changeEv })
      )
    );
  }
});

Switch.propTypes = {
  label: _react2.default.PropTypes.any, // 标题 一般使用文本，更复杂的可使用jsx
  checked: _react2.default.PropTypes.bool,
  disabled: _react2.default.PropTypes.bool
};

Switch.defaultProps = {
  label: '',
  checked: false,
  disabled: false
};

exports.default = Switch;