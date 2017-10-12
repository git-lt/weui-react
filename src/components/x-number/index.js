import React from 'react'
import classNames from 'classnames'
import './index.less'

const Big = require('big.js')
const noop = ()=>{}

var XNumber = React.createClass({
  getInitialState(){
    return {
      currentValue: this.props.value,
    }
  },

  sub(){
    const {min, step, onChange} = this.props;
    if(!this.disabledMin()){
      const x = new Big(this.state.currentValue)
      let curr = x.minus(step) * 1
      if(min !== null && curr < min) curr = min
      this.setState({ currentValue: curr})
      onChange(curr)
    }
  },

  add(){
    const {max, step, onChange} = this.props;
    if(!this.disabledMax()){
      const x = new Big(this.state.currentValue)
      let curr = x.plus(step) * 1
      if(max !== null && curr > max) curr = max
      this.setState({ currentValue: curr})
      onChange(curr)
    }
  },

  blur(){
    if( this.state.currentValue === ''){
      this.setState({ currentValue: 0})
    }
  },

  disabledMin(){
    const min = this.props.min
    const currentValue = this.state.currentValue
    return min === null ? false : (currentValue === '' ? true : currentValue <= min)
  },

  disabledMax(){
    const max = this.props.max
    const currentValue = this.state.currentValue
    return max === null ? false : (currentValue === '' ? true : currentValue >= max)
  },

  componentWillReceiveProps(props){
    this.setState({ currentValue: props.value})
  },

  render(){
    let {
      label, readonly, name, value, width, fillable, buttonStyle
    } = this.props

    let { currentValue } = this.state

    return (
      <div className="weui-cell">
        <div className="weui-cell__bd">{ label }</div>
        <div className={`weui-cell__ft ${buttonStyle === 'round' && 'mt-number-round'}`} style={{fontSize:0}}>
          {
            readonly
              ? value
              : <div>
                  <a onClick={this.sub} className={`mt-number-selector mt-number-selector-sub ${this.disabledMin() && 'mt-number-disabled'}`}>
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><defs></defs><path d="M863.74455 544.00086 163.424056 544.00086c-17.664722 0-32.00086-14.336138-32.00086-32.00086s14.336138-32.00086 32.00086-32.00086l700.320495 0c17.695686 0 31.99914 14.336138 31.99914 32.00086S881.440237 544.00086 863.74455 544.00086z"></path></svg>
                  </a>
                  <input value={currentValue} name={name} className="mt-number-input" style={{width: width}} readOnly={!fillable} pattern="[0-9]*" type="number" onBlur={this.blur} />
                  <a onClick={this.add} className={`mt-number-selector mt-number-selector-plus ${this.disabledMax() && 'mt-number-disabled'}`}>
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><defs></defs><path d="M863.328262 481.340895l-317.344013 0.099772L545.984249 162.816826c0-17.664722-14.336138-32.00086-32.00086-32.00086s-31.99914 14.336138-31.99914 32.00086l0 318.400215-322.368714-0.17718c-0.032684 0-0.063647 0-0.096331 0-17.632039 0-31.935493 14.239806-32.00086 31.904529-0.096331 17.664722 14.208843 32.031824 31.871845 32.095471l322.59234 0.17718 0 319.167424c0 17.695686 14.336138 32.00086 31.99914 32.00086s32.00086-14.303454 32.00086-32.00086L545.982529 545.440667l317.087703-0.099772c0.063647 0 0.096331 0 0.127295 0 17.632039 0 31.935493-14.239806 32.00086-31.904529S880.960301 481.404542 863.328262 481.340895z"></path></svg>
                  </a>
                </div>
          }
        </div>
      </div>
    )
  }
})

XNumber.propTypes ={
  label: React.PropTypes.any,
  value: React.PropTypes.number,
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  readonly: React.PropTypes.bool,
  step: React.PropTypes.number,
  name: React.PropTypes.string,
  fillable: React.PropTypes.bool,
  width: React.PropTypes.number,
  buttonStyle: React.PropTypes.string,
  onChange: React.PropTypes.func,
}

XNumber.defaultProps ={
  label: '',
  value: 0,
  min: null,
  max: null,
  readonly: false,
  step: 1,
  name: '',
  fillable: false,
  width: 50,
  buttonStyle: null, //square或者round
  onChange: noop,
}

export default XNumber
