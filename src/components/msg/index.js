import React from 'react'
import classNames from 'classnames'
import Header from '../header'
import './index.less';

const Msg = React.createClass({
  renderLinks(links){
    return links.map((v,i)=>{
      return <a href={v.href} key={i} className="weui-footer__link">{v.text}</a>
    })
  },
  render(){
    const {
      show, pageTitle, title, desc, type, buttons,
      footerLinks, footerText, className,
    } = this.props;

    const wrapCls = classNames('mt-msg-page',{
      'mt-msg-page__enter': show,
      [className]: className,
    });

    const mainIcon = type == 'success'
      ? <i className="weui-icon-success weui-icon_msg maincolor"></i>
      : <i className="weui-icon-warn weui-icon_msg"></i>

    return (
      <div className={ wrapCls }>
        {!!pageTitle && <Header title={ pageTitle }/> }
        <div className="weui-msg">
            <div className="weui-msg__icon-area">{ mainIcon }</div>

            <div className="weui-msg__text-area">
                <h2 className="weui-msg__title">{ title }</h2>
                {!!desc && <p className="weui-msg__desc">{ desc }</p>}
            </div>

            <div className="weui-msg__opr-area">
                <p className="weui-btn-area display-block">
                  { buttons }
                </p>
            </div>

            <div className="weui-msg__extra-area">
                <div className="weui-footer">
                  {
                    !!footerLinks.length && <p className="weui-footer__links">
                        {this.renderLinks(footerLinks)}
                    </p>
                  }
                  { !!footerText && <p className="weui-footer__text">{ footerText }</p>}
                </div>
            </div>

        </div>
    </div>
    );
  }
})

Msg.propTypes = {
  show: React.PropTypes.bool,
  pageTitle: React.PropTypes.string,
  title: React.PropTypes.any,
  desc: React.PropTypes.any,
  type: React.PropTypes.string,
  buttons: React.PropTypes.array,
  footerLinks: React.PropTypes.array,
  footerText: React.PropTypes.string,
};

Msg.defaultProps = {
  show: false,         // 显示隐藏
  pageTitle: '',       // 页面标题, header 中的title
  title: '操作成功',    // 标题, 可以是jsx
  desc: '',            // 描述, 可以是jsx
  type: 'success',     // 类型  sucess / error
  buttons: [],         // Button 组件数组
  footerLinks:[],      // 底部链接，[{ href:'', text:'' }]
  footerText: '',      // 底部文字
};

export default Msg
