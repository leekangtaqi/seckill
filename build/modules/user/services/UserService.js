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

var UserService = function () {
  function UserService(context) {
    (0, _classCallCheck3.default)(this, UserService);

    this.context = context;
  }

  (0, _createClass3.default)(UserService, [{
    key: 'create',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(userMeta) {
        var User, user;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                User = this.context.models.User;
                user = new User(userMeta);
                _context.next = 4;
                return user.save();

              case 4:
                return _context.abrupt('return', user);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function create(_x) {
        return _ref.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: 'find',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        var User;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                User = this.context.models.User;
                _context2.next = 3;
                return Company.sync({ force: true });

              case 3:
                _context2.next = 5;
                return User.sync({ force: true });

              case 5:
                _context2.next = 7;
                return User.create({ firstName: '2222', companyId: id });

              case 7:
                _context2.next = 9;
                return User.findOne();

              case 9:
                return _context2.abrupt('return', _context2.sent);

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function find() {
        return _ref2.apply(this, arguments);
      }

      return find;
    }()
  }]);
  return UserService;
}();

exports.default = UserService;