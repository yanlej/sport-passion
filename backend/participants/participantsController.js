var express = require('express');
var bodyparser = require('body-parser');
var router = express.Router();
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({extended: true}));

var Participant = require('./participantModel');


/**
 * Pour afficher tous les participants
 */
router.get('/participants', function(req, res){
    Participant.getParticipants(function(err, rows){
        if(err){
            res.status(400).json(err)
        }else{
            res.send(rows)
        }
    })
});


/**
 * Pour ajouter un participant
 */
router.post('/ajouterparticipant', function(req){
    Participant.createParticipant(req.body,(err,rows) => {})
});


/**
 * Pour mettre à jour un participant
 */
router.put('/participant/update', function (req,res){
    Participant.updateParticipant(req.body,(err,rows) =>{})
});



/**
 * Pour supprimer un participant
 */
router.delete('/participant/:id', function(req,res){
    Participant.deleteParticipant(req.body,(err,rows) =>{})
});



/**
 * Pour avoir les détails d'un participant
 */
router.get('/participant/details/:id', function(req,res){
    Participant.getParticipantById(function(err,rows){
        if(err){
            res.status(400).json(err)
        }else{
            res.send(rows)
        }
    })
})

module.exports = router;