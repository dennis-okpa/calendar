const express = require('express');

const router = express.Router();

const queries = require('../../db/groupOfRights/queries');

function isValidId(req, res, next){
    if(!isNaN(req.params.id)) return next();
    next(new Error('Invalid ID'));
}

router.get('/', (req, res) => {
    queries.getAll().then(groupOfRights => {
        res.json(groupOfRights);
    })
});

router.get('/groupOfRight/:id', isValidId, (req, res, next) => {
    queries.getOne(req.params.id).then(groupOfRight => {
        if(groupOfRight){
            res.json(groupOfRight);
        } else {
            next();
        }
    });
});

router.post('/groupOfRight', (req, res, next) => {
    queries.create(req.body).then(groupOfRight => {
        res.json(groupOfRight);
    }).error(err => {
        res.json(err);
    });
});

router.put('/groupOfRight/:id', isValidId, (req, res, next) => {
    queries.update(req.params.id, req.body).then(groupOfRight => {
        res.json(groupOfRight);
    });
});

router.delete('/groupOfRight/:id', isValidId, (req, res, next) => {
    queries.getOne(req.params.id).then(groupOfRight => {
        if(groupOfRight){
            queries.delete(req.params.id).then(() => {
                res.json({
                    deleted: true
                });
            });
        } else {
            next();
        }
    });
});

module.exports = router;