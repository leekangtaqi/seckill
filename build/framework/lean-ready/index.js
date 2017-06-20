'use strict';

var READY_STATUS = {
  IDLE: 0,
  PENDING: 1,
  READY: 2,
  EXECED: 3,
  ABORT: 4
};

function Ready() {
  this.$readyRef = {
    members: [],
    callbacks: [],
    readyStatus: READY_STATUS.IDLE
  };
}

Ready.prototype.add = function (serviceName) {
  this.$readyRef.readyStatus = READY_STATUS.PENDING;
  var member = this.spawnMember(serviceName);
  this.$readyRef.members.push(member);
  return member;
};

Ready.prototype.spawnMember = function (serviceName) {
  var _this = this;

  var callback = function callback() {
    var _$readyRef = _this.$readyRef,
        members = _$readyRef.members,
        readyStatus = _$readyRef.readyStatus;

    callback.readyStatus = READY_STATUS.READY;
    members[members.indexOf(callback)].readyStatus = READY_STATUS.READY;
    _this.$readyRef.readyStatus = members.filter(function (m) {
      return m.readyStatus === READY_STATUS.READY;
    }).length === members.length ? READY_STATUS.READY : readyStatus;
    _this.ready();
    return _this;
  };
  callback.readyStatus = READY_STATUS.PENDING;
  Object.defineProperty(callback, 'name', {
    writable: true
  });
  callback.name = serviceName;
  return callback;
};

Ready.prototype.ready = function (callback) {
  var _$readyRef2 = this.$readyRef,
      readyStatus = _$readyRef2.readyStatus,
      callbacks = _$readyRef2.callbacks;

  var reset = true;
  if (!callback) {
    callback = function noop() {};
    reset = false;
  }
  callbacks.push(callback);
  if (readyStatus === READY_STATUS.READY || readyStatus === READY_STATUS.IDLE) {
    return this.flush(reset);
  }
};

Ready.prototype.flush = function (reset) {
  var _$readyRef3 = this.$readyRef,
      callbacks = _$readyRef3.callbacks,
      readyStatus = _$readyRef3.readyStatus;

  callbacks.forEach(function (cb) {
    return cb();
  });
  callbacks = [];
  reset && (readyStatus = READY_STATUS.IDLE);
  return this;
};

Ready.mixin = function (o) {
  var r = new Ready();
  for (var p in r) {
    o[p] = r[p];
  }
};

module.exports = Ready;