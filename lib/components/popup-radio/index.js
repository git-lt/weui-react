'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.less');

var _offcanvas = require('../offcanvas');

var _offcanvas2 = _interopRequireDefault(_offcanvas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};

var uuid = function uuid() {
  return Math.random().toString(16).substr(2).slice(-5) + new Date().getTime().toString(16).slice(9);
};

var PopupRadio = _react2.default.createClass({
  displayName: 'PopupRadio',
  getInitialState: function getInitialState() {
    var _props = this.props,
        show = _props.show,
        value = _props.value,
        displayFormat = _props.displayFormat,
        placeholder = _props.placeholder;


    return {
      show: !!show,
      currValue: value + ''
    };
  },
  onClick: function onClick(v) {
    this.props.onCheck(v);
    this.setState({ currValue: v, show: false });
  },
  render: function render() {
    var _this = this;

    var _props2 = this.props,
        label = _props2.label,
        inlineDesc = _props2.inlineDesc,
        displayFormat = _props2.displayFormat,
        value = _props2.value,
        data = _props2.data,
        placeholder = _props2.placeholder;
    var _state = this.state,
        show = _state.show,
        currValue = _state.currValue;


    return _react2.default.createElement(
      'div',
      { className: 'mt-cell-box' },
      _react2.default.createElement(
        'div',
        { className: 'weui-cell weui-cell_access', onClick: function onClick() {
            return _this.setState({ show: true });
          } },
        _react2.default.createElement(
          'div',
          { className: 'weui-cell__bd' },
          label
        ),
        _react2.default.createElement(
          'div',
          { className: 'weui-cell__ft' },
          currValue ? displayFormat(currValue) : placeholder
        )
      ),
      _react2.default.createElement(
        _offcanvas2.default,
        { show: show, position: 'bottom', closeByMask: true, onClose: function onClose() {
            return _this.setState({ show: false });
          } },
        _react2.default.createElement(
          'div',
          { className: 'mt-popup-radio-container' },
          _react2.default.createElement(
            'div',
            { className: 'weui-cells weui-cells_radio' },
            data.map(function (v, i) {
              var id = 'r-' + uuid();
              if ((typeof v === 'undefined' ? 'undefined' : _typeof(v)) !== 'object') v = { label: v, value: v };
              return _react2.default.createElement(
                'label',
                { className: 'weui-cell weui-check__label', htmlFor: id, onClick: function onClick() {
                    return _this.onClick(v.value);
                  } },
                _react2.default.createElement(
                  'div',
                  { className: 'weui-cell__bd' },
                  _react2.default.createElement(
                    'p',
                    null,
                    v.label
                  ),
                  !!v.desc && _react2.default.createElement(
                    'div',
                    { className: 'weui-cell__bd-desc' },
                    v.desc
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'weui-cell__ft' },
                  _react2.default.createElement('input', { type: 'radio', className: 'weui-check', value: v.value, checked: currValue == v.value, onChange: function onChange() {}, id: id }),
                  _react2.default.createElement('span', { className: 'weui-icon-checked' })
                )
              );
            })
          )
        )
      )
    );
  }
});

PopupRadio.propTypes = {
  show: _react2.default.PropTypes.bool,
  label: _react2.default.PropTypes.any,
  displayFormat: _react2.default.PropTypes.func,
  value: _react2.default.PropTypes.string,
  placeholder: _react2.default.PropTypes.string,
  data: _react2.default.PropTypes.array,
  onCheck: _react2.default.PropTypes.func
};

PopupRadio.defaultProps = {
  show: false,
  label: '',
  displayFormat: function displayFormat(v) {
    return v;
  },
  value: '',
  placeholder: '',
  onCheck: noop,
  data: [] // { label, value, desc }
};

exports.default = PopupRadio;