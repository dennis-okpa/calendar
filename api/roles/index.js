const express = require('express');

const router = express.Router();

const queries = require('../../db/roles/queries');

function isValidId(req, res, next){
    if(!isNaN(req.params.id)) return next();
    next(new Error('Invalid ID'));
}

function validRole(role){
    const hasTitle = typeof role.name === 'string' && role.name.trim() !== '';
    return hasTitle;
}

router.get('/', (req, res) => {
    queries.getAll().then(roles => {
        res.json(roles);
    })
});

router.get('/role/:id', isValidId, (req, res, next) => {
    queries.getOne(req.params.id).then(role => {
        if(role){
            res.json(role);
        } else {
            next();
        }
    });
});

router.post('/role', (req, res, next) => {
    if(validRole(req.body)){
        queries.create(req.body).then(role => {
            res.json(role);
        });
    } else {
        next(new Error('Invalid role'));
    }
});

router.put('/role/:id', isValidId, (req, res, next) => {
    if(validRole(req.body)){
        queries.update(req.params.id, req.body).then(role => {
            res.json(role);
        });
    } else {
        next(new Error('Invalid role'));
    }
});

router.delete('/role/:id', isValidId, (req, res, next) => {
    queries.getOne(req.params.id).then(role => {
        if(role){
            if(!role.system){
                try {
                    queries.delete(req.params.id).then(() => {
                        res.json({
                            deleted: true
                        });
                    });
                } catch (err) {
                    res.json(err);
                }
            } else {
                res.status(403).send({ error: 'Not allowed to delete system created resource!' });
            }
        } else {
            next();
        }
    });
});

module.exports = router;