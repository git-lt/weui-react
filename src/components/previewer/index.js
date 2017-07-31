import React from 'react'
import classNames from 'classnames'
import objectAssign from 'object-assign'
import PhotoSwipe from 'photoswipe/dist/photoswipe'
import UI from 'photoswipe/dist/photoswipe-ui-default'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

// https://github.com/dimsemenov/PhotoSwipe
var Previewer = React.createClass({
  getInitialState(){
    let imgs = this.props.list.map(v=>{
        if(!v.msrc) v.msrc = v.src;
        if(typeof v.w === 'undefined'){
          v.w = 0; v.h = 0;
        }
        return v;
    })
    return { imgs }
  },

  init(index){
    const self = this
    let imgs = this.state.imgs;
    const showItem = imgs[index]
    if (!showItem.w || !showItem.h || showItem.w < 5 || showItem.h < 5) {
      const img = new Image()
      img.onload = function () {
        showItem.w = this.width
        showItem.h = this.height
        self._init(index)
      }
      img.src = showItem.src
    } else {
      this._init(index)
    }
  },

  _init(index){
    const self = this
    const $el = this.refs.photoswipe.getDOMNode();
    let options = objectAssign({
      history: false,
      shareEl: false,
      tapToClose: true,
      index: index
    }, this.props.options)
    this.photoswipe = new PhotoSwipe($el, UI, this.state.imgs, options)

    this.photoswipe.listen('gettingData', function (index, item) {
      if (!item.w || !item.h || item.w < 1 || item.h < 1) {
        const img = new Image()
        img.onload = function () {
          item.w = this.width
          item.h = this.height
          self.photoswipe.updateSize(true)
        }
        img.src = item.src
      }
    })

    this.photoswipe.init()
    this.photoswipe.listen('close', () => {
      this.props.onClose && this.props.onClose();
    })
  },

  show(index){
    this.init(index)
  },

  close(){
    this.photoswipe.close()
  },

  render(){
    return(
      <div className="pswp vux-previewer" tabIndex="-1" role="dialog" ariaHidden="true" ref="photoswipe">
          <div className="pswp__bg"></div>
          <div className="pswp__scroll-wrap">
            <div className="pswp__container">
              <div className="pswp__item"></div>
              <div className="pswp__item"></div>
              <div className="pswp__item"></div>
            </div>
            <div className="pswp__ui pswp__ui--hidden">
              <div className="pswp__top-bar">
                <div className="pswp__counter"></div>
                <button className="pswp__button pswp__button--close" title="Close (Esc)"></button>
                <button className="pswp__button pswp__button--share" title="Share"></button>
                <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                <button className="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                <div className="pswp__preloader">
                  <div className="pswp__preloader__icn">
                    <div className="pswp__preloader__cut">
                      <div className="pswp__preloader__donut"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div className="pswp__share-tooltip"></div>
              </div>
              <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
              <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
              <div className="pswp__caption">
                <div className="pswp__caption__center"></div>
              </div>
            </div>
          </div>
      </div>
    )
  }
})

Previewer.propTypes = {
  list: React.PropTypes.array,
  options: React.PropTypes.object,
};

Previewer.defaultProps = {
  list: [],
  options: {}
};

export default Previewer
