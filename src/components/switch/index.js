import React from 'react'
import classNames from 'classnames'
import './index.less'

var Switch = React.createClass({
  getInitialState(){
    return { checked: !!this.props.checked }
  },
  changeEv(e){
    this.setState({ checked: !this.state.checked })
    this.props.onChange && this.props.onChange(!this.state.checked);
  },
  render(){
    let {
      label, disabled, checked,
      children, className, ...others
    } = this.props;

    const cls = classNames('weui-cell weui-cell_switch', {
      [className]: className
    });

    return(
      <div className={ cls }>
        <div className="weui-cell__bd">
           <label className="weui-label">{ label }</label>
        </div>
        <div className="weui-cell__ft">
          <input className="weui-switch" type="checkbox"
            disabled={ disabled }
            checked={ this.state.checked }
            onChange={ this.changeEv }/>
        </div>
      </div>
    )
  }
})

Switch.propTypes = {
  label: React.PropTypes.any,     // 标题 一般使用文本，更复杂的可使用jsx
  checked: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
};

Switch.defaultProps = {
  label: '',
  checked: false,
  disabled: false,
};

export default Switch;
