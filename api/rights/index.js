const express = require('express');

const router = express.Router();

const queries = require('../../db/rights/queries');

function isValidId(req, res, next){
    if(!isNaN(req.params.id)) return next();
    next(new Error('Invalid ID'));
}

function validRight(right){
    const hasTitle = typeof right.name === 'string' && right.name.trim() !== '';
    return hasTitle;
}

router.get('/', (req, res) => {
    queries.getAll().then(rights => {
        res.json(rights);
    })
});

router.get('/right/:id', isValidId, (req, res, next) => {
    queries.getOne(req.params.id).then(right => {
        if(right){
            res.json(right);
        } else {
            next();
        }
    });
});

router.post('/right', (req, res, next) => {
    if(validRight(req.body)){
        queries.create(req.body).then(right => {
            res.json(right);
        });
    } else {
        next(new Error('Invalid right'));
    }
});

router.put('/right/:id', isValidId, (req, res, next) => {
    if(validRight(req.body)){
        queries.update(req.params.id, req.body).then(right => {
            res.json(right);
        });
    } else {
        next(new Error('Invalid right'));
    }
});

router.delete('/right/:id', isValidId, (req, res, next) => {
    queries.getOne(req.params.id).then(right => {
        if(right){
            if(!right.system){
                try {
                    queries.delete(req.params.id).then(() => {
                        res.json({
                            deleted: true
                        });
                    });
                } catch (err) {
                    res.status(500);
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