import React from 'react'
import classNames from 'classnames'
import './index.less'

const noop = ()=>{}

var Offcanvas = React.createClass({
  getInitialState(){
    return {
      active: false,
      display: false,
    }
  },
  componentWillReceiveProps(next){
    if(next.show !== this.state.active){
      return this.update(next.show);
    }
    return false;
  },
  update(show){
    this.setState({active: true, display: false});
    setTimeout(()=>{
      this.setState({ display: show, active: show});
      show ? this.props.onShow() : this.props.onHide();
    }, show ? 10 : 400);
  },
  render(){
    let {
      closeByMask, show, position, animate, onClose,
      children, ...others
    } = this.props;

    const { active, display } = this.state;

    const wrapCls = classNames({
      'mt-offcanvas': true,
      'active': active,
      [`mt-offcanvas-${position}`]: true,
      [`mt-offcanvas-${position}__show`]: display,
    });

    const innerCls = classNames('mt-offcanvas-inner',{
      [`mt-offcanvas-inner__${animate}`]: position === 'center',
    })

    return(
      <div>
        <div className={ wrapCls }>
          <div className={ innerCls }>{ children }</div>
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
};

Offcanvas.defaultProps = {
    show: false,                 // 显示隐藏，由外部控制
    position: 'center',          // top/left/bottom/center
    animate: 'slide-in-top',     // 居中显示时的动画，slide-in-top / slide-in-bottom / zoom-in
    closeByMask: true,           // 是否可以点击遮罩关闭
    onClose: noop,             // 关闭事件，组件关闭调用这个事件
    onShow: noop,              // 显示之后的回调
    onHide: noop,              // 关闭之后的回调
};

export default Offcanvas
