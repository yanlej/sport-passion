var db = require('../connexion');

var Etat = {



    /**
     * 
     * @param {*} callback 
     * Cette requête va permettre d'afficher toutes les présences ou absences
     */
     getEtats: function(callback){
        return db.query('SELECT * FROM `etat`', callback);
     },
 
 
 
     /**
      * 
      * @param {*} Etat 
      * @param {*} callback 
      * @returns 
      * Cette requête va permettre de créer une présence ou un absence
      */
     createEtat: function(Etat, callback){
         return db.query('INSERT INTO `etat`(`presence`, `raison_absence`, `date`, `activite_idactivite`) VALUES (?,?,?,?)', 
         [Etat.presence, Etat.raison_absence, Etat.date, Etat.activite_idactivite], callback);
     },
 
 
 
     /**
      * 
      * @param {*} Etat 
      * @param {*} callback 
      * @returns 
      * Cette requête va permettre de mettre à jour une présence ou une absence
      */
     updateEtat: function(Etat, callback){
         return db.query('UPDATE `etat` SET `presence`= ?,`raison_absence`= ?,`date`= ?,`activite_idactivite`= ?', 
         [Etat.presence, Etat.raison_absence, Etat.date, Etat.activite_idactivite], callback);
     },
 
 
 
 
     /**
      * 
      * @param {*} Etat 
      * @param {*} callback 
      * @returns 
      * Cette requête va permettre de supprimer une présence ou une absence
      */
     deleteEtat: function(Etat, callback){
         return db.query('DELETE FROM `etat` WHERE `idEtat` = ?', [Etat.idEtat], callback);
     },
 
 
 
 
     /**
      * 
      * @param {*} Etat 
      * @param {*} callback 
      * @returns 
      * Cette requête va permettre de récupérer les infos d'une présence / d'une absence
      */
     getEtatById: function(Etat, callback){
         return db.query('SELECT * FROM `etat` WHERE `idEtat` = ?' [Etat.idEtat], callback);
     }
 }
 
 module.exports = Etat;