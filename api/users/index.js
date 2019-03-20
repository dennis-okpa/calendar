const express = require('express');

const router = express.Router();

const queries = require('../../db/users/queries');

function isValidId(req, res, next){
    if(!isNaN(req.params.id)) return next();
    next(new Error('Invalid ID'));
}

function validUser(user){
    const hasForename = typeof user.forename === 'string' && user.forename.trim() !== '';
    const hasSurname = typeof user.surname === 'string' && user.surname.trim() !== '';
    const hasEmail = typeof user.email === 'string' && user.email.trim() !== '';
    const hasUsername = typeof user.username === 'string' && user.username.trim() !== '';
    const hasPassword = typeof user.password === 'string' && user.password.trim() !== '';
    const hasRoleId = typeof user.role_fk === 'number' && user.role_fk.trim() !== '';
    return hasForename && hasSurname && hasEmail && hasUsername && hasPassword && hasRoleId;
}

router.get('/', (req, res) => {
    queries.getAll().then(users => {
        res.json(users);
    })
});

router.get('/user/:id', isValidId, (req, res, next) => {
    queries.getOne(req.params.id).then(user => {
        if(user){
            res.json(user);
        } else {
            next();
        }
    });
});

router.post('/user', (req, res, next) => {
    if(validUser(req.body)){
        queries.create(req.body).then(user => {
            res.json(user);
        });
    } else {
        next(new Error('Invalid user'));
    }
});

router.put('/user/:id', isValidId, (req, res, next) => {
    if(validUser(req.body)){
        queries.update(req.params.id, req.body).then(user => {
            res.json(user);
        });
    } else {
        next(new Error('Invalid user'));
    }
});

router.delete('/user/:id', isValidId, (req, res, next) => {
    queries.delete(req.params.id).then(() => {
        res.json({
            deleted: true
        });
    });
});

module.exports = router;