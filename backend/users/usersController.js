var express = require('express');
var bodyparser = require('body-parser');
var router = express.Router();
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({extended: true}));
var Users = require('./userModel');


/**
 * Pour afficher toute la liste des Users
 */
router.get('/users', function (req,res){
    Users.getUsers(function(err,rows){
        if(err){
            res.status(400).json(err);
        }else{
            res.send(rows)
        }
    });
});

router.get('/countrole', function (req, res){
    Users.getCountUsersByRole(function(err,rows){
        if(err){
            res.status(400).json(err);
        }else{
            res.send(rows)
        }
    });
});


/**
 * Pour ajouter un nouvel user
 */
router.post('/inscription', function(req){
    Users.createUser(req.body,(err,rows) => {});
});


/**
 * Pour mettre à jour un User
 */
router.put('/users/update/:id', function (req, res){
    Users.updateUser(req.params, (err,count) => {});
});


/**
 * Pour supprimer un User
 */
router.delete('/users/:id', function(req, res){
    Users.deleteUser(req.params,(err,rows) => {});
});


/**
 * Pour récupérer les données d'un User
 */
router.get('/users/detail/:id', function(req, res){
    Users.getUserById(req.params, (err,rows) => {
        
        if(err){
            res.status(400).json(err)
        }else{
            res.send(rows)
        }
    })
});


module.exports = router;