'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 对象合并
var objectAssign = function objectAssign(o1, o2) {
  Object.keys(o1).forEach(function (key) {
    Object.prototype.hasOwnProperty.call(o2, key) && (o1[key] = o2[key]);
  });
  return o1;
};

// 类数组转数组
var arrayFrom = function arrayFrom(arrlike) {
  return Array.prototype.slice.call(arrlike);
};

var Swiper = function () {
  function Swiper(options) {
    _classCallCheck(this, Swiper);

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
      minMovingDistance: 0
    };

    this._options = objectAssign(this._defaults, options);
    this._options.height = parseInt(this._options.height);
    this._start = {};
    this._move = {};
    this._end = {};
    this._eventHandlers = {};
    this._prev = this._current = this._goto = 0;
    this._width = this._height = this.distance = 0;
    this._offset = [];

    this.$box = this._options.container;
    this.$container = this.$box.querySelector(this._options.itemWrap);
    this.$items = this.$container.querySelectorAll(this._options.item);
    this.count = this.$items.length;
    this.realCount = this.$items.length;

    this._position = [];
    this._firstItemIndex = 0;

    this.isHorizontal = this._options.direction === 'horizontal';
    this.isLoop = this._options.loop && this.realCount >= 3;

    if (!this.count) {
      return;
    }

    this._init();
    this._auto();
    this._bind();

    return this;
  }

  _createClass(Swiper, [{
    key: '_init',
    value: function _init() {
      this._height = this._options.height - 0;
      this.updateItemWidth(); // 更新 items 宽度
      this._initPosition(); // 生成索引数组
      this._activate(this._current); // 给item添加active样式类
      this._setOffset(); // 获取item的偏移量数组
      this._setTransform(); // 设置item的定位（排列顺序）
      this.isLoop && this._loopRender(); // 循环播放
    }
  }, {
    key: 'go',
    value: function go(index) {
      this.stop();
      index = index || 0;
      var _current = this._current,
          realCount = this.realCount;


      this._prev = (_current + realCount) % realCount;
      this._current = (index + realCount) % realCount;
      this._setOffset();
      this._setTransition();
      this._setTransform();
      this._auto();
      return this;
    }
  }, {
    key: 'move',
    value: function move(num) {
      this.go(this._current + num);
      return this;
    }
  }, {
    key: 'on',
    value: function on(event, callback) {
      // 同一个事件只能注册一次
      if (this._eventHandlers[event]) {
        console.error('[swiper] event ' + event + ' is already register');
      }
      this._eventHandlers[event] = callback;
      return this;
    }
  }, {
    key: 'updateItemWidth',
    value: function updateItemWidth() {
      this._width = this.$box.offsetWidth || document.documentElement.offsetWidth;

      this._distance = this.isHorizontal ? this._width : this._height;
    }
  }, {
    key: 'stop',
    value: function stop() {
      this.timer && clearTimeout(this.timer);
    }
  }, {
    key: '_auto',
    value: function _auto() {
      var _this = this;

      var _options = this._options,
          auto = _options.auto,
          interval = _options.interval;

      this.stop();
      if (auto) {
        this.timer = setTimeout(function () {
          return _this.move(1);
        }, interval);
      }
    }
  }, {
    key: '_initPosition',
    value: function _initPosition() {
      for (var i = 0; i < this.realCount; i++) {
        this._position.push(i);
      }
    }
  }, {
    key: '_setOffset',
    value: function _setOffset() {
      var _this2 = this;

      var index = this._position.indexOf(this._current);
      this._offset = [];
      arrayFrom(this.$items).forEach(function ($item, key) {
        _this2._offset.push((key - index) * _this2._distance);
      });
    }
  }, {
    key: '_setTransition',
    value: function _setTransition(duration) {
      duration = duration || this._options.duration || 'none';

      var transition = duration === 'none' ? 'none' : duration + 'ms';

      arrayFrom(this.$items).forEach(function (item, key) {
        item.style.webkitTransition = item.style.transition = transition;
      });
    }
  }, {
    key: '_setTransform',
    value: function _setTransform(offset) {
      var _this3 = this;

      offset = offset || 0;
      Array.prototype.forEach.call(this.$items, function (item, key) {
        var distance = _this3._offset[key] + offset;
        var transform = 'translate3d(' + distance + 'px, 0, 0)';
        if (_this3._options.direction === 'vertical') {
          transform = 'translate3d(0, ' + distance + 'px, 0)';
        }
        item.style.webkitTransform = item.style.transform = transform;
      });
    }
  }, {
    key: '_bind',
    value: function _bind() {
      var _this4 = this;

      var me = this;

      me.onResize = function (e) {
        setTimeout(function () {
          _this4.updateItemWidth();
          _this4._setOffset();
          _this4._setTransform();
        }, 100);
      };

      me.onTouchstart = function (e) {
        me.stop();
        me._start.x = e.changedTouches[0].pageX;
        me._start.y = e.changedTouches[0].pageY;

        // 如果是手动滑动，则禁用动画自动播放
        me._setTransition('none');
      };

      me.onTouchmove = function (e) {
        me._move.x = e.changedTouches[0].pageX;
        me._move.y = e.changedTouches[0].pageY;

        var distanceX = me._move.x - me._start.x;
        var distanceY = me._move.y - me._start.y;
        var distance = distanceY;

        // 如果x的偏移量大于y的偏移量，则为水平滑动
        var isScrollX = Math.abs(distanceX) > Math.abs(distanceY);

        // 设置当前需要偏移的长度
        if (me.isHorizontal && isScrollX) {
          distance = distanceX;
        }

        // 移动
        if ((me._options.minMovingDistance && Math.abs(distance) >= me._options.minMovingDistance || !me._options.minMovingDistance) && isScrollX) {
          me._setTransform(distance);
        }

        // 阻止默认事件
        isScrollX && e.preventDefault();
      };

      me.onTouchend = function (e) {
        me._end.x = e.changedTouches[0].pageX;
        me._end.y = e.changedTouches[0].pageY;

        var distance = me._end.y - me._start.y;
        if (me.isHorizontal) {
          distance = me._end.x - me._start.x;
        }

        distance = me.getDistance(distance);

        // minMovingDistance：当偏移量大于这个值时，才开始滑动
        // 偏移量大于最小滑动距离时，才可以滑动
        if (distance !== 0 && me._options.minMovingDistance && Math.abs(distance) < me._options.minMovingDistance) {
          return;
        }
        // threshold: 当滑动距离大于这个值时，就切换下一个 item

        // 正向滑动时，滑动距离大于可滑动距离时，就正向滚动
        if (distance > me._options.threshold) {
          me.move(-1);
          // 反向滑动时，滑动距离大于可滑动距离时，就反向滚动
        } else if (distance < -me._options.threshold) {
          me.move(1);
          // 不滚动
        } else {
          me.move(0);
        }

        me._loopRender();
      };

      me.onTransitionend = function (e) {
        me._activate(me._current);
        var cb = me._eventHandlers.swiped;
        cb && cb.apply(me, [me._prev, me._current]);
        me._auto();
        me._loopRender();
        e.preventDefault();
      };

      window.addEventListener('orientationchange', me.onResize, false);
      me.$container.addEventListener('touchstart', me.onTouchstart, false);
      me.$container.addEventListener('touchmove', me.onTouchmove, false);
      me.$container.addEventListener('touchend', me.onTouchend, false);
      me.$items[1].addEventListener('webkitTransitionEnd', me.onTransitionend, false);
    }
  }, {
    key: 'getDistance',
    value: function getDistance(distance) {
      if (this.isLoop) return distance;

      if (distance > 0 && this._current === 0) return 0;

      if (distance < 0 && this._current === this.realCount - 1) return 0;

      return distance;
    }
  }, {
    key: '_loopRender',
    value: function _loopRender() {
      if (this.isLoop) {
        // 第一张往前滑
        if (this._offset[0] === 0) {
          this.$container.insertBefore(this.$items[this.realCount - 1], this.$container.firstChild);
          this._loopEvent(-1);
          // 最后一张往后滑
        } else if (this._offset[this.realCount - 1] === 0) {
          this.$container.appendChild(this.$items[0]);
          this._loopEvent(1);
        }
      }
    }
  }, {
    key: '_loopEvent',
    value: function _loopEvent(num) {
      // 注销 item 的 transitionend 事件
      this._itemsDestroy();
      // 重新获取一次items
      this.$items = this.$container.querySelectorAll(this._options.item);
      // 注册 transitionend 事件
      this.$items[1] && this.$items[1].addEventListener('webkitTransitionEnd', this.onTransitionend, false);
      // 更新索引数组
      this._movePosition(num);
      // 设置偏移数组
      this._setOffset();
      // 动画滚动到当前itemr的位置
      this._setTransform();
    }
  }, {
    key: '_movePosition',
    value: function _movePosition(position) {
      // 第一个移动到最后面去
      if (position > 0) {
        var first = this._position.splice(0, 1);
        this._position.push(first[0]);
        // 最后面的移动到最前面
      } else if (position < 0) {
        var last = this._position.pop();
        this._position.unshift(last);
      }
    }
  }, {
    key: '_activate',
    value: function _activate(index) {
      var clazz = this._options.activeClass;
      arrayFrom(this.$items).forEach(function ($item, key) {
        $item.classList.remove(clazz);
        if (index === Number($item.dataset.index)) {
          $item.classList.add(clazz);
        }
      });
    }
  }, {
    key: '_itemsDestroy',
    value: function _itemsDestroy() {
      var _this5 = this;

      arrayFrom(this.$items).forEach(function (item) {
        item.removeEventListener('webkitTransitionEnd', _this5.onTransitionend, false);
      });
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.stop();
      this._current = 0;
      this._setTransform(0);
      window.removeEventListener('orientationchange', this.onResize, false);
      this.$container.removeEventListener('touchstart', this.onTouchstart, false);
      this.$container.removeEventListener('touchmove', this.onTouchmove, false);
      this.$container.removeEventListener('touchend', this.onTouchend, false);
      this._itemsDestroy();
    }
  }]);

  return Swiper;
}();

exports.default = Swiper;