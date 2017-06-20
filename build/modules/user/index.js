'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _services = require('./services');

var _services2 = _interopRequireDefault(_services);

var _controllers = require('./controllers');

var _controllers2 = _interopRequireDefault(_controllers);

var _models = require('./models');

var _models2 = _interopRequireDefault(_models);

var _kvs = require('./kvs');

var _kvs2 = _interopRequireDefault(_kvs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  services: _services2.default,
  controllers: _controllers2.default,
  kvs: _kvs2.default,
  models: _models2.default
};