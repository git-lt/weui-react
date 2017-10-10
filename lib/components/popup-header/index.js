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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var noop = function noop() {};

var PopupHeader = _react2.default.createClass({
  displayName: 'PopupHeader',
  render: function render() {
    var _props = this.props,
        leftText = _props.leftText,
        rightText = _props.rightText,
        title = _props.title,
        showBottomBorder = _props.showBottomBorder,
        onClickRight = _props.onClickRight,
        onClickLeft = _props.onClickLeft,
        className = _props.className,
        others = _objectWithoutProperties(_props, ['leftText', 'rightText', 'title', 'showBottomBorder', 'onClickRight', 'onClickLeft', 'className']);

    var cls = (0, _classnames2.default)('mt-popup-header', className);

    return _react2.default.createElement(
      'div',
      { className: cls },
      _react2.default.createElement(
        'div',
        { className: 'mt-popup-header-left', onClick: onClickLeft },
        leftText
      ),
      _react2.default.createElement(
        'div',
        { className: 'mt-popup-header-title' },
        title
      ),
      _react2.default.createElement(
        'div',
        { className: 'mt-popup-header-right', onClick: onClickRight },
        rightText
      )
    );
  }
});

PopupHeader.propTypes = {
  leftText: _react2.default.PropTypes.string,
  rightText: _react2.default.PropTypes.string,
  title: _react2.default.PropTypes.string,
  showBottomBorder: _react2.default.PropTypes.bool,
  onClickRight: _react2.default.PropTypes.func,
  onClickLeft: _react2.default.PropTypes.func
};

PopupHeader.defaultProps = {
  leftText: '',
  rightText: '',
  title: '',
  showBottomBorder: true,
  onClickRight: noop,
  onClickLeft: noop
};

exports.default = PopupHeader;