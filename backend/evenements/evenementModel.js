var db = require('../connexion');

var Evenement = {



    /**
     * 
     * @param {*} callback 
     * Cette requête va permettre d'afficher tous les évènements
     */
     getEvenements: function(callback){
        return db.query('SELECT * FROM `evenement`', callback);
     },
 
 
 
     /**
      * 
      * @param {*} Evenement 
      * @param {*} callback 
      * @returns 
      * Cette requête va permettre de créer un évènement
      */
     createEvenement: function(Evenement, callback){
         return db.query('INSERT INTO `evenement`(`nom`, `adresse`, `code_postal`, `ville`, `description`, `categorie_idcategorie`, `Pole_idPole`) VALUES (?,?,?,?,?,?,?)', 
         [Evenement.nom, Evenement.adresse, Evenement.code_postal, Evenement.ville, Evenement.description, Evenement.categorie_idcategorie, Evenement.Pole_idPole], callback);
     },
 
 
 
     /**
      * 
      * @param {*} Evenement 
      * @param {*} callback 
      * @returns 
      * Cette requête va permettre de mettre à jour un évènement
      */
     updateEvenement: function(Evenement, callback){
         return db.query('UPDATE `evenement` SET `nom`= ?,`adresse`= ?,`code_postal`= ?,`ville`= ?,`description`= ?,`categorie_idcategorie`= ?,`Pole_idPole`= ?', 
         [Evenement.nom, Evenement.adresse, Evenement.code_postal, Evenement.ville, Evenement.description, Evenement.categorie_idcategorie, Evenement.Pole_idPole], callback);
     },
 
 
 
 
     /**
      * 
      * @param {*} Evenement 
      * @param {*} callback 
      * @returns 
      * Cette requête va permettre de supprimer un évènement
      */
     deleteEvenement: function(Evenement, callback){
         return db.query('DELETE FROM `evenement` WHERE `idEvenement` = ?', [Evenement.idEvenement], callback);
     },
 
 
 
 
     /**
      * 
      * @param {*} Evenement 
      * @param {*} callback 
      * @returns 
      * Cette requête va permettre de récupérer les infos d'un évènement
      */
     getEvenementById: function(Evenement, callback){
         return db.query('SELECT * FROM `evenement` WHERE `idEvenement` = ?' [Evenement.idEvenement], callback);
     }
 }
 
 module.exports = Evenement;