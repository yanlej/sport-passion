var db = require('../connexion');

var Service = {



    /**
     * 
     * @param {*} callback 
     * Cette requête va permettre d'afficher tous les services
     */
     getServices: function(callback){
        return db.query('SELECT * FROM `services`', callback);
     },
 
 
 
     /**
      * 
      * @param {*} Service 
      * @param {*} callback 
      * @returns 
      * Cette requête va permettre de créer un service
      */
     createService: function(Service, callback){
         return db.query('INSERT INTO `services`(`nom_service`) VALUES (?)', [Service.nom_service], callback);
     },
 
 
 
     /**
      * 
      * @param {*} Service 
      * @param {*} callback 
      * @returns 
      * Cette requête va permettre de mettre à jour un service
      */
     updateService: function(Service, callback){
         return db.query('UPDATE `services` SET `nom_service`= ?', [Service.nom_service], callback);
     },
 
 
 
 
     /**
      * 
      * @param {*} Service 
      * @param {*} callback 
      * @returns 
      * Cette requête va permettre de supprimer un service
      */
     deleteService: function(Service, callback){
         return db.query('DELETE FROM `services` WHERE `idServices` = ?', [Service.idServices], callback);
     },
 
 
 
 
     /**
      * 
      * @param {*} Service 
      * @param {*} callback 
      * @returns 
      * Cette requête va permettre de récupérer les infos d'un service
      */
     getServiceById: function(Service, callback){
         return db.query('SELECT * FROM `services` WHERE `idServices` = ?' [Service.idServices], callback);
     }
 }
 
 module.exports = Service;