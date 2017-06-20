'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _logging = require('./logging');

var _logging2 = _interopRequireDefault(_logging);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app2.default.ready(function () {
  _app2.default.listen(_config2.default.port, _config2.default.bindip, function () {
    _logging.logger.info('application is startup, listening on port ' + _config2.default.port);
  });
});