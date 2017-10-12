import React from 'react'
import classNames from 'classnames'
import PopupPicker from '../popup-picker'
import chinaAddress from '../picker/china_address.json'

const noop = ()=>{}

var PopupAddress = React.createClass({
  getAddressName(v){
    let a = [];
    chinaAddress.forEach(item=>{
      if(item.value == v[0]) a[0] = item.name;
      if(item.value == v[1]) a[1] = item.name;
      if(item.value == v[2]) a[2] = item.name;
    })
    return a.join(' ');
  },

  render(){
    return (
      <div>
        <PopupPicker {...this.props} displayFormat={ this.getAddressName }></PopupPicker>
      </div>
    )
  }
})

PopupAddress.propTypes ={
  show: React.PropTypes.bool,
  label: React.PropTypes.any,
  displayFormat: React.PropTypes.func,
  value: React.PropTypes.array,
  cancelText: React.PropTypes.string,
  confirmText: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  columns: React.PropTypes.number,
  onChange: React.PropTypes.func,
  data: React.PropTypes.array,
}

PopupAddress.defaultProps ={
  show: false,
  label: '',
  displayFormat: v=>v,
  value: [],
  data: chinaAddress,
  cancelText: '取消',
  confirmText: '确定',
  placeholder: '',
  columns: 3,
  onChange: noop,
}

export default PopupAddress
