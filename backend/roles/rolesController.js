var express = require('express');
var bodyparser = require('body-parser');
var router = express.Router();
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({extended: true}));

var Role = require('./roleModel');


/**
 * Pour afficher tous les roles
 */
router.get('/roles', function(req, res){
    Role.getRoles(function(err, rows){
        if(err){
            res.status(400).json(err)
        }else{
            res.send(rows)
        }
    })
});


/**
 * Pour ajouter un role
 */
router.post('/ajouterrole', function(req){
    Role.createRole(req.body,(err,rows) => {})
});


/**
 * Pour mettre à jour un role
 */
router.put('/role/update', function (req,res){
    Role.updateRole(req.body,(err,rows) =>{})
});



/**
 * Pour supprimer un role
 */
router.delete('/role/:id', function(req,res){
    Role.deleteRole(req.body,(err,rows) =>{})
});



/**
 * Pour avoir les détails d'un role
 */
router.get('/role/details/:id', function(req,res){
    Role.getRoleById(function(err,rows){
        if(err){
            res.status(400).json(err)
        }else{
            res.send(rows)
        }
    })
})

module.exports = router;