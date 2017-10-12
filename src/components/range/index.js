import React from 'react'
import Powerange from './powerange'
import './powerange.less'
const noop = ()=>{}

var Range = React.createClass({
  getInitialState(){
    this.$el = null;
    this.currentValue = this.props.value;
    return {}
  },

  componentDidMount(){
    const {
      decimal, min, max, minHTML, maxHTML, disabled, onChange,
      disabledOpacity, step,rangeBarHeight, rangeHandleHeight,
    } = this.props

    const currentValue = this.currentValue
    // console.log(this.$el)
    // console.log(this.$el.parentNode)
    // return
    const initialBarWidth = window.getComputedStyle(this.$el.parentNode).width.replace('px', '') - 80

    let options = {
      callback: onChange,
      decimal,
      start: currentValue,
      min,
      max,
      minHTML,
      maxHTML,
      disabled,
      disabledOpacity,
      initialBarWidth,
    }

    if(step !== 0 ) options.step = step;

    this.range = new Powerange(this.$el.querySelector('.mt-range-input'), options)

    const handleTop = (rangeHandleHeight - rangeBarHeight) / 2
    this.$el.querySelector('.range-handle').style.top = `-${handleTop}px`
    this.$el.querySelector('.range-bar').style.height = `${rangeBarHeight}px`
    window.addEventListener('orientationchange', this.handleOrientationchange, false)
  },

  handleOrientationchange(){
    this.update();
  },

  update(){
    const { min, max, step, onChange} = this.props
    let currentValue = this.currentValue
    if(currentValue < min) currentValue = min
    if(currentValue > max) currentValue = max

    this.range.reInit({
      min,
      max,
      step,
      value: currentValue
    })
    this.range.setStart(currentValue)
    this.range.steStep()
    this.currentValue = currentValue
    console.log(currentValue)
    onChange(currentValue)
    console.log(currentValue)
  },

  componentDidUpdate(){
    const { value, onChange } = this.props
    if(this.currentValue !== value){
      this.range && this.range.setStart(value)
      console.log('change')
      // onChange(value)
    }
  },

  componentWillUnMount(){
    window.removeEventListener('orientationchange', this.handleOrientationchange, false)
  },

  render(){
    return (
      <div className="mt-range-input-box" ref={el=>this.$el= (el && el.getDOMNode())}>
        <input className="mt-range-input" defaultValue={ this.currentValue } />
      </div>
    )
  }
})

Range.propTypes ={
  value: React.PropTypes.number,
  decimal: React.PropTypes.bool,
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  minHTML: React.PropTypes.string,
  maxHTML: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  disabledOpacity: React.PropTypes.number,
  step: React.PropTypes.number,
  rangeBarHeight: React.PropTypes.number,
  rangeHandleHeight: React.PropTypes.number,
  onChange: React.PropTypes.func,
}


Range.defaultProps ={
  value: 0,
  decimal: false,
  min: 0,
  max: 100,
  minHTML: '',
  maxHTML: '',
  disabled: false,
  disabledOpacity: .6,
  step: 1,
  rangeBarHeight: 1,
  rangeHandleHeight: 30,
  onChange: noop,
}

export default Range
