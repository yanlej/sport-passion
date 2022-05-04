var express = require('express');
var bodyparser = require('body-parser');
var router = express.Router();
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({extended: true}));

var Etat = require('./etatModel');


/**
 * Pour afficher toutes les présences / absences
 */
router.get('/etats', function(req, res){
    Etat.getEtats(function(err, rows){
        if(err){
            res.status(400).json(err)
        }else{
            res.send(rows)
        }
    })
});


/**
 * Pour ajouter une présence / une absence
 */
router.post('/ajouteretat', function(req){
    Etat.createEtat(req.body,(err,rows) => {})
});


/**
 * Pour mettre à jour une présence / une absence
 */
router.put('/etat/update', function (req,res){
    Etat.updateEtat(req.body,(err,rows) =>{})
});



/**
 * Pour supprimer une présence / une absence
 */
router.delete('/etat/:id', function(req,res){
    Etat.deleteEtat(req.body,(err,rows) =>{})
});



/**
 * Pour avoir les détails d'un état
 */
router.get('/etat/details/:id', function(req,res){
    Etat.getEtatById(function(err,rows){
        if(err){
            res.status(400).json(err)
        }else{
            res.send(rows)
        }
    })
})

module.exports = router;