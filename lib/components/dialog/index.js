'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var noop = function noop() {};

var Dialog = _react2.default.createClass({
    displayName: 'Dialog',

    getInitialState: function getInitialState() {
        return {
            display: false,
            active: false
        };
    },

    componentWillReceiveProps: function componentWillReceiveProps(next, prev) {
        return next.show !== this.state.display ? this.update(next.show) : false;
    },

    update: function update(show) {
        var _this = this;

        this.setState({ display: false, active: true });
        if (this.timer) clearTimeout(this.timer);
        this.timer = setTimeout(function () {
            _this.setState({ display: show, active: show });
            show ? _this.props.onShow() : _this.props.onClose();
        }, show ? 0 : 500);
    },
    renderButtons: function renderButtons() {
        return this.props.buttons.map(function (action, idx) {
            var type = action.type,
                label = action.label,
                others = (0, _objectWithoutProperties3.default)(action, ['type', 'label']);


            type = type ? type : 'primary';

            var className = (0, _classnames2.default)({
                'weui-dialog__btn weui-dialog__btn_default': type === 'default',
                'weui-dialog__btn weui-dialog__btn_primary maincolor': type === 'primary'
            });

            return _react2.default.createElement(
                'a',
                (0, _extends3.default)({ key: idx, href: 'javascript:;' }, others, { className: className }),
                label
            );
        });
    },
    render: function render() {
        var _props = this.props,
            title = _props.title,
            className = _props.className,
            children = _props.children,
            buttons = _props.buttons,
            message = _props.message,
            others = (0, _objectWithoutProperties3.default)(_props, ['title', 'className', 'children', 'buttons', 'message']);
        var _state = this.state,
            active = _state.active,
            display = _state.display;


        var wrapCls = (0, _classnames2.default)('mt-dialog-wrap', {
            'mt-dialog-wrap__active': active,
            'mt-dialog-wrap__enter': display
        });

        var innerCls = (0, _classnames2.default)('weui-dialog', (0, _defineProperty3.default)({}, className, className));

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                { className: wrapCls },
                _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ className: innerCls }, others, { ref: 'mtDialogCon' }),
                    !!title && _react2.default.createElement(
                        'div',
                        { className: 'weui-dialog__hd' },
                        _react2.default.createElement(
                            'strong',
                            { className: 'weui-dialog__title' },
                            title
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'weui-dialog__bd' },
                        ' ',
                        message || children,
                        ' '
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'weui-dialog__ft' },
                        ' ',
                        this.renderButtons(),
                        ' '
                    )
                )
            ),
            _react2.default.createElement('div', { className: 'weui-mask mt-dialog-mask', onTouchMove: function onTouchMove(e) {
                    e.preventDefault();
                } })
        );
    }
});

Dialog.propTypes = {
    /**
    * buttons: actions buttons
    * exmaple: [{ type:'default/primary', label:'', onClick:()=>{}}]
    */
    buttons: _react2.default.PropTypes.array, // [{ type:'default/primary', label:'', onClick:()=>{}}]
    /**
    * show: diaplay tips
    */
    show: _react2.default.PropTypes.bool,
    /**
    * title: dialog title
    */
    title: _react2.default.PropTypes.string,
    /**
    * onShow: opened callback
    */
    onShow: _react2.default.PropTypes.func,
    /**
    * onShow: opened callback
    */
    onClose: _react2.default.PropTypes.func,
    /**
     * message: anything
     */
    message: _react2.default.PropTypes.any
};

Dialog.defaultProps = {
    buttons: [],
    show: false,
    title: '',
    message: '',
    onShow: noop,
    onClose: noop
};

exports.default = Dialog;