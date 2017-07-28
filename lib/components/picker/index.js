'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _flex = require('../flex');

require('./scroller.css');

var _scroller = require('./scroller');

var _scroller2 = _interopRequireDefault(_scroller);

var _chain = require('./chain');

var _chain2 = _interopRequireDefault(_chain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// import value2name from '../../filters/value2name'

var Picker = _react2.default.createClass({
  displayName: 'Picker',
  getInitialState: function getInitialState() {
    var _props = this.props,
        value = _props.value,
        data = _props.data;


    if (!Array.isArray(value)) value = [value];
    if (!Array.isArray(data[0])) data = [data];

    this.scrollers = [];

    return {
      currData: data,
      currValue: value,
      uuid: Math.random().toString(36).substring(3, 8)
    };
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    var $items = document.querySelectorAll('.mt-picker-item');
    $items = Array.prototype.slice.call($items);
    var _state = this.state,
        currData = _state.currData,
        currValue = _state.currValue;

    var count = currData.length;
    // console.log(currValue)

    var isChain = Array.isArray(currData[count - 1]) && currData[count - 1][0] && currData[count - 1][0].parent;
    isChain = typeof isChain !== 'undefined';

    console.log(isChain);

    $items.forEach(function (item, i) {
      var defV = currValue[i] ? currValue[i] || currValue[i].value : '';
      console.log(defV);
      _this.scrollers.push(new _scroller2.default(item, {
        data: currData[i],
        defaultValue: defV + '',
        itemClass: _this.props.itemClass,
        onSelect: function onSelect(value) {
          console.log(value);
        }
      }));
    });

    // console.log()
    // console.log(Array.prototype.slice.call(document.querySelector('.mt-picker-item')))
    // debugger;
  },


  // componentWillReci

  // init(data, value){
  //   // if(!data || !data.length) return;
  //   // let { currentValue, currentData } = this.state
  // },

  renderItems: function renderItems() {
    var _state2 = this.state,
        uuid = _state2.uuid,
        currData = _state2.currData,
        res = [];


    return currData.map(function (v, i) {
      return _react2.default.createElement(
        _flex.FlexItem,
        { key: i },
        _react2.default.createElement('div', { className: 'mt-picker-item', id: 'mt-picker-' + uuid + '-' + i })
      );
    });

    return res;
  },
  render: function render() {
    var _props2 = this.props,
        columnWidth = _props2.columnWidth,
        className = _props2.className,
        children = _props2.children,
        others = _objectWithoutProperties(_props2, ['columnWidth', 'className', 'children']);

    return _react2.default.createElement(
      'div',
      { className: 'mt-picker' },
      _react2.default.createElement(
        _flex.Flex,
        null,
        this.renderItems()
      )
    );
  }
});

Picker.propTypes = {
  data: _react2.default.PropTypes.array,
  value: _react2.default.PropTypes.array,
  columnWidth: _react2.default.PropTypes.array
};

Picker.defaultProps = {
  data: [],
  value: [],
  itemClass: 'scroller-item',
  columnWidth: []
};

exports.default = Picker;