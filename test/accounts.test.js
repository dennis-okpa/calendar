const request = require('supertest');
const expect = require('chai').expect;
const knex = require('../db/knex');
require('dotenv/config');

const app = require('../app');

const testData = require('./accounts_test_data');

console.log("accounts.test.js process.env.NODE_ENV", process.env.NODE_ENV);

describe('Test Accounts CRUD API', () => {
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
      .get('/api/accounts')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, response) {
        if (err) done(err);
        expect(response.body).to.be.a('array');
        expect(response.body).to.deep.equal(testData.accounts);
        done();
      });
  });

  it('Show one record', (done) => {
    request(app)
      .get('/api/accounts/account/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, response) {
        if (err) done(err);
        expect(response.body).to.be.a('object');
        expect(response.body).to.deep.equal(testData.accounts[0]);
        done();
      });
  });

  it('It creates a record', (done) => {
    request(app)
      .post('/api/accounts/account')
      .send(testData.account)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, response) {
        if (err) done(err);
        expect(response.body).to.be.a('object');
        console.log("response.body", response.body);
        console.log("testData.account", testData.account);
        expect(response.body).to.deep.equal(testData.account);
        done();
      });
  });

  it('Updates a record', (done) => {
    testData.account.name = "new account name";
    request(app)
      .put('/api/accounts/account/4')
      .send(testData.account)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, response) {
        if (err) done(err);
        expect(response.body).to.be.a('object');
        expect(response.body).to.deep.equal(testData.account);
        done();
      });
  });

  it('Deletes a record', (done) => {
    request(app)
      .delete('/api/accounts/account/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, response) {
        if (err) done(err);
        expect(response.body).to.be.a('object');
        expect(response.body).to.deep.equal({
          deleted: true
        });
        done();
      });
  });
});


