'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _leanReady = require('../framework/lean-ready');

var _leanReady2 = _interopRequireDefault(_leanReady);

var _logging = require('./logging');

var _logging2 = _interopRequireDefault(_logging);

var _koaViews = require('koa-views');

var _koaViews2 = _interopRequireDefault(_koaViews);

var _koaCors = require('koa-cors');

var _koaCors2 = _interopRequireDefault(_koaCors);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _koaBody = require('koa-body');

var _koaBody2 = _interopRequireDefault(_koaBody);

var _routes = require('../routes');

var _routes2 = _interopRequireDefault(_routes);

var _errors = require('../framework/errors');

var _errors2 = _interopRequireDefault(_errors);

var _context2 = require('./context');

var _context3 = _interopRequireDefault(_context2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default();
app.env = process.env.NODE_ENV || _config2.default.env.mode;
app.proxy = true;
app.port = process.env.PORT || _config2.default.env.port;
app.bindip = process.env.BINDIP || _config2.default.env.bindIp;

// add some global middlewares here
app.use(_logging2.default.middleware);

app.use((0, _koaViews2.default)(_path2.default.join(__dirname, '../views'), { map: { html: 'swig' } }));

// body parser -> delay
app.use((0, _koaBody2.default)(_config2.default.bodyOptions));

// cors
app.use((0, _koaCors2.default)(_config2.default.corsOptions));

_leanReady2.default.mixin(app);

// wire modules
var launchContextDone = app.add('launchContext');
(0, _context2.load)(app, launchContextDone);

// routes
(0, _routes2.default)(app);

//404
app.use(function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, next) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx.throw(new _errors2.default.NotFoundError());

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

// error handler
app.on('error', function (err, ctx) {
  _logging.logger.error(err);
  ctx.status = err.statusCode;
  ctx.body = { errmsg: err.message };
});

exports.default = app;