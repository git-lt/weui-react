import React from 'react'
import SwiperJS from './swiper.js'
import classNames from 'classnames'
import './index.less'

import SwiperItem from './swiper-item'

const noop = () => {}

const Swiper = React.createClass({
  getInitialState(){
    this.rendered = false
    return {
      current: this.props.current || 0,
      height: this.props.height,
      list: this.props.list,
    }
  },

  componentDidMount(){
    setTimeout(()=> {
      this.$el = this.refs.swiperWrap.getDOMNode()
      let aspectRatio = this.props.aspectRatio
      let height = this.state.height

      if(aspectRatio){
        height = this.$el.offsetWidth * aspectRatio + 'px'
        this.setState({ height })
      }

      this.init(this.$el, height)
    }, 30);
  },

  componentWillReceiveProps(next){
    // 更新当前要展示的item
    if(next.current !== this.state.current && this.swiper){
      this.swiper.go(next.current)
    }
  },

  componentDidUpdate(props){
    // 更新 items 数据
    if(this.props.list != this.state.list){
      this.refresh()
    }
  },

  init($el, height){
    let {
      direction, auto, loop, interval, threshold,
      duration, minMovingDistance, list
    } = this.props

    this.swiper && this.swiper.destroy();
    this.swiper = new SwiperJS({
      container: $el,
      direction,
      auto,
      loop,
      interval,
      threshold,
      duration,
      height,
      minMovingDistance,
    }).on('swiped', (prev, curr)=>{
      this.setState({ current: curr })
      this.props.onChange && this.props.onChange(curr)
      // console.log(`curr=${curr} prev=${prev}`)
    })

    if(this.state.current > 0){
      this.swiper.go(this.state.current)
    }
  },

  refresh(){
    if(!this.$el || this.rendered) return
    this.rendered = true
    this.$el = this.refs.swiperWrap.getDOMNode()
    this.destroy()
    this.init(this.$el, this.state.height)
  },

  destroy(){
    this.swiper && this.swiper.destroy()
  },

  renderItems(list){
    let { showDescMask } = this.props

    return list.map((item, i)=>{
      return (
        <div className="mt-swiper-item" key={ i } data-index={ i }>
          <a href="javascript:">
            <div className="mt-img" style={{backgroundImage: `url(${item.img})`}}></div>
            {showDescMask && <p className="mt-swiper-desc">{item.title}</p>}
          </a>
        </div>
      )
    })
  },

  renderDots( count ){
    let dots = [], current = this.state.current
    let { dotsClass, dotsPosition } = this.props

    for(let i = 0; i < count; i++){
      const dotCls = classNames({
        'mt-icon-dot': true,
        'active': i === current
      })
      dots.push(<a href="javascript:" key={i}><i className={ dotCls }></i></a>)
    }

    const cls = classNames('mt-indicator',{
      [`mt-indicator-${dotsPosition}`]: true,
      [dotsClass]: dotsClass
    })

    return <div className={ cls }> { dots } </div>
  },

  componentWillUnMount(){
    this.destroy()
  },

  render(){

    let { list, showDots, children, className, ...others } = this.props;

    let height = this.state.height
    const count = list.length;

    const cls = classNames('mt-slider',{
      [className]: className
    })

    return (
      <div className={cls} ref="swiperWrap" {...others}>
        <div className="mt-swiper" style={{ height }}>
          { count > 0 ? this.renderItems(list) : children }
        </div>
        { showDots && this.renderDots(count) }
      </div>
    );
  }
})


Swiper.propTypes = {
  aspectRatio: React.PropTypes.number,
  onChange: React.PropTypes.func,
};

Swiper.defaultProps = {
  list:[],
  direction: 'horizontal',
  showDots: true,
  showDescMask: true,
  dotsPosition: 'right',
  dotsClass: '',
  auto: false,
  loop: false,
  interval: 3000,
  threshold: 50,
  duration: 300,
  height: 180,
  aspectRatio: 0,
  minMovingDistance: 0,
  onChange: noop,
};

Swiper.SwiperItem = SwiperItem

export default Swiper
