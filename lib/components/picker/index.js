'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _flex = require('../flex');

var _flex2 = _interopRequireDefault(_flex);

var _scroller = require('./scroller');

var _scroller2 = _interopRequireDefault(_scroller);

require('./scroller.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FlexItem = _flex2.default.FlexItem;


var noop = function noop() {};

var Picker = _react2.default.createClass({
  displayName: 'Picker',
  getInitialState: function getInitialState() {
    var _props = this.props,
        value = _props.value,
        data = _props.data;


    if (!Array.isArray(value)) value = [value];
    if (!Array.isArray(data[0])) data = [data];

    this.scrollers = [];
    window.__scrollers = this.scrollers;
    this.selectedValue = [];
    this.isFirstInit = true;
    return {
      uuid: Math.random().toString(36).substring(3, 8)
    };
  },
  componentDidMount: function componentDidMount() {
    var value = toArray(this.props.value);
    this.selectedValue = value;
    this.renderScroller('', 0, value[0]);
    this.isFirstInit = false;
  },
  componentDidUpdate: function componentDidUpdate() {
    var value = toArray(this.props.value);
    this.selectedValue = value;
    this.renderScroller('', 0, value[0]);
  },
  renderScroller: function renderScroller(preValue, index, defaultValue) {
    var _this = this;

    var _props2 = this.props,
        data = _props2.data,
        columns = _props2.columns,
        itemClass = _props2.itemClass,
        value = _props2.value;

    data = toArray(data, true);
    value = toArray(value);
    var isChain = data.length === 1 && columns > 0;

    columns = columns || data.length;
    var isMult = columns > 1;

    if (index === columns) return;

    var currList = void 0,
        currValue = void 0;

    if (isChain) {
      currList = index === 0 ? data[0].filter(function (v) {
        return !v.parent;
      }) : data[0].filter(function (v) {
        return v.parent == preValue;
      });
      currValue = defaultValue || currList[0].value;
    } else {
      currList = data[index];
      currValue = defaultValue || currList[0];
    }

    var update = !isChain || isChain && index == columns - 1;
    this.scrollers[index] && this.scrollers[index].destroy();
    this.scrollers[index] = new _scroller2.default('#' + this.getId(index), {
      data: currList,
      defaultValue: currValue,
      itemClass: itemClass,
      onSelect: function onSelect(v) {
        _this.setSelectedValue(v, index, isMult, update);
        isChain && _this.renderScroller(v, index + 1);
      }
    });
    this.setSelectedValue(currValue, index, isMult, update);
    defaultValue = defaultValue && value[index + 1];
    this.renderScroller(currValue, index + 1, defaultValue);
  },
  renderItems: function renderItems() {
    var uuid = this.state.uuid,
        t = [];var _props3 = this.props,
        columns = _props3.columns,
        columnWidth = _props3.columnWidth,
        data = _props3.data;

    data = toArray(data, true);
    var count = columns || data.length;

    for (var i = 0; i < count; i++) {
      t.push(_react2.default.createElement(
        FlexItem,
        { key: i },
        _react2.default.createElement('div', { className: 'mt-picker-item', id: this.getId(i) })
      ));
    }
    return t;
  },
  getId: function getId(i) {
    return 'mt-picker-' + this.state.uuid + '-' + i;
  },
  setSelectedValue: function setSelectedValue(v, index, isMult, isUpdate) {
    this.selectedValue[index] = v;
    if (isUpdate && !this.isFirstInit) {
      var res = isMult ? this.selectedValue : this.selectedValue[0];
      this.props.onChange && this.props.onChange(res);
      console.log(res);
    }
  },
  setValue: function setValue(value) {
    value = toArray(value);
    this.selectedValue = value;
    this.renderScroller('', 0, value[0]);
  },
  render: function render() {
    var _props4 = this.props,
        columnWidth = _props4.columnWidth,
        className = _props4.className,
        children = _props4.children,
        others = _objectWithoutProperties(_props4, ['columnWidth', 'className', 'children']);

    return _react2.default.createElement(
      'div',
      { className: 'mt-picker' },
      _react2.default.createElement(
        _flex2.default,
        null,
        this.renderItems()
      )
    );
  }
});

Picker.propTypes = {
  data: _react2.default.PropTypes.array.isRequired,
  value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.array]),
  columns: _react2.default.PropTypes.number,
  columnWidth: _react2.default.PropTypes.array,
  onChange: _react2.default.PropTypes.func
};

Picker.defaultProps = {
  data: [],
  value: [],
  columns: 0,
  itemClass: 'scroller-item',
  columnWidth: [],
  onChange: noop
};

exports.default = Picker;


function toArray(d, inner) {
  if (!inner) {
    return Array.isArray(d) ? d : [d];
  } else {
    return Array.isArray(d[0]) ? d : [d];
  }
}