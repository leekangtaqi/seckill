'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mountRoutes;

var _routeMounter = require('../framework/route-mounter');

var _routeMounter2 = _interopRequireDefault(_routeMounter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mountRoutes(app) {

  (0, _routeMounter2.default)('/', require('./main').default)(app);

  (0, _routeMounter2.default)('/api', require('./api').default)(app);
}