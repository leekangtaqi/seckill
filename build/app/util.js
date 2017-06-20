"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  values: _regenerator2.default.mark(function values(obj) {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, key;

    return _regenerator2.default.wrap(function values$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 3;
            _iterator = (0, _getIterator3.default)((0, _keys2.default)(obj));

          case 5:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 12;
              break;
            }

            key = _step.value;
            _context.next = 9;
            return obj[key];

          case 9:
            _iteratorNormalCompletion = true;
            _context.next = 5;
            break;

          case 12:
            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](3);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 18:
            _context.prev = 18;
            _context.prev = 19;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 21:
            _context.prev = 21;

            if (!_didIteratorError) {
              _context.next = 24;
              break;
            }

            throw _iteratorError;

          case 24:
            return _context.finish(21);

          case 25:
            return _context.finish(18);

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, values, this, [[3, 14, 18, 26], [19,, 21, 25]]);
  }),
  pairs: _regenerator2.default.mark(function pairs(obj) {
    var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, key;

    return _regenerator2.default.wrap(function pairs$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context2.prev = 3;
            _iterator2 = (0, _getIterator3.default)((0, _keys2.default)(obj));

          case 5:
            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
              _context2.next = 12;
              break;
            }

            key = _step2.value;
            _context2.next = 9;
            return [key, obj[key]];

          case 9:
            _iteratorNormalCompletion2 = true;
            _context2.next = 5;
            break;

          case 12:
            _context2.next = 18;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](3);
            _didIteratorError2 = true;
            _iteratorError2 = _context2.t0;

          case 18:
            _context2.prev = 18;
            _context2.prev = 19;

            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }

          case 21:
            _context2.prev = 21;

            if (!_didIteratorError2) {
              _context2.next = 24;
              break;
            }

            throw _iteratorError2;

          case 24:
            return _context2.finish(21);

          case 25:
            return _context2.finish(18);

          case 26:
          case "end":
            return _context2.stop();
        }
      }
    }, pairs, this, [[3, 14, 18, 26], [19,, 21, 25]]);
  })
};