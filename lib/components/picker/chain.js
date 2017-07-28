'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Manager = function () {
  function Manager(data, count, fixedColumns) {
    _classCallCheck(this, Manager);

    this.data = data;
    this.count = count;
    if (fixedColumns) {
      this.fixedColumns = fixedColumns;
    }
  }

  _createClass(Manager, [{
    key: 'getChildren',
    value: function getChildren(value) {
      return this.data.filter(function (v) {
        return v.parent === value;
      });
    }
  }, {
    key: 'getFirstColumn',
    value: function getFirstColumn() {
      return this.data.filter(function (v) {
        return !v.parent || v.parent === 0 || v.parent === '0';
      });
    }
  }, {
    key: 'getPure',
    value: function getPure(obj) {
      return JSON.parse(JSON.stringify(obj));
    }
  }, {
    key: 'getColumns',
    value: function getColumns(value) {
      var _this = this;

      // check is data contains the values
      if (value.length > 0) {
        var matchCount = this.getPure(this.data).filter(function (item) {
          return _this.getPure(value).indexOf(item.value) > -1;
        }).length;
        if (matchCount < this.getPure(value).length) {
          value = [];
        }
      }
      var datas = [];
      var max = this.fixedColumns || 8;
      for (var i = 0; i < max; i++) {
        if (i === 0) {
          datas.push(this.getFirstColumn());
        } else {
          // 没有数据时，取得上一级的第一个
          if (!value[i]) {
            if (typeof datas[i - 1][0] === 'undefined') {
              break;
            } else {
              var topValue = datas[i - 1][0].value;
              datas.push(this.getChildren(topValue));
            }
          } else {
            datas.push(this.getChildren(value[i - 1]));
          }
        }
      }
      var list = datas.filter(function (item) {
        return item.length > 0;
      });
      // correct the column
      this.count = list.length;
      return list;
    }
  }]);

  return Manager;
}();

exports.default = Manager;