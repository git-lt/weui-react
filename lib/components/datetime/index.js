'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _datetimePicker = require('./datetime-picker');

var _datetimePicker2 = _interopRequireDefault(_datetimePicker);

var _format = require('./format');

var _format2 = _interopRequireDefault(_format);

var _group = require('../group');

var _group2 = _interopRequireDefault(_group);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var noop = function noop() {};

var Datetime = _react2.default.createClass({
  displayName: 'Datetime',
  getInitialState: function getInitialState() {
    var uuid = Math.random().toString(36).substring(3, 8);

    this.picker = null;
    this.elId = 'mt-datetime-' + uuid;

    var _props = this.props,
        value = _props.value,
        format = _props.format,
        show = _props.show;


    return {
      currValue: value,
      initValue: value
    };
  },
  updateCurrValue: function updateCurrValue(v) {
    this.setState({ currValue: v });
  },
  getOptions: function getOptions() {
    var _this = this;

    var _props2 = this.props,
        confirmText = _props2.confirmText,
        cancelText = _props2.cancelText,
        clearText = _props2.clearText,
        renderInline = _props2.renderInline,
        defaultSelectedValue = _props2.defaultSelectedValue,
        value = _props2.value,
        minYear = _props2.minYear,
        maxYear = _props2.maxYear,
        minHour = _props2.minHour,
        maxHour = _props2.maxHour,
        minDate = _props2.minDate,
        maxDate = _props2.maxDate,
        onChange = _props2.onChange,
        _onClear = _props2.onClear,
        _onHide = _props2.onHide,
        _onShow = _props2.onShow,
        _onConfirm = _props2.onConfirm,
        updateShow = _props2.updateShow,
        yearRow = _props2.yearRow,
        monthRow = _props2.monthRow,
        dayRow = _props2.dayRow,
        hourRow = _props2.hourRow,
        minuteRow = _props2.minuteRow,
        format = _props2.format,
        hourList = _props2.hourList,
        minuteList = _props2.minuteList;


    var options = {
      trigger: '#' + this.elId,
      format: format,
      value: value,
      defaultSelectedValue: defaultSelectedValue,

      confirmText: confirmText,
      cancelText: cancelText,
      clearText: clearText,

      minYear: minYear,
      maxYear: maxYear,
      minHour: minHour,
      maxHour: maxHour,
      startDate: minDate,
      endDate: maxDate,

      yearRow: yearRow,
      monthRow: monthRow,
      dayRow: dayRow,
      hourRow: hourRow,
      minuteRow: minuteRow,

      hourList: hourList,
      minuteList: minuteList,

      onSelect: function onSelect(type, val, wholeValue) {
        console.log(type, val, wholeValue);
        _this.picker && renderInline && onChange(wholeValue);
      },
      onConfirm: function onConfirm(value) {
        console.log(value);
        _this.updateCurrValue(value);
        _onConfirm(value);
      },
      onClear: function onClear(value) {
        console.log(value);
        _this.updateCurrValue('');
        _onClear(value);
      },
      onHide: function onHide() {
        console.log('hide');
        updateShow(false);
        _onHide();
      },
      onShow: function onShow() {
        console.log('show');
        updateShow(true);
        _onShow();
      }
    };
    return options;
  },
  componentDidMount: function componentDidMount() {
    this.init();
  },
  init: function init() {
    if (this.props.readonly) return;
    this.picker = new _datetimePicker2.default(this.getOptions());
    this.props.show && this.picker.show();
  },
  componentWillReceiveProps: function componentWillReceiveProps(next) {
    console.log(next);
    next.show && this.picker.show();
  },
  componentDidUpdate: function componentDidUpdate() {
    if (this.state.initValue !== this.props.value) {
      this.setState({ initValue: this.props.value });
      this.picker.destroy();
      if (this.props.readonly) return;
      this.init();
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    this.picker && this.picker.destroy();
  },
  render: function render() {
    var _props3 = this.props,
        readonly = _props3.readonly,
        label = _props3.label,
        placeholder = _props3.placeholder,
        others = _objectWithoutProperties(_props3, ['readonly', 'label', 'placeholder']);

    var currValue = this.state.currValue;


    var cls = (0, _classnames2.default)('mt-datetime weui-cell', {
      'weui-cell_access': !readonly
    });

    return _react2.default.createElement(
      'a',
      { id: this.elId, className: cls, href: 'javascript:;' },
      _react2.default.createElement(
        'div',
        { className: 'weui-cell__hd' },
        label
      ),
      _react2.default.createElement(
        'div',
        { className: 'weui-cell__ft mt-cell-primary mt-datetime-value' },
        currValue || placeholder
      )
    );
  }
});

Datetime.propTypes = {
  label: _react2.default.PropTypes.any,
  value: _react2.default.PropTypes.string,
  defaultSelectedValue: _react2.default.PropTypes.string,
  format: _react2.default.PropTypes.string,

  placeholder: _react2.default.PropTypes.string,
  confirmText: _react2.default.PropTypes.string,
  cancelText: _react2.default.PropTypes.string,
  clearText: _react2.default.PropTypes.string,

  minYear: _react2.default.PropTypes.number,
  maxYear: _react2.default.PropTypes.number,
  minHour: _react2.default.PropTypes.number,
  maxHour: _react2.default.PropTypes.number,
  maxDate: _react2.default.PropTypes.number,
  minDate: _react2.default.PropTypes.number,

  required: _react2.default.PropTypes.bool,
  readonly: _react2.default.PropTypes.bool,
  show: _react2.default.PropTypes.bool,
  renderInline: _react2.default.PropTypes.bool,

  yearRow: _react2.default.PropTypes.string,
  monthRow: _react2.default.PropTypes.string,
  dayRow: _react2.default.PropTypes.string,
  hourRow: _react2.default.PropTypes.string,
  minuteRow: _react2.default.PropTypes.string,

  updateShow: _react2.default.PropTypes.func,
  onChange: _react2.default.PropTypes.func,
  onClear: _react2.default.PropTypes.func,
  onHide: _react2.default.PropTypes.func,
  onShow: _react2.default.PropTypes.func,
  onConfirm: _react2.default.PropTypes.func,

  hourList: _react2.default.PropTypes.array,
  minuteList: _react2.default.PropTypes.array
};

Datetime.defaultProps = {
  label: '',
  value: 0,
  defaultSelectedValue: 0,
  format: 'YYYY-MM-DD',

  placeholder: '',
  confirmText: '',
  cancelText: '',
  clearText: '',

  minYear: 0,
  maxYear: 0,
  minHour: 0,
  maxHour: 0,
  maxDate: 0,
  minDate: 0,

  required: false,
  readonly: false,
  show: false,
  renderInline: false, // 是否直接在界面上显示

  yearRow: '{value}',
  monthRow: '{value}',
  dayRow: '{value}',
  hourRow: '{value}',
  minuteRow: '{value}',

  updateShow: noop, // 外部使用其它方式触发时，关闭的状态的函数
  onChange: noop,
  onClear: noop,
  onHide: noop,
  onShow: noop,
  onConfirm: noop,

  hourList: [],
  minuteList: []
};

exports.default = Datetime;