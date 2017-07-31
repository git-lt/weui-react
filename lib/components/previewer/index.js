'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _photoswipe = require('photoswipe/dist/photoswipe');

var _photoswipe2 = _interopRequireDefault(_photoswipe);

var _photoswipeUiDefault = require('photoswipe/dist/photoswipe-ui-default');

var _photoswipeUiDefault2 = _interopRequireDefault(_photoswipeUiDefault);

require('photoswipe/dist/photoswipe.css');

require('photoswipe/dist/default-skin/default-skin.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://github.com/dimsemenov/PhotoSwipe
var Previewer = _react2.default.createClass({
  displayName: 'Previewer',
  getInitialState: function getInitialState() {
    var imgs = this.props.list.map(function (v) {
      if (!v.msrc) v.msrc = v.src;
      if (typeof v.w === 'undefined') {
        v.w = 0;v.h = 0;
      }
      return v;
    });
    return { imgs: imgs };
  },
  init: function init(index) {
    var self = this;
    var imgs = this.state.imgs;
    var showItem = imgs[index];
    if (!showItem.w || !showItem.h || showItem.w < 5 || showItem.h < 5) {
      var img = new Image();
      img.onload = function () {
        showItem.w = this.width;
        showItem.h = this.height;
        self._init(index);
      };
      img.src = showItem.src;
    } else {
      this._init(index);
    }
  },
  _init: function _init(index) {
    var _this = this;

    var self = this;
    var $el = this.refs.photoswipe.getDOMNode();
    var options = (0, _objectAssign2.default)({
      history: false,
      shareEl: false,
      tapToClose: true,
      index: index
    }, this.props.options);
    this.photoswipe = new _photoswipe2.default($el, _photoswipeUiDefault2.default, this.state.imgs, options);

    this.photoswipe.listen('gettingData', function (index, item) {
      if (!item.w || !item.h || item.w < 1 || item.h < 1) {
        var img = new Image();
        img.onload = function () {
          item.w = this.width;
          item.h = this.height;
          self.photoswipe.updateSize(true);
        };
        img.src = item.src;
      }
    });

    this.photoswipe.init();
    this.photoswipe.listen('close', function () {
      _this.props.onClose && _this.props.onClose();
    });
  },
  show: function show(index) {
    this.init(index);
  },
  close: function close() {
    this.photoswipe.close();
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'pswp vux-previewer', tabIndex: '-1', role: 'dialog', ariaHidden: 'true', ref: 'photoswipe' },
      _react2.default.createElement('div', { className: 'pswp__bg' }),
      _react2.default.createElement(
        'div',
        { className: 'pswp__scroll-wrap' },
        _react2.default.createElement(
          'div',
          { className: 'pswp__container' },
          _react2.default.createElement('div', { className: 'pswp__item' }),
          _react2.default.createElement('div', { className: 'pswp__item' }),
          _react2.default.createElement('div', { className: 'pswp__item' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'pswp__ui pswp__ui--hidden' },
          _react2.default.createElement(
            'div',
            { className: 'pswp__top-bar' },
            _react2.default.createElement('div', { className: 'pswp__counter' }),
            _react2.default.createElement('button', { className: 'pswp__button pswp__button--close', title: 'Close (Esc)' }),
            _react2.default.createElement('button', { className: 'pswp__button pswp__button--share', title: 'Share' }),
            _react2.default.createElement('button', { className: 'pswp__button pswp__button--fs', title: 'Toggle fullscreen' }),
            _react2.default.createElement('button', { className: 'pswp__button pswp__button--zoom', title: 'Zoom in/out' }),
            _react2.default.createElement(
              'div',
              { className: 'pswp__preloader' },
              _react2.default.createElement(
                'div',
                { className: 'pswp__preloader__icn' },
                _react2.default.createElement(
                  'div',
                  { className: 'pswp__preloader__cut' },
                  _react2.default.createElement('div', { className: 'pswp__preloader__donut' })
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'pswp__share-modal pswp__share-modal--hidden pswp__single-tap' },
            _react2.default.createElement('div', { className: 'pswp__share-tooltip' })
          ),
          _react2.default.createElement('button', { className: 'pswp__button pswp__button--arrow--left', title: 'Previous (arrow left)' }),
          _react2.default.createElement('button', { className: 'pswp__button pswp__button--arrow--right', title: 'Next (arrow right)' }),
          _react2.default.createElement(
            'div',
            { className: 'pswp__caption' },
            _react2.default.createElement('div', { className: 'pswp__caption__center' })
          )
        )
      )
    );
  }
});

Previewer.propTypes = {
  list: _react2.default.PropTypes.array,
  options: _react2.default.PropTypes.object
};

Previewer.defaultProps = {
  list: [],
  options: {}
};

exports.default = Previewer;