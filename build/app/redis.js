'use strict';

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _redis = require('redis');

var _redis2 = _interopRequireDefault(_redis);

var _logging = require('./logging');

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var settings = _config2.default.redis;
var DEFAULT_NAME = 'default';
var clients = {};
//const options = [
//    "host",
//    "port",
//    "path",
//    "url",
//    "parser",
//    "string_numbers",
//    "return_buffers",
//    "detect_buffers",
//    "socket_keepalive",
//    "no_ready_check",
//    "enable_offline_queue",
//    "retry_max_delay",
//    "connect_timeout",
//    "max_attempts",
//    "retry_unfulfilled_commands",
//    "password",
//    "db",
//    "family",
//    "disable_resubscribing",
//    "rename_commands",
//    "tls",
//    "prefix",
//    "retry_strategy"
//];

_bluebird2.default.promisifyAll(_redis2.default.RedisClient.prototype);
_bluebird2.default.promisifyAll(_redis2.default.Multi.prototype);

/*
 * logging methods
 */
var infolog = function infolog(msg) {
  return function () {
    _logging.logger.info(msg, arguments);
  };
};
var warnlog = function warnlog(msg) {
  return function () {
    _logging.logger.warn(msg, arguments);
  };
};
var errorlog = function errorlog(msg) {
  return function () {
    _logging.logger.error(msg, arguments);
  };
};

var redisClient = function redisClient(name) {
  name = name || DEFAULT_NAME;
  if (clients[name]) return clients[name];
  return clients[name] = createRedisClient(name);
};

var createRedisClient = function createRedisClient(name) {
  var redisClient = {};
  if (settings.mode == 'single') {
    redisClient = _redis2.default.createClient(settings.port, settings.host, {});
    //redisClient = redis.createClient(_.pick.apply(null, [settings].concat(options))); //TODO: need options
  } else {
    redisClient = null; //TODO: sentinel
  }

  if (settings.auth != '') {
    redisClient.auth(settings.auth);
  }

  var url = 'redis://' + redisClient.address;
  redisClient.on('connect', infolog('Redis client ' + name + ' is connecting to ' + url));
  redisClient.on('ready', infolog('Redis client ' + name + ' is ready'));
  redisClient.on('reconnecting', warnlog('Redis client ' + name + ' is reconnecting to ' + url));
  redisClient.on('error', errorlog('Redis client ' + name + ' error happens'));
  redisClient.on('end', infolog('Redis client ' + name + ' is ended'));
  return redisClient;
};

module.exports = redisClient;