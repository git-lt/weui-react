import React from 'react'
import classNames from 'classnames'
import './index.less'
import Offcanvas from '../offcanvas'

const noop = ()=>{}

const uuid = ()=>{
  return Math.random().toString(16).substr(2).slice(-5)+(new Date()).getTime().toString(16).slice(9);
}

var PopupRadio = React.createClass({
  getInitialState(){
    const { show, value, displayFormat, placeholder } = this.props

    return {
      show: !!show,
      currValue: value+'',
    }
  },

  onClick(v){
    this.props.onCheck(v);
    this.setState({currValue: v, show: false })
  },

  render(){
    const {
      label, inlineDesc, displayFormat, value, data, placeholder,
    } = this.props

    let { show, currValue } = this.state

    return (
      <div className="mt-cell-box">
        <div className="weui-cell weui-cell_access" onClick={ ()=>this.setState({ show: true }) }>
          <div className="weui-cell__bd">
            { label }
          </div>
          <div className="weui-cell__ft">{ currValue ? displayFormat(currValue) : placeholder }</div>
        </div>

        <Offcanvas show={ show } position="bottom" closeByMask onClose={ ()=>this.setState({ show: false }) }>
          <div className="mt-popup-radio-container">
            <div className="weui-cells weui-cells_radio">
            {
              data.map((v, i)=>{
                const id = 'r-'+uuid();
                if(typeof v !== 'object') v = { label: v, value: v}
                return (
                  <label className="weui-cell weui-check__label" htmlFor={ id } onClick={ ()=>this.onClick(v.value) }>
                      <div className="weui-cell__bd">
                          <p>{ v.label }</p>
                          {!!v.desc && <div className="weui-cell__bd-desc">{ v.desc }</div>}
                      </div>
                      <div className="weui-cell__ft">
                          <input type="radio" className="weui-check" value={ v.value } checked={ currValue == v.value } onChange={()=>{}} id={ id } />
                          <span className="weui-icon-checked"></span>
                      </div>
                  </label>
                )
              })
            }
            </div>
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
  value: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  data: React.PropTypes.array,
  onCheck: React.PropTypes.func,
}


PopupRadio.defaultProps ={
  show: false,
  label: '',
  displayFormat: v=>v,
  value: '',
  placeholder: '',
  onCheck: noop,
  data: [], // { label, value, desc }
}

export default PopupRadio
