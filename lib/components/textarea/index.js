'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Textarea = _react2.default.createClass({
  displayName: 'Textarea',
  getInitialState: function getInitialState() {
    return {
      value: this.props.value
    };
  },
  changeEv: function changeEv(e) {
    var value = e.target.value;
    var max = ~~this.props.maxLength;

    var count = this.getLength(value);
    if (count > max) {
      value = value.slice(0, max);
    }

    this.setState({ value: value });
    this.props.onChange && this.props.onChange(e, value);
  },
  getLength: function getLength(v) {
    return v.replace(/\n/g, 'aa').length;
  },
  render: function render() {
    var _props = this.props,
        showCounter = _props.showCounter,
        value = _props.value,
        maxLength = _props.maxLength,
        onChange = _props.onChange,
        height = _props.height,
        className = _props.className,
        children = _props.children,
        others = (0, _objectWithoutProperties3.default)(_props, ['showCounter', 'value', 'maxLength', 'onChange', 'height', 'className', 'children']);


    maxLength = ~~maxLength;

    var wrapCls = (0, _classnames2.default)('weui-textarea', (0, _defineProperty3.default)({}, className, className));

    var realValue = this.state.value;
    var count = this.getLength(realValue);
    count = count > maxLength ? maxLength : count;

    return _react2.default.createElement(
      'div',
      { className: 'weui-cell' },
      _react2.default.createElement(
        'div',
        { className: 'weui-cell__bd' },
        _react2.default.createElement('textarea', (0, _extends3.default)({ className: 'weui-textarea', ref: 'textarea', style: { height: height },
          value: realValue,
          maxLength: maxLength,
          onChange: this.changeEv
        }, others)),
        showCounter && !!maxLength && _react2.default.createElement(
          'div',
          { className: 'weui-textarea-counter' },
          _react2.default.createElement(
            'span',
            null,
            count
          ),
          '/',
          maxLength
        )
      )
    );
  }
});

Textarea.propTypes = {
  showCounter: _react2.default.PropTypes.bool,
  maxLength: _react2.default.PropTypes.string,
  value: _react2.default.PropTypes.string,
  height: _react2.default.PropTypes.string,
  rows: _react2.default.PropTypes.string,
  cols: _react2.default.PropTypes.string
};

Textarea.defaultProps = {
  show: false, // 显示隐藏
  value: '',
  maxLength: '200',
  height: '75px',
  rows: '3',
  cols: '30'
};

exports.default = Textarea;