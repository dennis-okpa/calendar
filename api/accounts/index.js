const express = require('express');

const router = express.Router();

const queries = require('../../db/accounts/queries');

function isValidId(req, res, next){
    if(!isNaN(req.params.id)) return next();
    next(new Error('Invalid ID'));
}

function validAccount(account){
    const hasTitle = typeof account.name === 'string' && account.name.trim() !== '';
    return hasTitle;
}

router.get('/', (req, res) => {
    queries.getAll().then(accounts => {
        res.json(accounts);
    })
});

router.get('/account/:id', isValidId, (req, res, next) => {
    queries.getOne(req.params.id).then(account => {
        if(account){
            res.json(account);
        } else {
            next();
        }
    });
});

router.post('/account', (req, res, next) => {
    if(validAccount(req.body)){
        queries.create(req.body).then(account => {
            res.json(account);
        });
    } else {
        next(new Error('Invalid account'));
    }
});

router.put('/account/:id', isValidId, (req, res, next) => {
    if(validAccount(req.body)){
        queries.update(req.params.id, req.body).then(account => {
            res.json(account);
        });
    } else {
        next(new Error('Invalid account'));
    }
});

router.delete('/account/:id', isValidId, (req, res, next) => {
    queries.delete(req.params.id).then(() => {
        res.json({
            deleted: true
        });
    });
});

module.exports = router;