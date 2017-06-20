'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MainRouter;

var _context = require('../app/context');

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MainRouter(router) {
  var mainController = _context2.default.controllers.mainController;


  router.get('/', mainController.getMain);

  return router;
}