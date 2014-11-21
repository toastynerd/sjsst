'use stict';

var crypto = require('crypto');
var encode = require('./encode');
var decode = require('./decode');

var Sjsst = function() {};

Sjsst.prototype.encode = encode.encode;
Sjsst.prototype.decode = decode.decode;

Sjsst.prototype.genivSync = function() {
  var self = this;
  crypto.randomBytes(16, function(err, buf) {
    if (err) throw err;
    self.iv = buf; 
  });
};

var instance = new Sjsst();

module.exports = instance;
