// 对象合并
const objectAssign = (o1, o2)=>{
  Object.keys(o1).forEach(key=>{
    Object.prototype.hasOwnProperty.call(o2, key) && (o1[key] = o2[key])
  })
  return o1
}

// 类数组转数组
const arrayFrom = arrlike => Array.prototype.slice.call(arrlike)

class Swiper{
  constructor (options) {
    this._defaults = {
      container: null, // 容器DOM对象
      itemWrap: '.mt-swiper',
      item: '.mt-swiper-item',
      direction: 'vertical',
      activeClass: 'active',
      threshold: 50,
      duration: 300,
      auto: false,
      loop: false,
      interval: 3000,
      height: 'auto',
      minMovingDistance: 0,
    }

    this._options = objectAssign(this._defaults, options)
    this._options.height = parseInt(this._options.height)
    this._start = {}
    this._move = {}
    this._end = {}
    this._eventHandlers = {}
    this._prev = this._current = this._goto = 0
    this._width = this._height = this.distance = 0
    this._offset = []

    this.$box = this._options.container
    this.$container = this.$box.querySelector(this._options.itemWrap)
    this.$items = this.$container.querySelectorAll(this._options.item)
    this.count = this.$items.length
    this.realCount = this.$items.length

    this._position = []
    this._firstItemIndex = 0

    this.isHorizontal = this._options.direction === 'horizontal'
    this.isLoop = this._options.loop && this.realCount >= 3

    if(!this.count){ return }

    this._init()
    this._auto()
    this._bind()

    return this
  }
  _init () {
    this._height = this._options.height - 0
    this.updateItemWidth()        // 更新 items 宽度
    this._initPosition()          // 生成索引数组
    this._activate(this._current) // 给item添加active样式类
    this._setOffset()             // 获取item的偏移量数组
    this._setTransform()          // 设置item的定位（排列顺序）
    this.isLoop && this._loopRender()// 循环播放
  }

  go (index) {
    this.stop()
    index = index || 0
    let { _current, realCount } = this;

    this._prev = (_current + realCount) % realCount
    this._current = (index + realCount) % realCount
    this._setOffset()
    this._setTransition()
    this._setTransform()
    this._auto()
    return this
  }

  move (num) {
    this.go(this._current + num )
    return this;
  }

  on (event, callback) {
    // 同一个事件只能注册一次
    if (this._eventHandlers[event]) {
      console.error(`[swiper] event ${event} is already register`)
    }
    this._eventHandlers[event] = callback
    return this
  }

  updateItemWidth () {
    this._width = this.$box.offsetWidth || document.documentElement.offsetWidth

    this._distance = this.isHorizontal ? this._width : this._height
  }

  stop () {
    this.timer && clearTimeout(this.timer)
  }

  _auto () {
    let { auto, interval } = this._options
    this.stop()
    if(auto){
      this.timer = setTimeout(()=> this.move(1), interval)
    }
  }

  _initPosition () {
    for(let i = 0; i < this.realCount; i++){
      this._position.push(i)
    }
  }

  _setOffset () {
    let index = this._position.indexOf(this._current)
    this._offset = []
    arrayFrom(this.$items).forEach(($item, key)=>{
      this._offset.push((key - index) * this._distance)
    })
  }

  _setTransition (duration) {
    duration = duration || (this._options.duration || 'none')

    let transition = duration === 'none' ? 'none' : duration + 'ms'

    arrayFrom(this.$items).forEach((item, key)=>{
      item.style.webkitTransition = item.style.transition = transition
    })
  }

  _setTransform (offset) {
    offset = offset || 0
    Array.prototype.forEach.call(this.$items, (item, key)=>{
      let distance = this._offset[key] + offset
      let transform = `translate3d(${distance}px, 0, 0)`
      if(this._options.direction === 'vertical'){
        transform = `translate3d(0, ${distance}px, 0)`
      }
      item.style.webkitTransform = item.style.transform = transform
    })
  }

  _bind () {
    const me = this

    me.onResize = e => {
      setTimeout(() => {
        this.updateItemWidth()
        this._setOffset()
        this._setTransform()
      }, 100)
    }

    me.onTouchstart = e => {
      me.stop()
      me._start.x = e.changedTouches[0].pageX
      me._start.y = e.changedTouches[0].pageY

      // 如果是手动滑动，则禁用动画自动播放
      me._setTransition('none')
    }

    me.onTouchmove = e => {
      me._move.x = e.changedTouches[0].pageX
      me._move.y = e.changedTouches[0].pageY

      let distanceX = me._move.x - me._start.x
      let distanceY = me._move.y - me._start.y
      let distance = distanceY

      // 如果x的偏移量大于y的偏移量，则为水平滑动
      let isScrollX = Math.abs(distanceX) > Math.abs(distanceY)

      // 设置当前需要偏移的长度
      if(me.isHorizontal && isScrollX){
        distance = distanceX
      }

      // 移动
      if (((me._options.minMovingDistance && Math.abs(distance) >= me._options.minMovingDistance) || !me._options.minMovingDistance) && isScrollX) {
        me._setTransform(distance)
      }

      // 阻止默认事件
      isScrollX && e.preventDefault()
    }

    me.onTouchend = e => {
      me._end.x = e.changedTouches[0].pageX
      me._end.y = e.changedTouches[0].pageY

      let distance = me._end.y - me._start.y
      if(me.isHorizontal){
        distance = me._end.x - me._start.x
      }

      distance = me.getDistance(distance)

      // minMovingDistance：当偏移量大于这个值时，才开始滑动
      // 偏移量大于最小滑动距离时，才可以滑动
      if(distance !== 0 && me._options.minMovingDistance && Math.abs(distance) < me._options.minMovingDistance){
        return
      }
      // threshold: 当滑动距离大于这个值时，就切换下一个 item

      // 正向滑动时，滑动距离大于可滑动距离时，就正向滚动
      if(distance > me._options.threshold){
        me.move(-1)
      // 反向滑动时，滑动距离大于可滑动距离时，就反向滚动
      }else if (distance < -me._options.threshold){
        me.move(1)
      // 不滚动
      }else {
        me.move(0)
      }

      me._loopRender()
    }

    me.onTransitionend = e => {
      me._activate(me._current)
      let cb = me._eventHandlers.swiped
      cb && cb.apply(me, [me._prev, me._current])
      me._auto()
      me._loopRender()
      e.preventDefault()
    }

    window.addEventListener('orientationchange', me.onResize, false)
    me.$container.addEventListener('touchstart', me.onTouchstart, false)
    me.$container.addEventListener('touchmove', me.onTouchmove, false)
    me.$container.addEventListener('touchend', me.onTouchend, false)
    me.$items[1].addEventListener('webkitTransitionEnd', me.onTransitionend, false)
  }

  getDistance (distance) {
    if(this.isLoop) return distance

    if(distance > 0 && this._current === 0) return 0

    if(distance < 0 && this._current === this.realCount -1 ) return 0

    return distance
  }

  _loopRender () {
    if(this.isLoop){
      // 第一张往前滑
      if(this._offset[0] === 0){
        this.$container.insertBefore(this.$items[this.realCount -1], this.$container.firstChild)
        this._loopEvent(-1)
      // 最后一张往后滑
      }else if (this._offset[this.realCount - 1] === 0){
        this.$container.appendChild(this.$items[0])
        this._loopEvent(1)
      }
    }
  }

  _loopEvent (num) {
    // 注销 item 的 transitionend 事件
    this._itemsDestroy()
    // 重新获取一次items
    this.$items = this.$container.querySelectorAll(this._options.item)
    // 注册 transitionend 事件
    this.$items[1] && this.$items[1].addEventListener('webkitTransitionEnd', this.onTransitionend, false)
    // 更新索引数组
    this._movePosition(num)
    // 设置偏移数组
    this._setOffset()
    // 动画滚动到当前itemr的位置
    this._setTransform()
  }

  _movePosition (position) {
    // 第一个移动到最后面去
    if(position > 0){
      let first = this._position.splice(0, 1)
      this._position.push(first[0])
    // 最后面的移动到最前面
    } else if (position < 0){
      let last = this._position.pop()
      this._position.unshift(last)
    }
  }

  _activate (index) {
    let clazz = this._options.activeClass
    arrayFrom(this.$items).forEach(($item, key) => {
      $item.classList.remove(clazz)
      if (index === Number($item.dataset.index)) {
        $item.classList.add(clazz)
      }
    })
  }

  _itemsDestroy () {
    arrayFrom(this.$items).forEach(item => {
      item.removeEventListener('webkitTransitionEnd', this.onTransitionend, false)
    })
  }

  destroy () {
    this.stop()
    this._current = 0
    this._setTransform(0)
    window.removeEventListener('orientationchange', this.onResize, false)
    this.$container.removeEventListener('touchstart', this.onTouchstart, false)
    this.$container.removeEventListener('touchmove', this.onTouchmove, false)
    this.$container.removeEventListener('touchend', this.onTouchend, false)
    this._itemsDestroy()
  }
}

export default Swiper
