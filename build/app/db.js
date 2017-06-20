'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Sequelize from 'sequelize'
// import config from '../config'

// const settings = config.mysql;
// const { host, username, password, db } = settings
// const sequelize = new Sequelize(db, username, password, {
//   host,
//   username: username,
//   password: password,
//   dialect: 'mysql',
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// })

// export default sequelize

var settings = _config2.default.mongo;
var makeUrl = function makeUrl(mongo) {
  var authPart = settings.username + ':' + settings.password + '@';
  var auth = settings.username ? authPart : '';
  //mongodb://vmark: t2f0sovjsq2@dds-2ze2d24974dce3542.mongodb.rds.aliyuncs.com:3717,dds-2ze2d24974dce3541.mongodb.rds.aliyuncs.com:3317/vmark?replicaSet=mgset-682195
  var url = 'mongodb://' + auth + mongo.host + ':' + mongo.port + '/' + mongo.db;
  if (settings.slave) {
    url = url + ',' + mongo.slave_host + ':' + mongo.slave_port + '/' + mongo.db + '?replicaSet=mgset-682195';
  }
  //return 'mongodb://' + auth + mongo.host + ':' + mongo.port + '/' + mongo.db + '?replicaSet=mgset-682195';
  return url;
};

var url = makeUrl(settings);
var options = {};

_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect(url, options);

_mongoose2.default.connection.on('connected', function () {
  console.log('Mongoose connected to ' + url);
});
_mongoose2.default.connection.on('error', function (err) {
  console.log('Mongoose error happens: ' + err);
});
_mongoose2.default.connection.on('disconnected', function () {
  console.log('Mongoose disconnected to ' + url);
});

exports.default = _mongoose2.default;