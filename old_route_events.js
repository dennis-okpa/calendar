const express = require('express');
const db = require('../database.js');

console.log("db", db);

const router = express.Router();

console.log("router", router);

router.route('/:id')
  .all(function(req, res, next) {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
    next();
  })
  .get(function(req, res, next) {
    db.any('SELECT * FROM events ' +
      ' WHERE EXTRACT(month FROM "date") = ${month}' +
      ' AND EXTRACT(year FROM "date") = ${year}', {
      month: req.query.month,
      year: req.query.year
    })
    .then(data => {
      // success
      res.json(data);
    })
    .catch(error => {
      // error
    });
  })
  .put(function(req, res, next) {
    next(new Error('put not implemented'));
  })
  .post(function(req, res, next) {
    next(new Error('post not implemented'));
  })
  .delete(function(req, res, next) {
    next(new Error('delete not implemented'));
  });

/* GET users listing. */
/*
router.get('/', function(req, res, next) {
  db.any('SELECT * FROM events ' +
    ' WHERE EXTRACT(month FROM "date") = ${month}' +
    ' AND EXTRACT(year FROM "date") = ${year}', {
    month: req.query.month,
    year: req.query.year
  })
  .then(data => {
    // success
    res.json(data);
  })
  .catch(error => {
    // error
  });
});
*/

module.exports = router;
