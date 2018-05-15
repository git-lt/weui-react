'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// import { browser, thirdapp } from 'amfe-env'
// let inMachine = false
// try{
//   inMachine = window.localStorage.getItem('fromMachine') === '1'
// }catch(e){}
// const isWebview = !!browser.isWebview || thirdapp.isWeixin || inMachine

var Header = _react2.default.createClass({
  displayName: 'Header',
  getInitialState: function getInitialState() {
    this.title = this.props.title || this.props.children;
    return {};
  },
  goBackEv: function goBackEv() {
    if (this.props.onClickBack) {
      this.props.onClickBack();
    } else {
      var hasHistory = document.referrer.indexOf(location.host) >= 0;
      if (hasHistory) {
        history.go(-1);
      } else {
        this.goHome();
      }
    }
  },
  goHome: function goHome() {
    var homeUrl = this.props.homeUrl;
    if (homeUrl) window.location.href = homeUrl;
  },
  setTitle: function setTitle(title) {
    document.title = title;
    if (/ip(hone|od|ad)/i.test(navigator.userAgent)) {
      var i = document.createElement('iframe');
      i.src = '/favicon.ico';
      i.style.display = 'none';
      i.onload = function () {
        setTimeout(function () {
          i.remove();
        }, 9);
      };
      document.body.appendChild(i);
    }
  },
  componentDidMount: function componentDidMount() {
    !!this.title && this.setTitle(this.title);
  },
  componentDidUpdate: function componentDidUpdate() {
    var nextTitle = this.props.title || this.props.children || '';
    if (this.title !== nextTitle) {
      this.setTitle(nextTitle);
      this.title = nextTitle;
    }

    console.log('header didUpdate: ', nextTitle);
  },
  render: function render() {
    var _props = this.props,
        title = _props.title,
        left = _props.left,
        right = _props.right,
        showBack = _props.showBack,
        showHome = _props.showHome,
        backText = _props.backText,
        lineColor = _props.lineColor,
        children = _props.children,
        className = _props.className,
        others = _objectWithoutProperties(_props, ['title', 'left', 'right', 'showBack', 'showHome', 'backText', 'lineColor', 'children', 'className']);

    var lineSty = {};
    lineColor && (lineSty.backgroundColor = lineColor);

    // webview不展示头
    // if(isWebview) return null;

    return _react2.default.createElement(
      'div',
      { className: 'mt-header-wrap' },
      _react2.default.createElement(
        'div',
        { className: 'mt-header-inner' },
        _react2.default.createElement(
          'div',
          { className: 'mt-header-left' },
          showBack && _react2.default.createElement(
            'a',
            { className: 'mt-header-back', href: 'javascript:;', onClick: this.goBackEv },
            _react2.default.createElement('i', { className: 'iconfont icon-xiangzuo mt-header-back-icon' }),
            _react2.default.createElement(
              'span',
              { className: 'mt-header-back-text' },
              backText
            )
          ),
          left
        ),
        _react2.default.createElement(
          'h1',
          { className: 'mt-header-title' },
          title || children
        ),
        _react2.default.createElement(
          'div',
          { className: 'mt-header-right' },
          right,
          showHome && _react2.default.createElement('a', { className: 'iconfont icon-shouye mt-header-icon-home', href: 'javascript:;', onClick: this.goHome })
        ),
        _react2.default.createElement('div', { className: 'mt-header-ink-bar maincolor', style: lineSty })
      )
    );
  }
});

Header.propTypes = {
  title: _react2.default.PropTypes.any.isRequired,
  left: _react2.default.PropTypes.any,
  right: _react2.default.PropTypes.any,
  showBack: _react2.default.PropTypes.bool,
  backText: _react2.default.PropTypes.string,
  showHome: _react2.default.PropTypes.bool,
  homeUrl: _react2.default.PropTypes.string,
  preventGoBack: _react2.default.PropTypes.bool,
  lineColor: _react2.default.PropTypes.string
};

Header.defaultProps = {
  title: '', // 标题，一般使用文本，更复杂的可使用jsx
  backText: '',
  lineColor: '',
  showBack: true, // 是否显示左侧的返回按钮
  showHome: true, // 是否显示右侧的首页图标
  homeUrl: '',
  onClickBack: null,
  preventGoBack: false, //是否阻止返回
  left: '', // 可自定义的左侧内容，一般使用文本，更复杂的可使用jsx
  right: '' // 可自定义的右侧内容一般使用文本，更复杂的可使用jsx
};

exports.default = Header;