var express = require('express');
var bodyparser = require('body-parser');
var router = express.Router();
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({extended: true}));

var Lieu = require('./lieuModel');


/**
 * Pour afficher tous les lieux
 */
router.get('/lieux', function(req, res){
    Lieu.getLieux(function(err, rows){
        if(err){
            res.status(400).json(err)
        }else{
            res.send(rows)
        }
    })
});


/**
 * Pour ajouter un lieu
 */
router.post('/ajouterlieu', function(req){
    Lieu.createLieu(req.body,(err,rows) => {})
});


/**
 * Pour mettre à jour un lieu
 */
router.put('/lieu/update', function (req,res){
    Lieu.updateLieu(req.body,(err,rows) =>{})
});



/**
 * Pour supprimer un lieu
 */
router.delete('/lieu/:id', function(req,res){
    Lieu.deleteLieu(req.body,(err,rows) =>{})
});



/**
 * Pour avoir les détails d'un lieu
 */
router.get('/lieu/details/:id', function(req,res){
    Lieu.getLieuById(function(err,rows){
        if(err){
            res.status(400).json(err)
        }else{
            res.send(rows)
        }
    })
})

module.exports = router;