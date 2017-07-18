'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};

var Checkbox = _react2.default.createClass({
  displayName: 'Checkbox',
  getInitialState: function getInitialState() {
    return {
      isRadio: this.props.type === 'radio'
    };
  },
  uuid: function uuid() {
    return 'ui-chk-' + Math.random().toString(16).substr(2).slice(-5) + new Date().getTime().toString(16).slice(9);
  },
  changeEv: function changeEv(e) {
    // console.log(e.target.checked)
    // console.log(e.target.value)
  },
  clickEv: function clickEv(e, data) {
    // console.log(data.disabled)
    // 如果是checkbox 达到最大限制，则不能再选
    var maxLimit = !this.state.isRadio && !data.checked && !!data.max && data.max === this.props.checkedItems.length;
    !data.disabled && !maxLimit && this.props.onClick(data.value, data);
  },
  renderIpt: function renderIpt(options) {
    var position = options.position,
        type = options.type,
        name = options.name,
        id = options.id,
        value = options.value,
        checked = options.checked,
        disabled = options.disabled,
        others = options.others,
        className = options.className;


    var pos = position === 'right' ? 'ft' : 'hd';

    var opt = { type: type, name: name, className: className, value: value, id: id, checked: checked, disabled: disabled };

    return _react2.default.createElement(
      'div',
      { className: 'weui-cell__' + pos },
      _react2.default.createElement('input', (0, _extends3.default)({}, opt, others, { onChange: this.changeEv })),
      _react2.default.createElement('span', { className: 'mt-icon-checked' })
    );
  },
  render: function render() {
    var _classNames,
        _this = this;

    var _props = this.props,
        className = _props.className,
        type = _props.type,
        children = _props.children,
        checkedItems = _props.checkedItems,
        disableItems = _props.disableItems,
        shape = _props.shape,
        max = _props.max,
        data = _props.data,
        disabled = _props.disabled,
        position = _props.position,
        label = _props.label,
        mini = _props.mini,
        fill = _props.fill,
        onClick = _props.onClick,
        others = (0, _objectWithoutProperties3.default)(_props, ['className', 'type', 'children', 'checkedItems', 'disableItems', 'shape', 'max', 'data', 'disabled', 'position', 'label', 'mini', 'fill', 'onClick']);


    !Array.isArray(checkedItems) && (checkedItems = [checkedItems]);
    !Array.isArray(disableItems) && (disableItems = [disableItems]);

    var clsWrap = (0, _classnames2.default)('weui-cells', (_classNames = {}, (0, _defineProperty3.default)(_classNames, 'mt-' + type, true), (0, _defineProperty3.default)(_classNames, 'mt-' + type + '_' + shape, true), (0, _defineProperty3.default)(_classNames, 'weui-cells_' + type, true), (0, _defineProperty3.default)(_classNames, className, className), _classNames));

    var clsIpt = (0, _classnames2.default)((0, _defineProperty3.default)({}, 'mt-checkbox__input', true));

    var disabledAll = false,
        isRadio = this.state.isRadio;
    var t = checkedItems.concat(disableItems).sort();
    isRadio && t.length && t.reduce(function (p, n) {
      if (p === n && isRadio) {
        disabledAll = true;
      }
      return n;
    });

    return _react2.default.createElement(
      'div',
      { className: clsWrap },
      data.map(function (v, i) {

        var currDis = disableItems.indexOf(v.id) > -1;
        currDis = isRadio && disabledAll ? true : currDis;

        var iptProps = {
          value: v.id,
          id: _this.uuid(),
          checked: checkedItems.indexOf(v.id) > -1,
          disabled: currDis,
          position: position,
          type: type,
          name: name,
          others: others,
          max: max,
          className: clsIpt
        };

        return _react2.default.createElement(
          'label',
          { className: 'weui-cell weui-check__label weui-cell-checkbox',
            htmlFor: v.id, key: i,
            onClick: function onClick(e) {
              return _this.clickEv(e, iptProps);
            } },
          position === 'left' && _this.renderIpt(iptProps),
          _react2.default.createElement(
            'div',
            { className: 'weui-cell__bd' },
            _react2.default.createElement(
              'p',
              null,
              v.text
            )
          ),
          position === 'right' && _this.renderIpt(iptProps)
        );
      })
    );
  }
});

Checkbox.propTypes = {
  disabled: _react2.default.PropTypes.bool,
  type: _react2.default.PropTypes.string,
  position: _react2.default.PropTypes.string,
  name: _react2.default.PropTypes.string,
  data: _react2.default.PropTypes.array,
  onClick: _react2.default.PropTypes.func,
  shape: _react2.default.PropTypes.string,
  checkedItems: _react2.default.PropTypes.any,
  disableItems: _react2.default.PropTypes.any,
  max: _react2.default.PropTypes.number
};

Checkbox.defaultProps = {
  disabled: false, // 是否禁用
  type: 'checkbox', // 类型：checkbox 多选， radio 单选
  shape: 'circle', // rect / rect-fill / circle-fill
  position: 'right', // checkbox 的对齐方式，默认label在右，checkbox在左
  data: [], // [{id:1, text:'a'}, {id:2, text:'b'}]
  onClick: noop,
  name: '',
  checkedItems: [], // 当前选中的数据
  disableItems: [] // 禁用的项
};

exports.default = Checkbox;