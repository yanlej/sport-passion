var db = require('../connexion');

var Participant = {



    /**
     * 
     * @param {*} callback 
     * Cette requête va permettre d'afficher tous les participants
     */
     getParticipants: function(callback){
        return db.query('SELECT * FROM `participant`', callback);
     },
 
 
 
     /**
      * 
      * @param {*} Participant 
      * @param {*} callback 
      * @returns 
      * Cette requête va permettre de créer un participant
      */
     createParticipant: function(Participant, callback){
         return db.query('INSERT INTO `participant`(`nom`, `prenom`, `adresse`, `code_postal`, `ville`, `date_naissance`, `telephone`, `email`, `nom_tuteur`, `prenom_tuteur`, `document`, `pole_1`, `pole_2`, `information`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
         [Participant.nom, Participant.prenom, Participant.adresse, Participant.code_postal, Participant.ville, Participant.date_naissance, Participant.telephone, Participant.email, Participant.nom_tuteur, Participant.prenom_tuteur, Participant.document, Participant.pole_1, Participant.pole_2, Participant.information], callback);
     },
 
 
 
     /**
      * 
      * @param {*} Participant 
      * @param {*} callback 
      * @returns 
      * Cette requête va permettre de mettre à jour un participant
      */
     updateParticipant: function(Participant, callback){
         return db.query('UPDATE `participant` SET `nom`= ?,`prenom`= ?,`adresse`= ?,`code_postal`= ?,`ville`= ?,`date_naissance`= ?,`telephone`= ?,`email`= ?,`nom_tuteur`= ?,`prenom_tuteur`= ?,`document`= ?,`pole_1`= ?,`pole_2`= ?,`information`= ?', 
         [Participant.nom, Participant.prenom, Participant.adresse, Participant.code_postal, Participant.ville, Participant.date_naissance, Participant.telephone, Participant.email, Participant.nom_tuteur, Participant.prenom_tuteur, Participant.document, Participant.pole_1, Participant.pole_2, Participant.information], callback);
     },
 
 
 
 
     /**
      * 
      * @param {*} Participant 
      * @param {*} callback 
      * @returns 
      * Cette requête va permettre de supprimer un participant
      */
     deleteParticipant: function(Participant, callback){
         return db.query('DELETE FROM `participant` WHERE `idParticipant` = ?', [Participant.idParticipant], callback);
     },
 
 
 
 
     /**
      * 
      * @param {*} Participant 
      * @param {*} callback 
      * @returns 
      * Cette requête va permettre de récupérer les infos d'un participant
      */
     getParticipantById: function(Participant, callback){
         return db.query('SELECT * FROM `participant` WHERE `idParticipant` = ?' [Participant.idParticipant], callback);
     }
 }
 
 module.exports = Participant;