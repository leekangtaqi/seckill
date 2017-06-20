'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = undefined;

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RestError(_ref) {
  var restCode = _ref.restCode,
      statusCode = _ref.statusCode,
      message = _ref.message,
      constructorOpt = _ref.constructorOpt;

  this.restCode = restCode;
  this.statusCode = restCode;
  this.message = restCode;
  this.constructorOpt = restCode;
  Error.call(this);
}

_util2.default.inherits(RestError, Error);

function register(constrName, statusCode, message) {

  var Contrs = new Function('options', '\n    this.restCode = options && options.restCode || null;\n    this.statusCode = options && options.restCode || ' + statusCode + ';\n    this.message = options && options.restCode || \'' + message + '\';\n    this.constructorOpt = ' + Contrs + ';\n    this.name = \'' + constrName + '\'\n  ');
  Object.defineProperty(Contrs, 'name', { writable: true });
  Contrs.name = constrName;
  _util2.default.inherits(Contrs, RestError);
  return Contrs;
}

exports.register = register;
exports.default = RestError;