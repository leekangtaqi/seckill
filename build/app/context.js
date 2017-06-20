'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

exports.load = load;

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

var _redis = require('./redis');

var _redis2 = _interopRequireDefault(_redis);

var _allready = require('../framework/allready');

var _allready2 = _interopRequireDefault(_allready);

var _errors = require('../framework/errors');

var _errors2 = _interopRequireDefault(_errors);

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

var _logging = require('./logging');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var context = {
  errors: _errors2.default,
  redis: {
    main: null
  },
  db: {
    main: null
  },
  mongoose: {
    main: null
  },
  controllers: {},
  services: {},
  models: {},
  kvs: {}
};
// const redisMain = redisMainCreator()

function load(app, done) {
  !app && (app = {});
  var allready = new _allready2.default();
  context.logger = _logging.logger;
  context.mongoose.main = _db2.default;
  context.db.main = _db2.default;
  // context.redis.main = redisMain;

  // allready.add('redis', allready.redis(redisMain));
  allready.add('mongoose', allready.mongoose(_db2.default));
  // allready.add('mysql', db,
  //   db => {
  //     db.authenticate().then(() => {
  //       allready.up('mysql');
  //     })
  //   }, () => {}
  // );


  // wire modules
  var modules = require('../modules').default;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(_util2.default.values(modules)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref2 = _step.value;
      var controllers = _ref2.controllers,
          models = _ref2.models,
          services = _ref2.services,
          kvs = _ref2.kvs;

      // register models
      if (models && (0, _keys2.default)(models).length) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = (0, _getIterator3.default)(_util2.default.pairs(models)), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _step2$value = (0, _slicedToArray3.default)(_step2.value, 2),
                key = _step2$value[0],
                Inst = _step2$value[1];

            if (context.models[key]) {
              throw new Error('Failed to register the model,\n          [key]=' + key + ', [reason]=duplicated models');
            }
            context.models[key] = Inst;
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
      // register services
      if (services && (0, _keys2.default)(services).length) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          var _loop = function _loop() {
            var _step3$value = (0, _slicedToArray3.default)(_step3.value, 2),
                key = _step3$value[0],
                Contrs = _step3$value[1];

            if (context.services[key]) {
              throw new Error('Failed to register the service,\n          [key]=' + key + ', [reason]=duplicated service');
            }
            context.services[key] = function () {
              for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              return new (Function.prototype.bind.apply(Contrs, [null].concat([context], (0, _toConsumableArray3.default)(args.slice(1)))))();
            };
          };

          for (var _iterator3 = (0, _getIterator3.default)(_util2.default.pairs(services)), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            _loop();
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
      // register kvs
      if (kvs && (0, _keys2.default)(kvs).length) {
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          var _loop2 = function _loop2() {
            var _step4$value = (0, _slicedToArray3.default)(_step4.value, 2),
                key = _step4$value[0],
                Contrs = _step4$value[1];

            if (context.kvs[key]) {
              throw new Error('Failed to register the kv,\n          [key]=' + key + ', [reason]=duplicated kvs');
            }
            context.kvs[key] = function () {
              for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }

              return new (Function.prototype.bind.apply(Contrs, [null].concat([context], (0, _toConsumableArray3.default)(args.slice(1)))))();
            };
          };

          for (var _iterator4 = (0, _getIterator3.default)(_util2.default.pairs(kvs)), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            _loop2();
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }
      }
      // register controllers
      if (controllers && (0, _keys2.default)(controllers).length) {
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = (0, _getIterator3.default)(_util2.default.pairs(controllers)), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var _step5$value = (0, _slicedToArray3.default)(_step5.value, 2),
                _key3 = _step5$value[0],
                _Contrs = _step5$value[1];

            if (context.controllers[_key3]) {
              throw new Error('Failed to register the controller,\n          [key]=' + _key3 + ', [reason]=duplicated controller');
            }
            context.controllers[_key3.replace(/(\w)/, function (v) {
              return v.toLowerCase();
            })] = new _Contrs();
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5.return) {
              _iterator5.return();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  allready.ready(function () {
    app.ctx = context;
    done();
  });
}

exports.default = context;