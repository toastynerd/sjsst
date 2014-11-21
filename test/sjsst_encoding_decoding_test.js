'use strict';

var expect = require('chai').expect;
var sjsst = require('../index');

describe('sjsst encode and decode', function() {
  var token;
  before(function() {
    sjsst.genivSync();
  });

  it('should encode successfully', function(done) {
    sjsst.encode({greeting: 'hello world'}, 'testkey', function(err, data) {
      token = data;
      expect(err).to.be.null;
      expect(data.toString('base64').length).to.not.be(0);
      done();
    });
  });

  it('should be able to decode successfully', function(done) {
    sjsst.decode(token, 'testkey', function(err, data) {
      expect(err).to.be.null;
      expect(data.greeting).to.eql('hello world');
      done();
    });
  });
});
