import React from 'react'
import classNames from 'classnames'

var MarqueeItem = React.createClass({
  render(){
    let { children, className, ...others } = this.props

    let cls = classNames({ [className]: className})

    return(
      <li className={ cls }>{ children }</li>
    )
  }
})

export default MarqueeItem;
