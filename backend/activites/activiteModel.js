var db = require('../connexion');

var Activite = {



    /**
     * 
     * @param {*} callback 
     * Cette requête va permettre d'afficher toutes les activités
     */
     getListActivity: function(callback){
        return db.query('SELECT * FROM `activite`', callback);
     },
 
 
 
     /**
      * 
      * @param {*} Activite 
      * @param {*} callback 
      * @returns 
      * Cette requête va permettre de créer une activité
      */
     getCreateActivity: function(Activite, callback){
         return db.query('INSERT INTO `activite`(`description`, `duree`, `date`, `Lieu_idLieu`) VALUES (?,?,?,?)', 
         [Activite.description, Activite.duree, Activite.date, Activite.Lieu_idLieu], callback);
     },
 
 
 
     /**
      * 
      * @param {*} Activite 
      * @param {*} callback 
      * @returns 
      * Cette requête va permettre de mettre à jour une activité
      */
     getUpdate: function(Activite, callback){
         return db.query('UPDATE `activite` SET `description`= ?,`duree`= ?,`date`= ?,`Lieu_idLieu`= ?', 
         [Activite.description, Activite.duree, Activite.date, Activite.Lieu_idLieu], callback);
     },
 
 
 
 
     /**
      * 
      * @param {*} Activite 
      * @param {*} callback 
      * @returns 
      * Cette requête va permettre de supprimer une activité
      */
     getDelete: function(Activite, callback){
         return db.query('DELETE FROM `activite` WHERE `idactivite` = ?', [Activite.idactivite], callback);
     },
 
 
 
 
     /**
      * 
      * @param {*} Activite 
      * @param {*} callback 
      * @returns 
      * Cette requête va permettre de récupérer les infos d'une activité
      */
     getActivityById: function(Activite, callback){
         return db.query('SELECT * FROM `activite` WHERE `idactivite` = ?' [Activite.idactivite], callback);
     }
 }
 
 module.exports = Activite;