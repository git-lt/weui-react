'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Mask = _react2.default.createClass({
    displayName: 'Mask',
    render: function render() {
        var _props = this.props,
            transparent = _props.transparent,
            className = _props.className,
            show = _props.show,
            others = _objectWithoutProperties(_props, ['transparent', 'className', 'show']);

        var clz = (0, _classnames2.default)({
            'weui-mask': !transparent,
            'weui-mask_transparent': transparent,
            'mt-mask-enter mask-animated': !transparent && show,
            'mt-mask-leave mask-animated': !transparent && !show
        }, className);

        return _react2.default.createElement('div', _extends({ className: clz }, others));
    }
});

Mask.propTypes = { transparent: _react2.default.PropTypes.bool };
Mask.defaultProps = { transparent: false };

exports.default = Mask;