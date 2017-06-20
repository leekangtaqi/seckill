'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.middleware = exports.logger = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _log4js = require('log4js');

var _log4js2 = _interopRequireDefault(_log4js);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_log4js2.default.configure(__dirname + '/logging.json', { reloadSecs: 0 });

var logger = _log4js2.default.getLogger('app');
var middleware = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, next) {
    var DEFAULT, req, header, nodeReq, str;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            logger.setLevel('DEBUG');
            DEFAULT = "%s %s -- %s %s HTTP/%s, %s %s";
            req = ctx.request, header = ctx.header, nodeReq = ctx.req;
            str = _util2.default.format(DEFAULT, new Date().toLocaleString(), req.ip, req.method, req.url, nodeReq.httpVersion, req.length || null, header['user-agent']);


            logger.debug(str);

            _context.next = 7;
            return next();

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function middleware(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = {
  logger: logger,
  middleware: middleware
};
exports.logger = logger;
exports.middleware = middleware;