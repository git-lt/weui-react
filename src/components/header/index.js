import React from 'react'
import { isWechat, isAlipay } from '../../utils/mobile_detect'
import './index.less'

var Header = React.createClass({
  goBackEv(){
    if(this.props.onClickBack){
      this.props.onClickBack();
    }else{
      const hasHistory = document.referrer.indexOf(location.host) >= 0;
      if(hasHistory){
        history.go(-1)
      }else{
        this.goHome()
      }
    }
  },
  goHome(){
    let homeUrl = this.props.homeUrl
    if(homeUrl) window.location.href = homeUrl
  },
  componentDidMount(){
    document.title = this.props.title || this.props.children;
    if (/ip(hone|od|ad)/i.test(navigator.userAgent)) {
        var i = document.createElement('iframe');
        i.src = '/favicon.ico';
        i.style.display = 'none';
        i.onload = function() {
            setTimeout(function(){
                i.remove();
            }, 9)
        }
        document.body.appendChild(i);
    }
  },

  render(){
    let {
      title, leftSlot, rightSlot, showBack, showHome, backText,
      children, className, ...others
    } = this.props;

    // 非浏览器不展示头
    if(isWechat || isAlipay) return null;

    return(
      <div className="mt-header">
        <div className="mt-header-left">
          {
            showBack && <a className="mt-header-back" href="javascript:;" onClick={ this.goBackEv }>
            <i className="iconfont icon-xiangzuo mt-header-back-icon"></i><span className="mt-header-back-text">{ backText }</span></a>
          }
          { leftSlot }
        </div>
        <h1 className="mt-header-title">{ title || children}</h1>
        <div className="mt-header-right">
          { rightSlot }
          {showHome && <a className="iconfont icon-shouye mt-header-icon-home" href="javascript:;" onClick={ this.goHome }></a>}
        </div>
        <div className="mt-header-ink-bar mainbackground"></div>
      </div>
    )
  }
})


Header.propTypes = {
  title: React.PropTypes.any.isRequired, // 标题，一般使用文本，更复杂的可使用jsx
  leftSlot: React.PropTypes.any,         // 可自定义的左侧内容，一般使用文本，更复杂的可使用jsx
  rightSlot: React.PropTypes.any,        // 可自定义的右侧内容一般使用文本，更复杂的可使用jsx
  showBack: React.PropTypes.bool,        // 是否显示左侧的返回按钮
  backText: React.PropTypes.string,
  showHome: React.PropTypes.bool,        // 是否显示右侧的首页图标
  homeUrl: React.PropTypes.string,
  preventGoBack: React.PropTypes.bool,   //是否阻止返回
};

Header.defaultProps = {
  title:'',
  backText: '',
  showBack: true,
  showHome: true,
  homeUrl: '',
  onClickBack: null,
  preventGoBack: false,
  leftSlot: '',
  rightSlot: '',
};

export default Header;
