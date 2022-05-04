var express = require('express');
var bodyparser = require('body-parser');
var router = express.Router();
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({extended: true}));

var Activite = require('./activiteModel');


/**
 * Pour afficher toutes les activités
 */
router.get('/activites', function(req, res){
    Activite.getListActivity(function(err, rows){
        if(err){
            res.status(400).json(err)
        }else{
            res.send(rows)
        }
    })
});


/**
 * Pour ajouter une activité
 */
router.post('/ajouteractivite', function(req){
    Activite.getCreateActivity(req.body,(err,rows) => {})
});


/**
 * Pour mettre à jour une activité
 */
router.put('/activite/update', function (req,res){
    Activite.getUpdate(req.body,(err,rows) =>{})
});



/**
 * Pour supprimer une activité
 */
router.delete('/activite/:id', function(req,res){
    Activite.getDelete(req.body,(err,rows) =>{})
});



/**
 * Pour avoir les détails d'une activité
 */
router.get('/activite/details/:id', function(req,res){
    Activite.getActivityById(function(err,rows){
        if(err){
            res.status(400).json(err)
        }else{
            res.send(rows)
        }
    })
})

module.exports = router;