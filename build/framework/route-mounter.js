'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Router = undefined;
exports.default = mount;

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Helper to define sub router.
 * @param {String} prefix 
 * @param {Function} routerCreator 
 * @return {Function}
 */
function mount(prefix, routerCreator) {
  return function (toMount, options) {
    var router = null;
    if (toMount instanceof _koaRouter2.default) {
      router = new _koaRouter2.default();
      routerCreator(router);
      toMount.use(prefix, router.routes(), router.allowedMethods());
    } else {
      router = new _koaRouter2.default({ prefix: prefix });
      routerCreator(router);
      toMount.use(router.routes()).use(router.allowedMethods());
    }
  };
}

exports.Router = _koaRouter2.default;