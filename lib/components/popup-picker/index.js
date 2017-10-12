'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.less');

var _offcanvas = require('../offcanvas');

var _offcanvas2 = _interopRequireDefault(_offcanvas);

var _picker = require('../picker');

var _picker2 = _interopRequireDefault(_picker);

var _popupHeader = require('../popup-header');

var _popupHeader2 = _interopRequireDefault(_popupHeader);

var _flex = require('../flex');

var _flex2 = _interopRequireDefault(_flex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FlexItem = _flex2.default.FlexItem;

var noop = function noop() {};

var PopupPicker = _react2.default.createClass({
  displayName: 'PopupPicker',
  getInitialState: function getInitialState() {
    var _props = this.props,
        show = _props.show,
        value = _props.value,
        displayFormat = _props.displayFormat,
        placeholder = _props.placeholder;


    this.tempValue = value;

    return {
      show: !!show,
      currValue: value.slice()
    };
  },
  onShow: function onShow() {
    this.setState({ show: true });
  },
  onPickerChange: function onPickerChange(v) {
    this.tempValue = v;
  },
  onHide: function onHide(isConfirm) {
    this.setState({ show: false });
    if (isConfirm) {
      this.props.onChange(this.tempValue);
      this.setState({ currValue: this.tempValue });
    }
  },
  render: function render() {
    var _this = this;

    var _props2 = this.props,
        label = _props2.label,
        inlineDesc = _props2.inlineDesc,
        displayFormat = _props2.displayFormat,
        value = _props2.value,
        data = _props2.data,
        placeholder = _props2.placeholder,
        cancelText = _props2.cancelText,
        confirmText = _props2.confirmText,
        columns = _props2.columns;
    var _state = this.state,
        show = _state.show,
        currValue = _state.currValue;


    return _react2.default.createElement(
      'div',
      { className: 'mt-cell-box' },
      _react2.default.createElement(
        'div',
        { className: 'weui-cell mt-tap-active weui-cell_access', onClick: this.onShow },
        _react2.default.createElement(
          'div',
          { className: 'weui-cell__bd' },
          label
        ),
        _react2.default.createElement(
          'div',
          { className: 'weui-cell__ft' },
          currValue && currValue.length ? displayFormat(currValue) : placeholder
        )
      ),
      _react2.default.createElement(
        _offcanvas2.default,
        { show: show, position: 'bottom', closeByMask: true, onClose: this.onHide },
        _react2.default.createElement(
          'div',
          { className: 'mt-popup-picker-container' },
          _react2.default.createElement(_popupHeader2.default, { leftText: '\u53D6\u6D88', rightText: '\u786E\u5B9A', onClickLeft: function onClickLeft() {
              return _this.onHide(false);
            }, onClickRight: function onClickRight() {
              return _this.onHide(true);
            } }),
          _react2.default.createElement(_picker2.default, { data: data, value: value, onChange: this.onPickerChange, columns: columns })
        )
      )
    );
  }
});

PopupPicker.propTypes = {
  show: _react2.default.PropTypes.bool,
  label: _react2.default.PropTypes.any,
  displayFormat: _react2.default.PropTypes.func,
  value: _react2.default.PropTypes.array,
  cancelText: _react2.default.PropTypes.string,
  confirmText: _react2.default.PropTypes.string,
  placeholder: _react2.default.PropTypes.string,
  columns: _react2.default.PropTypes.number,
  data: _react2.default.PropTypes.array,
  onChange: _react2.default.PropTypes.func
};

PopupPicker.defaultProps = {
  show: false,
  label: '',
  displayFormat: function displayFormat(v) {
    return v;
  },
  value: '',
  cancelText: '取消',
  confirmText: '确定',
  placeholder: '',
  data: [],
  columns: 0,
  onChange: noop
};

exports.default = PopupPicker;