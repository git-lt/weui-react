'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mask = _react2.default.createClass({
    displayName: 'Mask',
    render: function render() {
        var _props = this.props,
            transparent = _props.transparent,
            className = _props.className,
            show = _props.show,
            others = (0, _objectWithoutProperties3.default)(_props, ['transparent', 'className', 'show']);

        var clz = (0, _classnames2.default)({
            'weui-mask': !transparent,
            'weui-mask_transparent': transparent,
            'mt-mask-enter mask-animated': !transparent && show,
            'mt-mask-leave mask-animated': !transparent && !show
        }, className);

        return _react2.default.createElement('div', (0, _extends3.default)({ className: clz }, others));
    }
});

Mask.propTypes = { transparent: _react2.default.PropTypes.bool };
Mask.defaultProps = { transparent: false };

exports.default = Mask;