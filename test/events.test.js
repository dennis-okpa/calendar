const request = require('supertest');
const expect = require('chai').expect;
const knex = require('../db/knex');

const app = require('../app');

const testData = require('./events_test_data');

describe('Test Events CRUD API', () => {
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
      .get('/api/events')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, response) {
        if (err) done(err);
        expect(response.body).to.be.a('array');
        expect(response.body).to.deep.equal(testData.events);
        done();
      });
  });

  it('Lists all records within a given month', (done) => {
    request(app)
      .get('/api/events/all/month?month=6&year=2018')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, response) {
        if (err) done(err);
        expect(response.body).to.be.a('array');
        expect(response.body).to.deep.equal([testData.events[1],testData.events[2],testData.events[3]]);
        done();
      });
  });

  it('Lists all records between a date range', (done) => {
    request(app)
      .get('/api/events/all/calendar/month?firstDay='+encodeURI('2018-05-13T16:53:27.782Z')+'&lastDay='+encodeURI('2018-06-15T16:53:27.782Z'))
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, response) {
        if (err) done(err);
        expect(response.body).to.be.a('array');
        console.log(response.body);
        expect(response.body).to.deep.equal([testData.events[0],testData.events[1]]);
        done();
      });
  });

  it('Show one record', (done) => {
    request(app)
      .get('/api/events/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, response) {
        if (err) done(err);
        expect(response.body).to.be.a('object');
        expect(response.body).to.deep.equal(testData.events[0]);
        done();
      });
  });

  it('It creates a record', (done) => {
    request(app)
      .post('/api/events')
      .send(testData.event)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, response) {
        if (err) done(err);
        expect(response.body).to.be.a('object');
        expect(response.body).to.deep.equal(testData.event);
        done();
      });
  });

  it('Updates a record', (done) => {
    testData.event.summary = "new Summary";
    request(app)
      .put('/api/events/5')
      .send(testData.event)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, response) {
        if (err) done(err);
        expect(response.body).to.be.a('object');
        expect(response.body).to.deep.equal(testData.event);
        done();
      });
  });

  it('Deletes a record', (done) => {
    request(app)
      .delete('/api/events/1')
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


