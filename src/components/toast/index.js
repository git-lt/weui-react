import React from 'react';
import classNames from 'classnames';
import Mask from '../mask'
import './index.less'

const iconTpls = {
  'loading': <i className="weui-icon_toast weui-loading"></i>,
  'success': <i className="weui-icon_toast weui-icon-success-no-circle"></i>,
  'cancel': <i className="weui-icon_toast weui-icon-cancel"></i>,
}
const noop = ()=>{};

var Toast = React.createClass({
  getInitialState: function(){
    return { display: this.props.show }
  },

  componentWillReceiveProps: function(next){
    if(next.show !== this.state.display){
      return this.update(next.show);
    }
    return false;
  },

  update(show){
    this.setState({ display: true });

    setTimeout(()=>{
      !show && this.setState({ display: false });
      show ? this.props.onShow() : this.props.onClose();
    }, 400)
  },
  render(){
    let {className, type, children, position, show, message, ...others} = this.props;

    const cls = classNames('weui-toast', {
        'mt-toast-enter toast-animated': show && position !== 'top' && position !== 'bottom',
        'mt-toast-leave toast-animated': !show && position !== 'top' && position !== 'bottom',
        'mt-toast-top mt-toast-top-enter animated-y': show && position === 'top',
        'mt-toast-top mt-toast-top-leave animated-y': !show && position === 'top',
        'mt-toast-bottom mt-toast-bottom-enter animated-y': show && position === 'bottom',
        'mt-toast-bottom mt-toast-bottom-leave animated-y': !show && position === 'bottom',
        [className]: className
    });

    const iconTpl = iconTpls[type] || null;
    if(type == 'warning') message = <span className="weui-toast__content-warning"><i className="weui-icon-warn weui-icon_msg-primary"></i> { message }</span>;

    return(
      <div  style={{display: this.state.display ? 'block' : 'none'}}>
          <Mask transparent={ true }></Mask>
          <div className={`weui-toast-wrap ${position}`}>
            <div className={ cls } {...others}  ref="mtToast">
                { iconTpl }
                <p className="weui-toast__content">{message || children}</p>
            </div>
          </div>
      </div>
    )
  }
})


Toast.propTypes = {
    /**
     * display tips
     */
    show: React.PropTypes.bool,
    /**
     * type: `default`, `success`, `loading`, 'warning','success','cancel'
     */
    type: React.PropTypes.string,
    /**
     * position: top`, `bottom`
     */
    position: React.PropTypes.string,
    /**
     * message: anything
     */
    message: React.PropTypes.any,
    /**
     * onShow: opened callback
     */
    onShow: React.PropTypes.func,
    /**
     * onShow: closed callback
     */
    onClose: React.PropTypes.func,
};

Toast.defaultProps = {
    show: false,
    type: 'default',
    position: '',
    message: '',
    onShow: noop,
    onClose: noop,
};

export default Toast
