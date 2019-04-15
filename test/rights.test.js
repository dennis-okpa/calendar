const request = require('supertest');
const expect = require('chai').expect;
const knex = require('../db/knex');
require('dotenv/config');

const app = require('../app');

const testData = require('./rights_test_data');

console.log("rights.test.js process.env.NODE_ENV", process.env.NODE_ENV);

describe('Test Rights CRUD API', () => {
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
      .get('/api/rights')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, response) {
        expect(response.body).to.be.a('array');
        expect(response.body).to.deep.equal(testData.rights);

        done(err);
      });
  });

  it('Show one record', (done) => {
    request(app)
      .get('/api/rights/right/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, response) {
        expect(response.body).to.be.a('object');
        expect(response.body).to.deep.equal(testData.rights[0]);

        done(err);
      });
  });

  it('It creates a record', (done) => {
    request(app)
      .post('/api/rights/right')
      .send(testData.right)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, response) {
        expect(response.body).to.be.a('object');
        expect(response.body).to.deep.equal(testData.right);

        done(err);
      });
  });

  it('Updates a record', (done) => {
      console.log("testData.right", testData.right);
    testData.right.name = "new right name";
    request(app)
      .put('/api/rights/right/10')
      .send(testData.right)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, response) {
        expect(response.body).to.be.a('object');
        expect(response.body).to.deep.equal(testData.right);

        done(err);
      });
  });

  it('Deletes a record', (done) => {
    request(app)
      .post('/api/rights/right')
      .send(testData.right_to_del)
      .set('Accept', 'application/json')
      .end(function (err, response) {
        request(app)
          .delete('/api/rights/right/11')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function (err, response) {
            console.log(response.body);
            expect(response.body).to.be.a('object');
            expect(response.body).to.deep.equal({
              deleted: true
            });

            done(err);

          });
      });
  });

  it('Try to delete a record that is not allowed to be deleted', (done) => {
    request(app)
      .delete('/api/rights/right/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(403)
      .end(function (err, response) {
        expect(response.body).to.be.a('object');
        expect(response.body).to.deep.equal({
          error: 'Not allowed to delete system created resource!'
        });
        done(err);
      });
  });
});


