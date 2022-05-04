var express = require('express');
var bodyparser = require('body-parser');
var router = express.Router();
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({extended: true}));

var Evenement = require('./evenementModel');


/**
 * Pour afficher tous les évènements
 */
router.get('/evenements', function(req, res){
    Evenement.getEvenements(function(err, rows){
        if(err){
            res.status(400).json(err)
        }else{
            res.send(rows)
        }
    })
});


/**
 * Pour ajouter un évènement
 */
router.post('/ajouterevenement', function(req){
    Evenement.createEvenement(req.body,(err,rows) => {})
});


/**
 * Pour mettre à jour un évènement
 */
router.put('/evenement/update', function (req,res){
    Evenement.updateEvenement(req.body,(err,rows) =>{})
});



/**
 * Pour supprimer un évènement
 */
router.delete('/evenement/:id', function(req,res){
    Evenement.deleteEvenement(req.body,(err,rows) =>{})
});



/**
 * Pour avoir les détails d'un évènement
 */
router.get('/evenement/details/:id', function(req,res){
    Evenement.getEvenementById(function(err,rows){
        if(err){
            res.status(400).json(err)
        }else{
            res.send(rows)
        }
    })
})

module.exports = router;