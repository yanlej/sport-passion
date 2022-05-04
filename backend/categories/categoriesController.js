var express = require('express');
var bodyparser = require('body-parser');
var router = express.Router();
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({extended: true}));

var Categorie = require('./categorieModel');


/**
 * Pour afficher toutes les catégories
 */
router.get('/categories', function(req, res){
    Categorie.getCategories(function(err, rows){
        if(err){
            res.status(400).json(err)
        }else{
            res.send(rows)
        }
    })
});


/**
 * Pour ajouter une catégorie
 */
router.post('/ajoutercategorie', function(req){
    Categorie.createCategorie(req.body,(err,rows) => {})
});


/**
 * Pour mettre à jour une catégorie
 */
router.put('/categorie/update', function (req,res){
    Categorie.updateCategorie(req.body,(err,rows) =>{})
});



/**
 * Pour supprimer une catégorie
 */
router.delete('/categorie/:id', function(req,res){
    Categorie.deleteCategorie(req.body,(err,rows) =>{})
});



/**
 * Pour avoir les détails d'une catégorie
 */
router.get('/categorie/details/:id', function(req,res){
    Categorie.getCategorieById(function(err,rows){
        if(err){
            res.status(400).json(err)
        }else{
            res.send(rows)
        }
    })
})

module.exports = router;