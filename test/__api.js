var expect = require('expect');
var server = require('../src/server.js');
var request = require('supertest');
var chai = require('chai');


describe('API', function() {
    var server;

    beforeEach(function () {
        server = require('../src/server.js');
    });

    afterEach(function () {
        server = close();
    });

    it('/ should return specified object.', function testHealth(done) {
        request(server)
            .get('/api/v1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, { hello: 'world'} ,done)
    });

    it('/status return specified healthy:true.', function testHealth(done) {
        request(server)
            .get('/api/v1/status')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, { healthy: true} ,done)
    });

    it('/user/id should return a user obj with id.', function testHealth(done) {
      request(server)
            .get('/api/v1/user/347')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, { user: {id: 347}} ,done);
    })
});
