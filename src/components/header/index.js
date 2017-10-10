import React from 'react'
import { browser } from 'amfe-env'
const isWebview = !!browser.isWebview  || browser.name == 'QQ';
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
      title, left, right, showBack, showHome, backText, lineColor,
      children, className, ...others
    } = this.props;

    let lineSty = {}
    lineColor && ( lineSty.backgroundColor = lineColor )

    // webview不展示头
    if(isWebview) return null;

    return(
      <div className="mt-header-wrap">
        <div className="mt-header-inner">
          <div className="mt-header-left">
            {
              showBack && <a className="mt-header-back" href="javascript:;" onClick={ this.goBackEv }>
              <i className="iconfont icon-xiangzuo mt-header-back-icon"></i><span className="mt-header-back-text">{ backText }</span></a>
            }
            { left }
          </div>
          <h1 className="mt-header-title">{ title || children}</h1>
          <div className="mt-header-right">
            { right }
            {showHome && <a className="iconfont icon-shouye mt-header-icon-home" href="javascript:;" onClick={ this.goHome }></a>}
          </div>
          <div className="mt-header-ink-bar maincolor" style={ lineSty }></div>
        </div>
      </div>
    )
  }
})


Header.propTypes = {
  title: React.PropTypes.any.isRequired,
  left: React.PropTypes.any,
  right: React.PropTypes.any,
  showBack: React.PropTypes.bool,
  backText: React.PropTypes.string,
  showHome: React.PropTypes.bool,
  homeUrl: React.PropTypes.string,
  preventGoBack: React.PropTypes.bool,
  lineColor: React.PropTypes.string,
};

Header.defaultProps = {
  title:'', // 标题，一般使用文本，更复杂的可使用jsx
  backText: '',
  lineColor: '',
  showBack: true,// 是否显示左侧的返回按钮
  showHome: true,// 是否显示右侧的首页图标
  homeUrl: '',
  onClickBack: null,
  preventGoBack: false,//是否阻止返回
  left: '',// 可自定义的左侧内容，一般使用文本，更复杂的可使用jsx
  right: '',// 可自定义的右侧内容一般使用文本，更复杂的可使用jsx
};

export default Header;
