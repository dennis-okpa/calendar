const express = require('express');
const db = require('../database.js');

console.log("db", db);

const router = express.Router();

/* GET users listing. */
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

module.exports = router;
