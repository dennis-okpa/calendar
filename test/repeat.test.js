const request = require('supertest');
const expect = require('chai').expect;
const knex = require('../db/knex');

const app = require('../app');

const testData = require('./repeat_test_data');

describe('Test Repeat API', () => {
  before((done) => {
    // run migrations
    knex.migrate.latest()
      .then(() => {
        // run seeds
        return knex.seed.run();
      }).then(() => done());
  });

  it('Lists all records', (done) => {
    request(app)
      .get('/api/repeat')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) done(err);
        expect(res.body).to.be.a('array');
        expect(res.body).to.deep.equal(testData.repeats);
        done();
      });
  });

  it('Show one record', (done) => {
    request(app)
      .get('/api/repeat/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) done(err);
        expect(res.body).to.be.a('object');
        expect(res.body).to.deep.equal(testData.repeats[1]);
        done();
      });
  });
});

