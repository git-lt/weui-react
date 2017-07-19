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

var FormPreview = _react2.default.createClass({
  displayName: 'FormPreview',
  renderItems: function renderItems(list) {
    return list.map(function (v, i) {
      return _react2.default.createElement(
        'div',
        { className: 'weui-form-preview__item', key: i },
        _react2.default.createElement(
          'label',
          { className: 'weui-form-preview__label' },
          v.label
        ),
        _react2.default.createElement(
          'span',
          { className: 'weui-form-preview__value' },
          v.value
        )
      );
    });
  },
  renderButtons: function renderButtons(buttons) {
    return buttons.map(function (v, i) {
      var cls = v.type === 'default' ? 'weui-form-preview__btn_default' : 'weui-form-preview__btn_primary maincolor';
      return _react2.default.createElement(
        'a',
        { className: 'weui-form-preview__btn ' + cls, onClick: v.onClick },
        v.label
      );
    });
  },
  render: function render() {
    var _props = this.props,
        label = _props.label,
        value = _props.value,
        items = _props.items,
        buttons = _props.buttons,
        className = _props.className,
        others = _objectWithoutProperties(_props, ['label', 'value', 'items', 'buttons', 'className']);

    var cls = (0, _classnames2.default)('weui-form-preview', _defineProperty({}, className, className));

    return _react2.default.createElement(
      'div',
      { className: cls },
      !!label && _react2.default.createElement(
        'div',
        { className: 'weui-form-preview__hd' },
        _react2.default.createElement(
          'label',
          { className: 'weui-form-preview__label' },
          label
        ),
        !!value && _react2.default.createElement(
          'em',
          { className: 'weui-form-preview__value' },
          value
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'weui-form-preview__bd' },
        this.renderItems(items)
      ),
      _react2.default.createElement(
        'div',
        { className: 'weui-form-preview__ft' },
        this.renderButtons(buttons)
      )
    );
  }
});

FormPreview.propTypes = {
  label: _react2.default.PropTypes.any, // 一般使用文本，更复杂的可使用jsx
  value: _react2.default.PropTypes.string,
  items: _react2.default.PropTypes.array,
  buttons: _react2.default.PropTypes.array
};

FormPreview.defaultProps = {
  label: '', //标题
  value: '', //标题数值
  items: [], // 键值对数组 [{label: '', value:''}]
  buttons: [] // 按钮配置数组 [{label: '', onClick:, type:'primary/default'}]
};

exports.default = FormPreview;