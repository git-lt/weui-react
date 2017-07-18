'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deprecationWarning;

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var warned = {};

function deprecationWarning(oldname, newname, link) {
  //avoid test warnings
  if (typeof global.it === 'function') return;

  var warnKey = oldname + '\n' + newname;
  if (warned[warnKey]) {
    return;
  }

  var message = '[React-WeUI] ' + oldname + ' is deprecated. Use ' + newname + ' instead. ' + oldname + ' will be remove in the next major version.';

  if (link) {
    message += '\nYou can read more about it at \n' + link;
  }

  (0, _warning2.default)(false, message);
  warned[warnKey] = true;
}