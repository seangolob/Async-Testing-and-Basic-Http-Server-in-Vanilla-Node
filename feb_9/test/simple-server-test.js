'use strict';

require('../simple-server');
var chai = require('chai');
var chaihttp = require('chai-http');

chai.use(chaihttp);

var expect = chai.expect;

describe('our http server', function() {

  var server = 'localhost:3000';
  var currentdate = new Date();

  it('should respond to a time request', function(done) {
    chai.request(server)
      .get('/time')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.text).to.eql('Last Sync: ' + currentdate.getDay() + '/' + currentdate.getMonth() + '/' + currentdate.getFullYear() + ' @ ' + currentdate.getHours() + ':' + currentdate.getMinutes() + ':' + currentdate.getSeconds() + '\n');
        done();
      });
  });

  it('should greet someone who inputs his name', function(done) {
    chai.request(server)
      .get('/greet/toastynerd')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.text).to.eql('Greetings toastynerd!\n');
        done();
      });
  });

});
