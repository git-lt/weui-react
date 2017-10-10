import React from 'react'
import classNames from 'classnames'
import './index.less'
import Offcanvas from '../offcanvas'
import PopupHeader from '../popup-header'
import Flex from '../flex'

const FlexItem = Flex.FlexItem

const noop = ()=>{}

var PopupRadio = React.createClass({
  getInitialState(){
    const { show, value, displayFormat, placeholder } = this.props

    this.tempValue = value;

    return {
      show: !!show,
      currValue: value.slice(),
    }
  },

  onShow(){
    this.setState({ show: true })
  },

  onPickerChange(v){
    this.tempValue = v;
  },

  onHide(isConfirm){
    this.setState({ show: false })
    if(isConfirm){
      this.props.onChange(this.tempValue);
      this.setState({ currValue: this.tempValue})
    }
  },

  render(){
    const {
      label, inlineDesc, displayFormat, value, data, placeholder,
      cancelText, confirmText, columns,
    } = this.props

    let { show, currValue } = this.state

    return (
      <div className="mt-cell-box">
        <div className="weui-cell mt-tap-active weui-cell_access" onClick={ this.onShow }>
          <div className="weui-cell__bd">
            { label }
          </div>
          <div className="weui-cell__ft">{ currValue ? displayFormat(currValue) : placeholder }</div>
        </div>

        <Offcanvas show={ show } position="bottom" closeByMask onClose={ this.onHide }>
          <div className="mt-popup-picker-container">
            <PopupHeader leftText="取消" rightText="确定" onClickLeft={ ()=>this.onHide(false) } onClickRight={ ()=>this.onHide(true) }/>
          </div>
        </Offcanvas>
      </div>
    )
  }
})

PopupRadio.propTypes ={
  show: React.PropTypes.bool,
  label: React.PropTypes.any,
  displayFormat: React.PropTypes.func,
  value: React.PropTypes.array,
  cancelText: React.PropTypes.string,
  confirmText: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  columns: React.PropTypes.number,
  onChange: React.PropTypes.func,
}


PopupRadio.defaultProps ={
  show: false,
  label: '',
  displayFormat: v=>v,
  value: '',
  cancelText: '取消',
  confirmText: '确定',
  placeholder: '',
  columns: 0,
  onChange: noop,
}

export default PopupRadio
