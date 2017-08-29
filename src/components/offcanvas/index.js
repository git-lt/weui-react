import React from 'react'
import classNames from 'classnames'
import './index.less'

const noop = ()=>{}
window.__$mtOffcanvas = window.__$mtOffcanvas || {}

var Offcanvas = React.createClass({
  getInitialState(){
    this.uuid = 'offcanvas-'+Math.random().toString(16).substr(2).slice(-5)+(new Date()).getTime().toString(16).slice(9);;
    this.isFirstShow = true;

    return {
      active: false,
      display: false,
      maskTransparent: false,
    }
  },
  componentWillReceiveProps(next){
    next.show !== this.state.active && this.update(next.show)
  },
  update(show){
    this.setState({ active: true, display: false, maskTransparent: show && !!Object.keys(window.__$mtOffcanvas).length });
    setTimeout(()=>{
      this.setState({ display: show, active: show});
      if(show){
        this.props.onShow();
        if(this.isFirstShow) this.props.onFirstShow();
        window.__$mtOffcanvas[this.uuid] = 1;
      }else{
        this.props.onHide();
        this.isFirstShow = false;
        delete window.__$mtOffcanvas[this.uuid];
      }
    }, show ? 10 : 400);
  },
  render(){
    let {
      closeByMask, show, position, animate, onClose, hideMask,
      height, width, children, ...others
    } = this.props;

    const { active, display, maskTransparent } = this.state;

    const wrapCls = classNames({
      'mt-offcanvas': true,
      'mt-offcanvas_mask-transparent': maskTransparent || hideMask,
      'active': active,
      [`mt-offcanvas-${position}`]: true,
      [`mt-offcanvas-${position}__show`]: display,
    });

    const innerCls = classNames('mt-offcanvas-inner',{
      [`mt-offcanvas-inner__${animate}`]: position === 'center',
    })

    const sty = {};
    if(height !== 'auto') sty.height = height;
    if(width !== 'auto') sty.width = width;

    return(
      <div>
        <div className={ wrapCls } style={ sty }>
          <div className={ innerCls } style={ sty }>{ children }</div>
        </div>
        <div className="mt-offcanvas-mask"
          onTouchMove={ e => e.preventDefault() }
          onClick={ closeByMask ? onClose : null}
        />
      </div>
    )
  }
})

Offcanvas.propTypes = {
    show: React.PropTypes.bool,
    position: React.PropTypes.string,
    animate: React.PropTypes.string,
    closeByMask: React.PropTypes.bool,
    onClose: React.PropTypes.func,
    onShow: React.PropTypes.func,
    onHide: React.PropTypes.func,
    onFirstShow: React.PropTypes.func,
    hideMask: React.PropTypes.bool,
    height: React.PropTypes.string,
    width: React.PropTypes.string,
};

Offcanvas.defaultProps = {
    show: false,               // 显示隐藏，由外部控制
    position: 'center',        // top/left/bottom/center
    animate: 'slide-in-top',   // 居中显示时的动画，slide-in-top / slide-in-bottom / zoom-in
    closeByMask: true,         // 是否可以点击遮罩关闭
    onClose: noop,             // 关闭事件，组件关闭调用这个事件
    onShow: noop,              // 显示之后的回调
    onHide: noop,              // 关闭之后的回调
    hideMask: false,           // 用于隐藏遮罩，使其透明
    onFirstShow: noop,         // 用于第一次显示时的回调
    height: 'auto',
    width: 'auto',
};

export default Offcanvas
