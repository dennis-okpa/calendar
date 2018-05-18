const express = require('express');
const db = require('../database.js');

console.log("db", db);

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.any('SELECT * FROM events').then(data => {
      // success
      res.json(data);
    })
    .catch(error => {
      // error
    });
});

module.exports = router;
