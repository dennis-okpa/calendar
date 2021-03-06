const express = require('express');

const router = express.Router();

const queries = require('../../db/events/queries');

function isValidId(req, res, next){
  if(!isNaN(req.params.id)) return next();
  next(new Error('Invalid ID'));
}

function validEvent(event){
  const hasTitle = typeof event.summary === 'string' && event.summary.trim() !== '';
  const hasValidDate = typeof event.date === 'string' && event.date.trim() !== '';
  if(!hasTitle) console.log("Invalid summary", event.summary);
  if(!hasValidDate) console.log("Invalid date", event.date);
  return hasTitle && hasValidDate;
}

router.get('/', (req, res) => {
  queries.getAll().then(events => {
    res.json(events);
  })
});

router.get('/all/month', (req, res) => {
  queries.getAllMonth(decodeURI(req.query.month), decodeURI(req.query.year)).then(events => {
    res.json(events);
  })
});

router.get('/all/calendar/month', (req, res) => {
  const promises = [
    queries.getNoRepeats(req.query.firstDay, req.query.lastDay),
    queries.getRepeats(req.query.lastDay)
  ];

  const resultSet = {};

  Promise.all(promises).then((all)=>{
    resultSet.noRepeats = all[0];
    resultSet.repeats = all[1];
    resultSet.total = resultSet.noRepeats.length + resultSet.repeats.length;
    res.json(resultSet);
  });
});

router.get('/:id', isValidId, (req, res, next) => {
  queries.getOne(req.params.id).then(event => {
    if(event){
      res.json(event);
    } else {
      next();
    }
  });
});

router.post('/', (req, res, next) => {
  if(validEvent(req.body)){
    queries.create(req.body).then(event => {
      res.json(event);
    });
  } else {
    next(new Error('Invalid event'));
  }
});

router.put('/:id', isValidId, (req, res, next) => {
  if(validEvent(req.body)){
    queries.update(req.params.id, req.body).then(event => {
      res.json(event);
    });
  } else {
    next(new Error('Invalid event'));
  }
});

router.delete('/:id', isValidId, (req, res, next) => {
  queries.delete(req.params.id).then(() => {
    res.json({
      deleted: true
    });
  });
});


module.exports = router;