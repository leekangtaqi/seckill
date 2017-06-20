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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var idToObjKey = function idToObjKey(id) {
  return 'usr:o:id:' + id;
};

var UserKv = function () {
  function UserKv(context) {
    (0, _classCallCheck3.default)(this, UserKv);

    this.context = context;
  }

  (0, _createClass3.default)(UserKv, [{
    key: 'loadById',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(id) {
        var redis, key;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                redis = this.context.redis.main;
                key = idToObjKey(id);
                _context.next = 5;
                return redis.hgetallAsync(key);

              case 5:
                return _context.abrupt('return', _context.sent);

              case 8:
                _context.prev = 8;
                _context.t0 = _context['catch'](0);

                this.context.logger.error(_context.t0);
                throw _context.t0;

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function loadById(_x) {
        return _ref.apply(this, arguments);
      }

      return loadById;
    }()
  }, {
    key: 'save',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(json) {
        var redis, id, key, fields;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                redis = this.context.redis.main;
                id = json.id;
                key = idToObjKey(id);
                fields = ['username'];
                _context2.next = 7;
                return redis.hmsetAsync(key, _lodash2.default.pick.apply(_lodash2.default, [json].concat(fields)));

              case 7:
                _context2.next = 13;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2['catch'](0);

                this.context.logger.error(_context2.t0);
                throw _context2.t0;

              case 13:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 9]]);
      }));

      function save(_x2) {
        return _ref2.apply(this, arguments);
      }

      return save;
    }()
  }]);
  return UserKv;
}();

exports.default = UserKv;