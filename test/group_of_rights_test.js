const request = require('supertest');
const expect = require('chai').expect;
const knex = require('../db/knex');
require('dotenv/config');

const app = require('../app');

const testData = require('./group_of_rights_test_data');

console.log("groupOfRights.test.js process.env.NODE_ENV", process.env.NODE_ENV);

describe('Test GroupOfRights CRUD API', () => {
  beforeEach((done) => {
    // run migrations
    knex.migrate.latest()
      .then(() => {
        // run seeds
        return knex.seed.run();
      }).then(() => done());
  });

  it('Lists all records', (done) => {
    request(app)
      .get('/api/groupOfRights')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, response) {
        expect(response.body).to.be.a('array');
        expect(response.body).to.deep.equal(testData.groupOfRights);

        done(err);
      });
  });

  it('Show one record', (done) => {
    request(app)
      .get('/api/groupOfRights/groupOfRight/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, response) {
        expect(response.body).to.be.a('object');
        expect(response.body).to.deep.equal(testData.groupOfRights[0]);
        done(err);
      });
  });

  it('It creates a record', (done) => {
    request(app)
      .post('/api/groupOfRights/groupOfRight')
      .send(testData.groupOfRight_to_create)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, response) {
        expect(response.body).to.be.a('object');
        expect(response.body).to.deep.equal(testData.groupOfRight_to_create);
        done(err);
      });
  });

  it('Updates a record', (done) => {
    // Add test data
    request(app)
        .post('/api/groupOfRights/groupOfRight')
        .send(testData.groupOfRight_to_update)
        .set('Accept', 'application/json')
        .end(function (err, response) {
            // Run unit test
            request(app)
            .put('/api/groupOfRights/groupOfRight/16')
            .send(testData.groupOfRight_to_update)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, response) {
                expect(response.body).to.be.a('object');
                expect(response.body).to.deep.equal(testData.groupOfRight_to_update);
                done(err);
            });
        });
  });

  it('Deletes a record', (done) => {
    // Add test data
    request(app)
    .post('/api/groupOfRights/groupOfRight')
    .send(testData.groupOfRight_to_del)
    .set('Accept', 'application/json')
    .end(function (err, response) {
        request(app)
        .delete('/api/groupOfRights/groupOfRight/17')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, response) {
            expect(response.body).to.be.a('object');
            expect(response.body).to.deep.equal({
                deleted: true
            });
            done(err);
        });
    });
  });
});


