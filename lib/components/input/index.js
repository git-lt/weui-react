'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Input = _react2.default.createClass({
  displayName: 'Input',
  getInitialState: function getInitialState() {
    return {
      value: this.props.value
    };
  },
  changeEv: function changeEv(e) {
    var value = e.target.value;
    this.setState({ value: value });
    this.props.onChange && this.props.onChange(e, value);
  },
  focusEv: function focusEv(e) {
    var value = e.target.value;
    this.props.onFocus && this.props.onFocus(e, value);
  },
  blurEv: function blurEv(e) {
    var value = e.target.value;
    this.props.onBlur && this.props.onBlur(e, value);
  },
  clickEv: function clickEv(e) {
    var value = e.target.value;
    this.props.onClick && this.props.onClick(e, value);
  },
  renderSelect: function renderSelect(options) {
    var _props = this.props,
        selectOptions = _props.selectOptions,
        selectedValue = _props.selectedValue;


    var opts = selectOptions.map(function (v, i) {
      return _react2.default.createElement(
        'option',
        { value: v.value, key: i },
        v.text
      );
    });

    return _react2.default.createElement(
      'select',
      _extends({ className: 'weui-select' }, options),
      opts
    );
  },
  clickClearEv: function clickClearEv() {
    this.setState({ value: '' });
    this.refs.ipt.getDOMNode().focus();
  },
  render: function render() {
    var _props2 = this.props,
        type = _props2.type,
        placeholder = _props2.placeholder,
        label = _props2.label,
        name = _props2.name,
        readOnly = _props2.readOnly,
        disabled = _props2.disabled,
        right = _props2.right,
        vcode = _props2.vcode,
        errorInput = _props2.errorInput,
        showClear = _props2.showClear,
        labelAlign = _props2.labelAlign,
        autoComplete = _props2.autoComplete,
        maxLength = _props2.maxLength,
        debounce = _props2.debounce,
        selectBefore = _props2.selectBefore,
        showWarnIcon = _props2.showWarnIcon,
        focusInput = _props2.focusInput,
        className = _props2.className,
        children = _props2.children,
        others = _objectWithoutProperties(_props2, ['type', 'placeholder', 'label', 'name', 'readOnly', 'disabled', 'right', 'vcode', 'errorInput', 'showClear', 'labelAlign', 'autoComplete', 'maxLength', 'debounce', 'selectBefore', 'showWarnIcon', 'focusInput', 'className', 'children']);

    var _state$value = this.state.value,
        value = _state$value === undefined ? '' : _state$value;


    var focus = !!name && focusInput === name;
    var showWarn = !!name && errorInput === name;

    var clear = focus && showClear && !!value && !readOnly && !disabled;

    var options = { type: type, placeholder: placeholder, name: name, readOnly: readOnly, disabled: disabled, autoComplete: autoComplete, maxLength: maxLength };

    var clsWarp = (0, _classnames2.default)('weui-cell', _defineProperty({
      'weui-cell_warn': showWarn,
      'weui-cell_vcode maincolor': vcode,
      'weui-cell_select weui-cell_select-after': type === 'select'
    }, className, className));

    return _react2.default.createElement(
      'div',
      { className: clsWarp },
      !!label && _react2.default.createElement(
        'div',
        { className: 'weui-cell__hd' },
        _react2.default.createElement(
          'label',
          { className: 'weui-label' },
          label
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'weui-cell__bd' },
        type !== 'select' && _react2.default.createElement('input', _extends({ className: 'weui-input', ref: 'ipt',
          onChange: this.changeEv,
          onFocus: this.focusEv,
          onBlur: this.blurEv,
          onClick: this.clickEv,
          value: value
        }, options)),
        type === 'select' && this.renderSelect(options)
      ),
      _react2.default.createElement(
        'div',
        { className: 'weui-cell__ft' },
        clear && _react2.default.createElement('i', { className: 'weui-icon-clear', onClick: this.clickClearEv }),
        showWarn && showWarnIcon && _react2.default.createElement('i', { className: 'weui-icon-warn' }),
        right
      )
    );
  }
});

Input.propTypes = {
  type: _react2.default.PropTypes.string,
  right: _react2.default.PropTypes.any,
  label: _react2.default.PropTypes.any,

  showClear: _react2.default.PropTypes.bool,
  vcode: _react2.default.PropTypes.bool,
  labelAlign: _react2.default.PropTypes.string,

  focusInput: _react2.default.PropTypes.string, // 必填
  name: _react2.default.PropTypes.string, // 必填
  errorInput: _react2.default.PropTypes.string,
  value: _react2.default.PropTypes.any,

  showWarnIcon: _react2.default.PropTypes.bool,

  readOnly: _react2.default.PropTypes.bool,
  disabled: _react2.default.PropTypes.bool,
  placeholder: _react2.default.PropTypes.string,
  autoComplete: _react2.default.PropTypes.string,
  maxLength: _react2.default.PropTypes.string,

  debounce: _react2.default.PropTypes.number,
  selectOptions: _react2.default.PropTypes.array,
  selectedValue: _react2.default.PropTypes.any
};
Input.defaultProps = {
  type: 'text', // text,number,password,tel,select
  right: null, // 右侧的自定义内容，如验证码图片，发送验证码按钮等
  placeholder: '',
  label: '',
  value: '',
  name: '',
  focusInput: '',
  errorInput: '',
  readOnly: false,
  disabled: false,
  showClear: false, // 输入时是否显示清除
  vcode: false, // 是否是验证码输入
  labelAlign: '',
  showWarnIcon: true, // 是否显示错误提示图标，有时输入框太小，不需要显示icon
  autoComplete: 'off', // 自动提示
  maxLength: '999',
  debounce: 300,
  selectOptions: [], // select的数据 [{vlaue:'', text:''}]
  selectedValue: '' // select默认选中值
};

exports.default = Input;