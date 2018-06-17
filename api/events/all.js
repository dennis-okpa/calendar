const express = require('express');
const router = express.Router();

const queries = require('../../db/events/queries');

router.get('/month', (req, res) => {
  queries.getAllMonth(req.query.month, req.query.year).then(events => {
    res.json(events);
  })
});

module.exports = router;