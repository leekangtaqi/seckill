'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Api;

var _userApi = require('./user-api');

var _userApi2 = _interopRequireDefault(_userApi);

var _routeMounter = require('../framework/route-mounter');

var _routeMounter2 = _interopRequireDefault(_routeMounter);

var _middlewares = require('../middlewares');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Api(router) {

  router.use(_middlewares.logger);

  (0, _routeMounter2.default)('/user', _userApi2.default)(router);

  return router;
}