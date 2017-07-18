import React from 'react'
import classNames from 'classnames'

var SwiperItem = React.createClass({
  render(){
    let { className } = this.props

    const cls = classNames('mt-swiper-item',{
      [className]: className
    })

    return (
        <div className={cls}>{ this.props.children }</div>
    );
  }
})

export default SwiperItem
