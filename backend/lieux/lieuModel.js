var db = require('../connexion');

var Lieu = {



    /**
     * 
     * @param {*} callback 
     * Cette requête va permettre d'afficher tous les services
     */
     getLieux: function(callback){
        return db.query('SELECT * FROM `lieu`', callback);
     },
 
 
 
     /**
      * 
      * @param {*} Lieu 
      * @param {*} callback 
      * @returns 
      * Cette requête va permettre de créer un lieu
      */
     createLieu: function(Lieu, callback){
         return db.query('INSERT INTO `lieu`(`nom`, `adresse`, `code_postal`, `ville`, `Services_idServices`) VALUES (?,?,?,?,?)', 
         [Lieu.nom, Lieu.adresse, Lieu.code_postal, Lieu.ville, Lieu.Services_idServices], callback);
     },
 
 
 
     /**
      * 
      * @param {*} Lieu
      * @param {*} callback 
      * @returns 
      * Cette requête va permettre de mettre à jour un lieu
      */
     updateLieu: function(Lieu, callback){
         return db.query('UPDATE `lieu` SET `nom`= ?,`adresse`= ?,`code_postal`= ?,`ville`= ?,`Services_idServices`= ?', 
         [Lieu.nom, Lieu.adresse, Lieu.code_postal, Lieu.ville, Lieu.Services_idServices], callback);
     },
 
 
 
 
     /**
      * 
      * @param {*} Lieu 
      * @param {*} callback 
      * @returns 
      * Cette requête va permettre de supprimer un lieu
      */
     deleteLieu: function(Lieu, callback){
         return db.query('DELETE FROM `lieu` WHERE `idLieu` = ?', [Lieu.idLieu], callback);
     },
 
 
 
 
     /**
      * 
      * @param {*} Lieu 
      * @param {*} callback 
      * @returns 
      * Cette requête va permettre de récupérer les infos d'un service
      */
     getLieuById: function(Lieu, callback){
         return db.query('SELECT * FROM `lieu` WHERE `idLieu` = ?' [Lieu.idLieu], callback);
     }
 }
 
 module.exports = Lieu;