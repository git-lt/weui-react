import React from 'react'
import classNames from 'classnames'
import './index.less'

var Input = React.createClass({
  getInitialState(){
    return {
      value: this.props.value,
    }
  },

  onChange(e){
    const value = e.target.value;
    this.setState({ value })
    this.props.onChange && this.props.onChange(e, value)
  },

  onFocus(e){
    const value = e.target.value
    this.props.onFocus && this.props.onFocus(e, value)
  },

  onBlur(e){
    const value = e.target.value
    this.props.onBlur && this.props.onBlur(e, value)
  },

  onClick(e){
    const value = e.target.value
    this.props.onClick && this.props.onClick(e, value)
  },

  renderSelect(options){
    let { selectOptions, selectedValue } = this.props;

    const opts = selectOptions.map((v, i)=><option value={v.value} key={i}>{v.text}</option>)

    return <select className="weui-select" { ...options } >{ opts }</select>
  },

  clear(){
    this.setState({ value: '' });
    this.props.onChange && this.props.onChange(null, '');
    this.refs.ipt.getDOMNode().focus();
  },

  reset(value = ''){
    this.setState({ value })
    this.props.onChange && this.props.onChange(null, value);
  },

  focus(){
    this.refs.ipt.getDOMNode().focus();
  },

  blur(){
    this.refs.ipt.getDOMNode().blur();
  },

  render(){
    let {
      type, placeholder, label, name, readOnly, disabled, right, vcode, errorInput,
      showClear, labelAlign, autoComplete, maxLength, debounce, selectBefore,showWarnIcon,
      focusInput, className, children, ...others
    } = this.props;

    let { value='' } = this.state;

    const focus = !!name && (focusInput === name);
    const showWarn = !!name && (errorInput === name);

    const clear = focus && showClear && !!value && !readOnly && !disabled;

    const options = { type, placeholder, name, readOnly, disabled, autoComplete, maxLength }

    const clsWarp = classNames('weui-cell', {
      'weui-cell_warn': showWarn,
      'weui-cell_vcode': vcode,
      'weui-cell_select weui-cell_select-after': type === 'select',
      [className]: className
    })

    return (
      <div className={ clsWarp }>
        {
          !!label && <div className="weui-cell__hd">
              <label className="weui-label">{ label }</label>
          </div>
        }
        <div className="weui-cell__bd">
          {
            type !== 'select' && <input className="weui-input" ref="ipt"
              onChange={ this.onChange }
              onFocus={ this.onFocus }
              onBlur={ this.onBlur }
              onClick={ this.onClick }
              value={ value }
              {...options}
            />
          }
          { type === 'select' && this.renderSelect(options) }
        </div>
        <div className="weui-cell__ft">
          {clear && <i className="weui-icon-clear" onClick={ this.clear }></i>}
          {showWarn && showWarnIcon && <i className="weui-icon-warn"></i>}
          { right }
      </div>
    </div>
    );
  }
})

Input.propTypes = {
  type: React.PropTypes.string,
  right: React.PropTypes.any,
  label: React.PropTypes.any,

  showClear: React.PropTypes.bool,
  vcode: React.PropTypes.bool,
  labelAlign: React.PropTypes.string,

  focusInput: React.PropTypes.string, // 必填
  name: React.PropTypes.string,         // 必填
  errorInput: React.PropTypes.string,
  value: React.PropTypes.any,

  showWarnIcon: React.PropTypes.bool,

  readOnly: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  placeholder: React.PropTypes.string,
  autoComplete: React.PropTypes.string,
  maxLength: React.PropTypes.string,

  debounce: React.PropTypes.number,
  selectOptions: React.PropTypes.array,
  selectedValue: React.PropTypes.any,
};

Input.defaultProps = {
  type: 'text',             // text,number,password,tel,select
  right: null,              // 右侧的自定义内容，如验证码图片，发送验证码按钮等
  placeholder: '',
  label: '',
  value: '',
  name: '',
  focusInput: '',
  errorInput: '',
  readOnly: false,
  disabled: false,
  showClear: false,         // 输入时是否显示清除
  vcode: false,             // 是否是验证码输入
  labelAlign: '',
  showWarnIcon: true,       // 是否显示错误提示图标，有时输入框太小，不需要显示icon
  autoComplete: 'off',      // 自动提示
  maxLength: '999',
  debounce: 300,
  selectOptions: [],        // select的数据 [{vlaue:'', text:''}]
  selectedValue: '',        // select默认选中值
};

export default Input
