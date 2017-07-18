import React from 'react'
import classNames from 'classnames'
import './index.less'

const noop = ()=>{};

var Dialog = React.createClass({
  getInitialState: function(){
    return {
      display: false,
      active: false,
    }
  },

  componentWillReceiveProps: function(next, prev){
    return next.show !== this.state.display ? this.update(next.show) : false;
  },

  update(show){
    this.setState({ display: false, active: true });
    if(this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(()=>{
      this.setState({ display: show, active: show });
      show ? this.props.onShow() : this.props.onClose();
    }, show ? 0 : 500)
  },

  renderButtons() {
      return this.props.buttons.map((action, idx) => {
          let {type, label, ...others} = action;

          type = type ? type : 'primary';

          const className = classNames({
              'weui-dialog__btn weui-dialog__btn_default': type === 'default',
              'weui-dialog__btn weui-dialog__btn_primary maincolor': type === 'primary'
          });

          return (
              <a key={idx} href="javascript:;" {...others} className={className}>{label}</a>
          );
      });
  },

  render() {
      const {title, className, children, buttons, message, ...others} = this.props;
      const { active, display } = this.state;

      const wrapCls = classNames('mt-dialog-wrap', {
        'mt-dialog-wrap__active': active,
        'mt-dialog-wrap__enter': display
      })

      const innerCls = classNames('weui-dialog', {
          [className]: className
      })

      return (
          <div>
              <div className={wrapCls}>
                <div className={innerCls} {...others} ref="mtDialogCon">
                    {
                      !!title && <div className="weui-dialog__hd">
                          <strong className="weui-dialog__title">{title}</strong>
                      </div>
                    }
                    <div className="weui-dialog__bd"> {message || children} </div>
                    <div className="weui-dialog__ft"> {this.renderButtons()} </div>
                </div>
              </div>
              <div className="weui-mask mt-dialog-mask" onTouchMove={ e=>{e.preventDefault()} }></div>
          </div>
      );
  }
})

Dialog.propTypes = {
  /**
  * buttons: actions buttons
  * exmaple: [{ type:'default/primary', label:'', onClick:()=>{}}]
  */
  buttons: React.PropTypes.array, // [{ type:'default/primary', label:'', onClick:()=>{}}]
  /**
  * show: diaplay tips
  */
  show: React.PropTypes.bool,
  /**
  * title: dialog title
  */
  title: React.PropTypes.string,
  /**
  * onShow: opened callback
  */
  onShow: React.PropTypes.func,
  /**
  * onShow: opened callback
  */
  onClose: React.PropTypes.func,
  /**
   * message: anything
   */
  message: React.PropTypes.any,
};

Dialog.defaultProps = {
    buttons: [],
    show: false,
    title: '',
    message:'',
    onShow: noop,
    onClose: noop,
};


export default Dialog;
