import React from 'react'
import MarqueeItem from './marquee-item'
import classNames from 'classnames'
import './index.less'

var Marquee = React.createClass({
  getInitialState(){
    this.timer = null

    return {
      currenTranslateY: 0,
      currentIndex: 0,
      noAnimate: false,
      height: 0,
      count: this.props.children.length,
    }
  },

  componentDidMount(){
    setTimeout(()=>{
      this._init()
      this._start()
    }, 300)
  },

  _destroy(){
    this.timer && clearInterval(this.timer);
  },

  _init(){
    this._destroy()
    let direction = this.props.direction;
    let oBox = this.refs.box.getDOMNode();

    if (this.cloneNode) {
      oBox.removeChild(this.cloneNode)
    }

    this.cloneNode = null
    let firstItem = oBox.firstElementChild
    if (!firstItem) {
      return false
    }
    this.height = firstItem.offsetHeight

    if ( direction === 'up' ) {
      this.cloneNode = firstItem.cloneNode(true)
      oBox.appendChild(this.cloneNode)
    } else {
      this.cloneNode = oBox.lastElementChild.cloneNode(true)
      oBox.insertBefore(this.cloneNode, firstItem)
    }

    this.setState({ height: this.height })

    return true
  },

  _start(){
    const count  = this.state.count
    const height = this.height
    const { direction, duration, interval } = this.props
    let { currentIndex, currenTranslateY, noAnimate } = this.state

    this.timer = setInterval(() => {
      if (currentIndex === count) {
        setTimeout(() => {
          currentIndex = 0
          currenTranslateY = 0
          this._go(currentIndex, currenTranslateY, true)
        }, duration)
      } else if (currentIndex === -1) {
        setTimeout(() => {
          currentIndex = count - 1
          currenTranslateY = -(currentIndex + 1) * height
          this._go(currentIndex, currenTranslateY, false)
        }, duration)
      } else {
        if (direction === 'up') {
          currentIndex += 1
          currenTranslateY = -currentIndex * height
        } else {
          currentIndex -= 1
          currenTranslateY = -(currentIndex + 1) * height
        }
        this._go(currentIndex, currenTranslateY, false)
      }

    }, interval + duration)
  },

  _go(currentIndex, currenTranslateY, noAnimate){
    this.setState({ currentIndex, currenTranslateY, noAnimate })
  },

  refresh(){
    this._destroy()
    this.setState({ count: this.props.children.length }, ()=>{
      setTimeout(()=>{
        this._init()
        this._start()
      }, 300)
    })
  },

  componentWillUnmount(){
    this._destroy();
  },

  render(){
    let { noAnimate, currenTranslateY, height } = this.state
    let { duration, children, className, ...others } = this.props

    let styWrap = { height: height + 'px'};
    let styUl = {
      transform: `translate3d(0,${currenTranslateY}px,0)`,
      transition: `transform ${noAnimate ? 0 : duration}ms`
    }

    let cls = classNames('mt-marquee', { [className]: className})

    return(
      <div className={ cls } style={ styWrap } { ...others }>
        <ul className="mt-marquee-box" ref="box" style={ styUl }>
          { children }
        </ul>
      </div>
    )
  }
})

Marquee.MarqueeItem = MarqueeItem

Marquee.propTypes = {
  interval: React.PropTypes.number,
  duration: React.PropTypes.number,
  direction: React.PropTypes.string,
};

Marquee.defaultProps = {
  interval: 2000,
  duration: 300,
  direction: 'up'
};

export default Marquee
