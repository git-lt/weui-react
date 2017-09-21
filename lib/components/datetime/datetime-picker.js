'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _scroller = require('../picker/scroller');

var _scroller2 = _interopRequireDefault(_scroller);

var _util = require('./util');

var _makeData2 = require('./make-data');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MASK_TEMPLATE = '<div class="dp-mask"></div>';

var TEMPLATE = '<div class="dp-container">\n  <div class="dp-header">\n    <div class="dp-item dp-left mt-datetime-cancel" data-role="cancel">cancel</div>\n    <div class="dp-item mt-datetime-clear" data-role="clear"></div>\n    <div class="dp-item dp-right mt-datetime-confirm" data-role="confirm">ok</div>\n  </div>\n  <div class="dp-content">\n    <div class="dp-item" data-role="year"></div>\n    <div class="dp-item" data-role="month"></div>\n    <div class="dp-item" data-role="day"></div>\n    <div class="dp-item" data-role="hour"></div>\n    <div class="dp-item" data-role="minute"></div>\n  </div>\n</div>';

var SHOW_ANIMATION_TIME = 100; // ms
var SHOW_CONTAINER_TIME = 300;

var TYPE_MAP = {
  year: ['YYYY'],
  month: ['MM', 'M'],
  day: ['DD', 'D'],
  hour: ['HH', 'H'],
  minute: ['mm', 'm']
};

var MASK = null;

var CURRENT_PICKER = void 0;

var NOW = new Date();

var DEFAULT_CONFIG = {
  template: TEMPLATE,
  trigger: null,
  currentYear: NOW.getFullYear(),
  currentMonth: NOW.getMonth() + 1,
  minYear: 2000,
  maxYear: 2030,
  minHour: 0,
  maxHour: 23,
  hourList: null,
  minuteList: null,
  startDate: null,
  endDate: null,
  yearRow: '{value}',
  monthRow: '{value}',
  dayRow: '{value}',
  hourRow: '{value}',
  minuteRow: '{value}',
  format: 'YYYY-MM-DD',
  value: NOW.getFullYear() + '-' + (NOW.getMonth() + 1) + '-' + NOW.getDate(),
  onSelect: function onSelect() {},
  onConfirm: function onConfirm() {},
  onClear: function onClear() {},
  onShow: function onShow() {},
  onHide: function onHide() {},

  confirmText: 'ok',
  clearText: '',
  cancelText: 'cancel',
  destroyOnHide: false,
  renderInline: false
};

function renderScroller(el, data, value, fn) {
  data = data.map(function (one) {
    one.value = one.value + '';
    return one;
  });
  return new _scroller2.default(el, {
    data: data,
    defaultValue: value + '',
    onSelect: fn
  });
}

function showMask() {
  if (!MASK) {
    MASK = (0, _util.toElement)(MASK_TEMPLATE);
    document.body.appendChild(MASK);

    MASK.addEventListener('click', function () {
      CURRENT_PICKER && CURRENT_PICKER.hide();
    }, false);
  }

  MASK.style.display = 'block';

  setTimeout(function () {
    MASK && (MASK.style.opacity = 0.5);
  }, 0);
}

function hideMask() {
  if (!MASK) {
    return;
  }

  MASK.style.opacity = 0;

  setTimeout(function () {
    MASK && (MASK.style.display = 'none');
  }, SHOW_ANIMATION_TIME);
}

function DatetimePicker(config) {
  var self = this;
  self.config = {};
  self.value = config.value || '';
  (0, _util.each)(DEFAULT_CONFIG, function (key, val) {
    self.config[key] = config[key] || val;
  });

  this.renderInline = self.config.renderInline;

  if (config.defaultSelectedValue && !config.value) {
    self.config.value = config.defaultSelectedValue;
  }

  if (typeof this.config.startDate === 'string') {
    this.config.startDate = new Date(this.config.startDate.replace(/-/g, '/'));
  }

  if (typeof this.config.endDate === 'string') {
    this.config.endDate = new Date(this.config.endDate.replace(/-/g, '/'));
  }

  if (this.config.startDate && !this.config.endDate) {
    this.config.endDate = new Date('2030-12-31');
  }

  this.reMakeData = !!this.config.startDate && !!this.config.endDate;

  if (!this.renderInline) {
    var trigger = self.config.trigger;

    this.triggerHandler = function (e) {
      e.preventDefault();
      self.show(self.value);
    };
    if (trigger) {
      trigger = self.trigger = (0, _util.getElement)(trigger);
      this.trigger = trigger;
      this.trigger.addEventListener('click', this.triggerHandler, false);
    }
  }
}

DatetimePicker.prototype = {
  _show: function _show(newValueMap) {
    var self = this;

    self.container.style.display = 'block';

    if (this.renderInline) {
      self.container.classList.add('mt-datetime-view');
    }

    (0, _util.each)(TYPE_MAP, function (type) {
      self[type + 'Scroller'] && self[type + 'Scroller'].select((0, _util.trimZero)(newValueMap[type]), false);
    });

    setTimeout(function () {
      self.container.style['-webkit-transform'] = 'translateY(0)';
      self.container.style.transform = 'translateY(0)';
    }, 0);
  },
  show: function show(value) {
    var self = this;
    var config = self.config;
    CURRENT_PICKER = self;
    var valueMap = self.valueMap = (0, _util.parseDate)(config.format, value || config.value);
    var newValueMap = {};

    (0, _util.each)(TYPE_MAP, function (type, list) {
      newValueMap[type] = list.length === 1 ? valueMap[list[0]] : valueMap[list[0]] || valueMap[list[1]];
    });

    if (self.container) {
      self._show(newValueMap);
    } else {
      var container = self.container = (0, _util.toElement)(config.template);
      if (!self.renderInline) {
        document.body.appendChild(container);

        self.container.style.display = 'block';
      } else {
        document.querySelector(self.config.trigger).appendChild(container);
      }

      (0, _util.each)(TYPE_MAP, function (type) {
        var div = self.find('[data-role=' + type + ']');
        if (newValueMap[type] === undefined) {
          (0, _util.removeElement)(div);
          return;
        }
        var data = void 0;
        if (type === 'day') {
          data = self._makeData(type, (0, _util.trimZero)(newValueMap.year), (0, _util.trimZero)(newValueMap.month));
        } else {
          data = self._makeData(type);
        }

        self[type + 'Scroller'] = renderScroller(div, data, (0, _util.trimZero)(newValueMap[type]), function (currentValue) {
          config.onSelect.call(self, type, currentValue, self.getValue());
          var currentDay = void 0;
          if (type === 'year') {
            var currentMonth = self.monthScroller ? self.monthScroller.value : config.currentMonth;
            self._setMonthScroller(currentValue, currentMonth);
            if (self.dayScroller) {
              currentDay = self.dayScroller.value;
              self._setDayScroller(currentValue, currentMonth, currentDay);
            }
          } else if (type === 'month') {
            var currentYear = self.yearScroller ? self.yearScroller.value : config.currentYear;
            if (self.dayScroller) {
              currentDay = self.dayScroller.value;
              self._setDayScroller(currentYear, currentValue, currentDay);
            }
          }
        });
      });

      if (!self.renderText && !self.renderInline) {
        if (self.config.confirmText) {
          self.find('[data-role=confirm]').innerText = self.config.confirmText;
        }

        if (self.config.cancelText) {
          self.find('[data-role=cancel]').innerText = self.config.cancelText;
        }
        if (self.config.clearText) {
          self.find('[data-role=clear]').innerText = self.config.clearText;
        }
        self.renderText = true;
      }

      this._show(newValueMap);

      self.find('[data-role=cancel]').addEventListener('click', function (e) {
        e.preventDefault();
        self.hide();
      }, false);

      self.find('[data-role=confirm]').addEventListener('click', function (e) {
        e.preventDefault();
        self.confirm();
      }, false);

      if (self.config.clearText) {
        self.find('[data-role=clear]').addEventListener('click', function (e) {
          e.preventDefault();
          self.clear();
        }, false);
      }
    }

    if (!this.renderInline) {
      showMask();
      config.onShow.call(self);
    }
  },
  _makeData: function _makeData(type, year, month) {
    var config = this.config;
    var valueMap = this.valueMap;
    var list = TYPE_MAP[type];
    var data = [];
    var min = void 0;
    var max = void 0;

    if (type === 'year') {
      min = config.minYear;
      max = config.maxYear;
      if (this.reMakeData) {
        var _getYears = (0, _makeData2.getYears)(this.config.startDate, this.config.endDate),
            minYear = _getYears.minYear,
            maxYear = _getYears.maxYear;

        min = minYear;
        max = maxYear;
      }
    } else if (type === 'month') {
      min = 1;
      max = 12;
      if (this.reMakeData) {
        var _getMonths = (0, _makeData2.getMonths)(this.config.startDate, this.config.endDate, this.yearScroller.value * 1),
            minMonth = _getMonths.minMonth,
            maxMonth = _getMonths.maxMonth;

        min = Math.max(min, minMonth);
        max = Math.min(max, maxMonth);
      }
    } else if (type === 'day') {
      min = 1;
      max = (0, _util.getMaxDay)(year, month);
      if (this.reMakeData) {
        var _getDays = (0, _makeData2.getDays)(this.config.startDate, this.config.endDate, this.yearScroller.value * 1, this.monthScroller.value * 1),
            minDay = _getDays.minDay,
            maxDay = _getDays.maxDay;

        min = Math.max(min, minDay);
        max = Math.min(max, maxDay);
      }
    } else if (type === 'hour') {
      min = this.config.minHour;
      max = this.config.maxHour;
    } else if (type === 'minute') {
      min = 0;
      max = 59;
    }
    for (var i = min; i <= max; i++) {
      var name = void 0;
      if (type === 'year') {
        name = (0, _util.parseRow)(config.yearRow, i);
      } else {
        var val = valueMap[list[0]] ? (0, _util.addZero)(i) : i;
        name = (0, _util.parseRow)(config[type + 'Row'], val);
      }
      data.push({
        name: name,
        value: i
      });
    }
    if (type === 'hour' && this.config.hourList) {
      data = this.config.hourList.map(function (hour) {
        return {
          name: (0, _util.parseRow)(config['hourRow'], hour),
          value: (0, _util.addZero)(hour)
        };
      });
    }
    if (type === 'minute' && this.config.minuteList) {
      data = this.config.minuteList.map(function (minute) {
        return {
          name: (0, _util.parseRow)(config['minuteRow'], minute),
          value: (0, _util.addZero)(minute)
        };
      });
    }
    return data;
  },


  // after year change
  _setMonthScroller: function _setMonthScroller(currentValue, month) {
    var self = this;
    this.monthScroller.destroy();
    var div = self.find('[data-role=month]');
    self.monthScroller = renderScroller(div, self._makeData('month'), month, function (currentValue) {
      self.config.onSelect.call(self, 'month', currentValue, self.getValue());
      var currentYear = self.yearScroller ? self.yearScroller.value : self.config.currentYear;
      if (self.dayScroller) {
        var currentDay = self.dayScroller.value;
        self._setDayScroller(currentYear, currentValue, currentDay);
      }
    });
  },
  _setDayScroller: function _setDayScroller(year, month, day) {
    var self = this;
    var maxDay = (0, _util.getMaxDay)(year, month);
    if (day > maxDay) {
      day = maxDay;
    }
    self.dayScroller.destroy();
    var div = self.find('[data-role=day]');
    self.dayScroller = renderScroller(div, self._makeData('day', year, month), day, function (currentValue) {
      self.config.onSelect.call(self, 'day', currentValue, self.getValue());
    });
  },
  find: function find(selector) {
    return this.container.querySelector(selector);
  },
  hide: function hide() {
    if (!this.container) {
      return;
    }
    var self = this;
    self.container.style.removeProperty('transform');
    self.container.style.removeProperty('-webkit-transform');

    setTimeout(function () {
      self.container && (self.container.style.display = 'none');
    }, SHOW_CONTAINER_TIME);

    hideMask();

    self.config.onHide.call(self);
    if (self.config.destroyOnHide) {
      setTimeout(function () {
        self.destroy();
      }, 500);
    }
  },
  select: function select(type, value) {
    this[type + 'Scroller'].select(value, false);
  },
  destroy: function destroy() {
    var self = this;
    this.trigger && this.trigger.removeEventListener('click', this.triggerHandler, false);
    (0, _util.removeElement)(MASK);
    (0, _util.removeElement)(self.container);
    MASK = null;
    self.container = null;
  },
  getValue: function getValue() {
    var self = this;
    var config = self.config;

    var value = config.format;

    function formatValue(scroller, expr1, expr2) {
      if (scroller) {
        var val = scroller.value;
        if (expr1) {
          value = value.replace(new RegExp(expr1, 'g'), (0, _util.addZero)(val));
        }
        if (expr2) {
          value = value.replace(new RegExp(expr2, 'g'), (0, _util.trimZero)(val));
        }
      }
    }

    (0, _util.each)(TYPE_MAP, function (key, list) {
      formatValue(self[key + 'Scroller'], list[0], list[1]);
    });

    return value;
  },
  confirm: function confirm() {
    var value = this.getValue();
    this.value = value;

    if (this.config.onConfirm.call(this, value) === false) {
      return;
    }

    this.hide();
  },
  clear: function clear() {
    var value = this.getValue();

    if (this.config.onClear.call(this, value) === false) {
      return;
    }

    this.hide();
  }
};

exports.default = DatetimePicker;