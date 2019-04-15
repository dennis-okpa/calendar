const request = require('supertest');
const expect = require('chai').expect;
const knex = require('../db/knex');
require('dotenv/config');

const app = require('../app');

const testData = require('./roles_test_data');

console.log("roles.test.js process.env.NODE_ENV", process.env.NODE_ENV);

describe('Test Roles CRUD API', () => {
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
      .get('/api/roles')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, response) {
        expect(response.body).to.be.a('array');
        expect(response.body).to.deep.equal(testData.roles);

        done(err);
      });
  });

  it('Show one record', (done) => {
    request(app)
      .get('/api/roles/role/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, response) {
        expect(response.body).to.be.a('object');
        expect(response.body).to.deep.equal(testData.roles[0]);
        done(err);
      });
  });

  it('It creates a record', (done) => {
    request(app)
      .post('/api/roles/role')
      .send(testData.role_to_create)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, response) {
        expect(response.body).to.be.a('object');
        expect(response.body).to.deep.equal(testData.role_to_create);
        done(err);
      });
  });

  it('Updates a record', (done) => {
    // Add test data
    request(app)
        .post('/api/roles/role')
        .send(testData.role_to_update)
        .set('Accept', 'application/json')
        .end(function (err, response) {
            // Run unit test
            testData.role_to_update.name = "new role name";
            request(app)
            .put('/api/roles/role/5')
            .send(testData.role_to_update)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, response) {
                expect(response.body).to.be.a('object');
                expect(response.body).to.deep.equal(testData.role_to_update);
                done(err);
            });
        });
  });

  it('Deletes a record', (done) => {
    // Add test data
    request(app)
    .post('/api/roles/role')
    .send(testData.role_to_del)
    .set('Accept', 'application/json')
    .end(function (err, response) {
        request(app)
        .delete('/api/roles/role/6')
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

  it('Try to delete a record that is not allowed to be deleted', (done) => {
    request(app)
      .delete('/api/roles/role/1')
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


