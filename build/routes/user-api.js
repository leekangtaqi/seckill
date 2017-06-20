'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UserApiRouter;

var _context = require('../app/context');

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UserApiRouter(router) {
  var userController = _context2.default.controllers.userController;


  router.get('/:id', userController.getUser);

  return router;
}