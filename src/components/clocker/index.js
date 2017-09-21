import React from 'react'
import Clock from './clocker'

const noop = ()=>{}

var Clocker = React.createClass({
  getInitialState(){
    this.clocker = null
    this.time = this.props.time
    return {
      format: this.props.formatFn()
    }
  },
  init(){
    const { onTick, onFinish, formatFn, precision } = this.props

    this.clocker = new Clock(this.time, {
      precision: precision,
      tick: e => {
        const o = e.offset;
        this.setState({format: this.props.formatFn(o.days_1, o.days_2, o.hours_1, o.hours_2, o.minutes_1, o.minutes_2, o.seconds_1, o.seconds_2) })
        onTick(e)
      },
      finish: e=>{
        const o = e.offset;
        this.setState({format: this.props.formatFn(o.days_1, o.days_2, o.hours_1, o.hours_2, o.minutes_1, o.minutes_2, o.seconds_1, o.seconds_2) })
        onFinish(e)
      }
    })
    this.clocker.start()
  },
  componentDidMount(){
    this.init()
  },
  componentWillUnmount(){
    this.clocker.remove()
    this.clocker = null
  },
  componentDidUpdate(){
    if(this.time !== this.props.time){
      this.time = this.props.time
      this.clocker.remove()
      this.init()
    }
  },
  render(){
    let { ...others } = this.props
    return(
      <div {...others}>{ this.state.format }</div>
    )
  }
})


Clocker.propTypes = {
  precision: React.PropTypes.number,
  formatFn: React.PropTypes.func,
  time: React.PropTypes.number,
  onTick: React.PropTypes.func,
  onFinish: React.PropTypes.func,
};

Clocker.defaultProps = {
  precision: 1000,
  time: 0,
  formatFn: (D1, D2, H1, H2, M1, M2, S1, S2)=>{
    if(!D1) D1 = D2 = H1 = H2 = M1 = M2 = S1 = S2 = '0'
    return `${D1+D2} 天 ${H1+H2} 小时 ${M1+M2} 分 ${S1+S2} 秒`
  },
  onTick: noop,
  onFinish: noop,
};

export default Clocker;
