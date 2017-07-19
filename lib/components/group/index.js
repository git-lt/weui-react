'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Group = _react2.default.createClass({
  displayName: 'Group',
  render: function render() {
    var _props = this.props,
        title = _props.title,
        labelWidth = _props.labelWidth,
        labelAlign = _props.labelAlign,
        labelMarginRight = _props.labelMarginRight,
        form = _props.form,
        marginTop = _props.marginTop,
        children = _props.children,
        className = _props.className,
        others = _objectWithoutProperties(_props, ['title', 'labelWidth', 'labelAlign', 'labelMarginRight', 'form', 'marginTop', 'children', 'className']);

    var cls = (0, _classnames2.default)('weui-cells', _defineProperty({
      'weui-cells_form': form
    }, className, className));

    var styls = {};
    !title && marginTop && (styls.marginTop = marginTop);

    return _react2.default.createElement(
      'div',
      null,
      !!title && _react2.default.createElement(
        'div',
        { className: 'weui-cells__title' },
        title
      ),
      _react2.default.createElement(
        'div',
        { className: cls, style: styls },
        children
      )
    );
  }
});

Group.propTypes = {
  title: _react2.default.PropTypes.any,
  labelWidth: _react2.default.PropTypes.string,
  labelAlign: _react2.default.PropTypes.string,
  labelMarginRight: _react2.default.PropTypes.string,
  marginTop: _react2.default.PropTypes.string,
  form: _react2.default.PropTypes.bool
};

Group.defaultProps = {
  title: '', // 标题 一般使用文本，更复杂的可使用jsx
  labelWidth: '', // 子元素 label 宽度
  labelAlign: '', // 子元素 label 对齐方式
  labelMarginRight: '', // 子元素 label 右边距
  marginTop: '', // 分组的上边距，在没有 title 时有效
  form: false // 是否是表单
};

exports.default = Group;