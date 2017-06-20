'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserSchema = new _mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: 'Username is required!!'
  }
}, {
  timestamps: true
});

UserSchema.set('toObject', {
  getters: true,
  virtuals: true,
  transform: function transform(doc, ret, options) {
    options.hide = options.hide || '_id __v createdAt updatedAt';
    if (options.hide) {
      options.hide.split(' ').forEach(function (prop) {
        delete ret[prop];
      });
    }
  }
});

exports.default = _mongoose2.default.model('User', UserSchema);