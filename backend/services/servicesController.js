var express = require('express');
var bodyparser = require('body-parser');
var router = express.Router();
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({extended: true}));

var Service = require('./serviceModel');


/**
 * Pour afficher tous les services
 */
router.get('/services', function(req, res){
    Service.getServices(function(err, rows){
        if(err){
            res.status(400).json(err)
        }else{
            res.send(rows)
        }
    })
});


/**
 * Pour ajouter un service
 */
router.post('/ajouterservice', function(req){
    Service.createService(req.body,(err,rows) => {})
});


/**
 * Pour mettre à jour un service
 */
router.put('/service/update', function (req,res){
    Service.updateService(req.body,(err,rows) =>{})
});



/**
 * Pour supprimer un service
 */
router.delete('/service/:id', function(req,res){
    Service.deleteService(req.body,(err,rows) =>{})
});



/**
 * Pour avoir les détails d'un service
 */
router.get('/service/details/:id', function(req,res){
    Service.getServiceById(function(err,rows){
        if(err){
            res.status(400).json(err)
        }else{
            res.send(rows)
        }
    })
})

module.exports = router;