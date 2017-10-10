'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _header = require('../header');

var _header2 = _interopRequireDefault(_header);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Msg = _react2.default.createClass({
  displayName: 'Msg',
  renderLinks: function renderLinks(links) {
    return links.map(function (v, i) {
      return _react2.default.createElement(
        'a',
        { href: v.href, key: i, className: 'weui-footer__link' },
        v.text
      );
    });
  },
  render: function render() {
    var _props = this.props,
        show = _props.show,
        title = _props.title,
        desc = _props.desc,
        type = _props.type,
        buttons = _props.buttons,
        footerLinks = _props.footerLinks,
        footerText = _props.footerText,
        className = _props.className,
        _props$header = _props.header,
        header = _props$header === undefined ? {} : _props$header;


    var wrapCls = (0, _classnames2.default)('mt-msg-page', _defineProperty({
      'mt-msg-page__enter': show
    }, className, className));

    var mainIcon = type == 'success' ? _react2.default.createElement('i', { className: 'weui-icon-success weui-icon_msg maincolor' }) : _react2.default.createElement('i', { className: 'weui-icon-warn weui-icon_msg' });

    return _react2.default.createElement(
      'div',
      { className: wrapCls },
      !!header.title && _react2.default.createElement(_header2.default, header),
      _react2.default.createElement(
        'div',
        { className: 'weui-msg' },
        _react2.default.createElement(
          'div',
          { className: 'weui-msg__icon-area' },
          mainIcon
        ),
        _react2.default.createElement(
          'div',
          { className: 'weui-msg__text-area' },
          _react2.default.createElement(
            'h2',
            { className: 'weui-msg__title' },
            title
          ),
          !!desc && _react2.default.createElement(
            'p',
            { className: 'weui-msg__desc' },
            desc
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'weui-msg__opr-area' },
          _react2.default.createElement(
            'p',
            { className: 'weui-btn-area display-block' },
            buttons
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'weui-msg__extra-area' },
          _react2.default.createElement(
            'div',
            { className: 'weui-footer' },
            !!footerLinks.length && _react2.default.createElement(
              'p',
              { className: 'weui-footer__links' },
              this.renderLinks(footerLinks)
            ),
            !!footerText && _react2.default.createElement(
              'p',
              { className: 'weui-footer__text' },
              footerText
            )
          )
        )
      )
    );
  }
});

Msg.propTypes = {
  show: _react2.default.PropTypes.bool,
  title: _react2.default.PropTypes.any,
  desc: _react2.default.PropTypes.any,
  type: _react2.default.PropTypes.string,
  buttons: _react2.default.PropTypes.array,
  footerLinks: _react2.default.PropTypes.array,
  footerText: _react2.default.PropTypes.string,
  header: _react2.default.PropTypes.object
};

Msg.defaultProps = {
  show: false, // 显示隐藏
  title: '操作成功', // 标题, 可以是jsx
  desc: '', // 描述, 可以是jsx
  type: 'success', // 类型  sucess / error
  buttons: [], // Button 组件数组
  footerLinks: [], // 底部链接，[{ href:'', text:'' }]
  footerText: '', // 底部文字
  header: {}
};

exports.default = Msg;