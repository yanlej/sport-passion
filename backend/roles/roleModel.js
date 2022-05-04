var db = require('../connexion');

var Role = {



    /**
     * 
     * @param {*} callback 
     * Cette requête va permettre d'afficher tous les roles
     */
     getRoles: function(callback){
        return db.query('SELECT * FROM `role`', callback);
     },
 
 
 
     /**
      * 
      * @param {*} Role 
      * @param {*} callback 
      * @returns 
      * Cette requête va permettre de créer un role
      */
     createRole: function(Role, callback){
         return db.query('INSERT INTO `role`(`nom_role`) VALUES (?)', [Role.nom_role], callback);
     },
 
 
 
     /**
      * 
      * @param {*} Role 
      * @param {*} callback 
      * @returns 
      * Cette requête va permettre de mettre à jour un pôle
      */
     updateRole: function(Role, callback){
         return db.query('UPDATE `role` SET `nom_role`= ?', [Role.nom_role], callback);
     },
 
 
 
 
     /**
      * 
      * @param {*} Role 
      * @param {*} callback 
      * @returns 
      * Cette requête va permettre de supprimer un role
      */
     deleteRole: function(Role, callback){
         return db.query('DELETE FROM `role` WHERE `idRole` = ?', [Role.idRole], callback);
     },
 
 
 
 
     /**
      * 
      * @param {*} Pole 
      * @param {*} callback 
      * @returns 
      * Cette requête va permettre de récupérer les infos d'un pôle
      */
     getRoleById: function(Role, callback){
         return db.query('SELECT * FROM `role` WHERE `idRole` = ?' [Role.idRole], callback);
     }
 }
 
 module.exports = Role;
