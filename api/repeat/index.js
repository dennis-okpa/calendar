const express = require('express');

const router = express.Router();

const queries = require('../../db/repeat/queries');

function isValidId(req, res, next){
  if(!isNaN(req.params.id)) return next();
  next(new Error('Invalid ID'));
}

router.get('/', (req, res) => {
  queries.getAll().then(repeats => {
    res.json(repeats);
  })
});

router.get('/:id', isValidId, (req, res, next) => {
  queries.getOne(req.params.id).then(repeat => {
    if(repeat){
      res.json(repeat);
    } else {
      next();
    }
  });
});


module.exports = router;