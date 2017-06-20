'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserController = function () {
  function UserController() {
    (0, _classCallCheck3.default)(this, UserController);
  }

  (0, _createClass3.default)(UserController, [{
    key: 'getUser',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx) {
        var params, app, errors, users;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                params = ctx.params, app = ctx.app;
                _context.prev = 1;

                console.warn(ctx.app.ctx);
                errors = app.ctx.errors;
                _context.next = 6;
                return app.ctx.services.UserService().find();

              case 6:
                users = _context.sent;

                // let userTmp = users[1]
                // await app.ctx.kvs.UserKv().save(userTmp)
                // let user = await app.ctx.kvs.UserKv().loadById(userTmp.id)
                ctx.body = users;
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](1);
                throw _context.t0;

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 10]]);
      }));

      function getUser(_x) {
        return _ref.apply(this, arguments);
      }

      return getUser;
    }()
  }, {
    key: 'getUserById',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(id) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                console.warn('get user by id');
                _context2.next = 7;
                break;

              case 4:
                _context2.prev = 4;
                _context2.t0 = _context2['catch'](0);
                throw _context2.t0;

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 4]]);
      }));

      function getUserById(_x2) {
        return _ref2.apply(this, arguments);
      }

      return getUserById;
    }()
  }]);
  return UserController;
}();

exports.default = UserController;