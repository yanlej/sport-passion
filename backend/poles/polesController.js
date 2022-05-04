var express = require('express');
var bodyparser = require('body-parser');
var router = express.Router();
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({extended: true}));

var Pole = require('./poleModel');



/**
 * Pour afficher tous les pôles
 */
router.get('/poles', function(req, res){
    Pole.getPoles(function(err, rows){
        if(err){
            res.status(400).json(err)
        }else{
            res.send(rows)
        }
    })
});



/**
 * Pour ajouter un pôle
 */
 router.post('/ajouterpole', function(req){
    Pole.createPole(req.body,(err,rows) => {})
});



/**
 * Pour mettre à jour un pôle
 */
 router.put('/pole/update', function (req,res){
    Pole.updatePole(req.body,(err,rows) =>{})
});



/**
 * Pour supprimer un pôle
 */
 router.delete('/pole/:id', function(req,res){
    Pole.deletePole(req.body,(err,rows) =>{})
});



/**
 * Pour avoir les détails d'un pôle
 */
 router.get('/pole/details/:id', function(req,res){
    Pole.getPoleById(function(err,rows){
        if(err){
            res.status(400).json(err)
        }else{
            res.send(rows)
        }
    })
})

module.exports = router;