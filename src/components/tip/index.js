import React from 'react'
import classNames from 'classnames'
import './index.less'

const noop = () => {}
const defIcons = {
  'warning':<i className="weui-icon-warn weui-icon_msg-primary mt-tip-hd-icon"></i>,
  'success':<i className="weui-icon-success mt-tip-hd-icon"></i>,
  'error':<i className="weui-icon-cancel mt-tip-hd-icon"></i>,
  'info':<i className="weui-icon-info-circle mt-tip-hd-icon"></i>,
}

var Tip = React.createClass({
  getInitialState(){
    return { show: this.props.show }
  },
  closeEv(){
    this.setState({ show: false })
    this.props.onClose()
  },
  render(){
    let {
      message, icon, closable, duration, type, show,
      children, className, ...others
    } = this.props;

    !icon && ( icon = defIcons[type]);

    const cls = classNames('mt-tip', {
      [`mt-tip_${type}`]: true,
      [className]: className
    });

    const sty = {};
    !this.state.show && (sty.display = 'none');

    return(
      <div className={ cls } style={ sty }>
        <div className="mt-tip-inner">
          {!!icon && <div className="mt-tip-hd">{ icon }</div>}
          <div className="mt-tip-bd">{ message || children }</div>
          { closable && <div className="mt-tip-ft" ><i className="iconfont icon-xinjiantijianren mt-tip-ft-icon" onClick={this.closeEv}></i></div> }
        </div>
      </div>
    )
  }
})

Tip.propTypes = {
  message: React.PropTypes.any,
  icon: React.PropTypes.any,
  closable: React.PropTypes.bool,
  duration: React.PropTypes.number,
  type: React.PropTypes.string,
  show: React.PropTypes.bool,
  onClose: React.PropTypes.func,
};

Tip.defaultProps = {
  message: '',      // 消息内容，可以是任意内容
  icon: '',         // 消息提示图标
  closable: false,  // 是否显示关闭图标
  duration:0,       // 指定时长之后自动关闭
  type: 'warning',  // warning/info/success/error/default
  show: true,       // 是否显示
  onClose: noop,
};

export default Tip;
