import React from 'react'
import classNames from 'classnames'

var Button = React.createClass({
  clickEv(e){
    const { href, onClick } = this.props;
    !!href && ( window.location.href = href );
    !!onClick && onClick(e);
  },
  render(){
    let {className, type, children, text, disabled, actionType, mini, plain, loading, ...others} = this.props;

    const cls = classNames('weui-btn', {
        'weui-btn_disabled': disabled,
        'weui-btn_mini': mini,
        'packagemainbackground': type === 'primary' && !plain,
        'maincolor mainbordercolor': plain && type==='primary',
        [`weui-btn_${type}`]: true,
        [`weui-btn_plain-${type}`]: plain,
        'weui-btn_loading': loading,
        [className]: className
    });

    return(
      <button className={ cls } disabled={ disabled } { ...others } type={ actionType } onClick={ this.clickEv }>
        { loading && <i className="weui-loading"></i> }
        { text || children }
      </button>
    )
  }
})

Button.propTypes = {
  disabled: React.PropTypes.bool,
  type: React.PropTypes.string,
  mini: React.PropTypes.bool,
  plain: React.PropTypes.bool,
  text: React.PropTypes.string,
  loading: React.PropTypes.bool,
  href: React.PropTypes.string,
  actionType: React.PropTypes.string,
};

Button.defaultProps = {
  disabled: false,  // 是否禁用
  type: 'default',  // 样式主题：default / primary / warn
  mini: false,      // 大小是否是 mini
  plain: false,     // 是否是边框按钮
  text: '',         // 按钮文字
  href: '',         // 跳转链接
  loading: false,   // 是否显示loading
  actionType:'button', // 按钮类型 type=buttton / type=reset
};

export default Button;
