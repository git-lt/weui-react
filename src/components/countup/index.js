import React from 'react'
import Count from 'countup.js'

const noop = ()=>{}

var Countup = React.createClass({
  getInitialState(){
    this.$el = null
    this.countup = null
    return {}
  },

  componentDidMount(){
    let { startVal, endVal, decimals, duration, options, start } = this.props
    this.$el = this.refs.countup.getDOMNode()
    this.countup = new Count(this.$el, startVal, endVal, decimals, duration, options)
      if (start) {
        this.countup.start()
      }
  },

  componentDidUpdate(){
    this.props.start && this.countup.start()
  },

  render(){
    return(
      <span ref="countup">{ this.props.startVal }</span>
    )
  }
})


Countup.propTypes = {
  start: React.PropTypes.bool,
  startVal: React.PropTypes.number,
  endVal: React.PropTypes.number,
  decimals: React.PropTypes.number,
  duration: React.PropTypes.number,
  options: React.PropTypes.object,
};

Countup.defaultProps = {
  start: false,
  startVal: 0,
  endVal: 0,
  decimals: 0,
  duration: 2,
  options: {},
};

export default Countup;
