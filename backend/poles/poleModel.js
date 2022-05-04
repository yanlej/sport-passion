var db = require('../connexion')

var Pole = {


    /**
     * 
     * @param {*} callback 
     * Cette requête va permettre d'afficher tous les pôles
     */
    getPoles: function(callback){
       return db.query('SELECT * FROM `pole`', callback);
    },



    /**
     * 
     * @param {*} Pole 
     * @param {*} callback 
     * @returns 
     * Cette requête va permettre de créer un pôle
     */
    createPole: function(Pole, callback){
        return db.query('INSERT INTO `pole`(`nom_pole`) VALUES (?)', [Pole.nom_pole], callback);
    },



    /**
     * 
     * @param {*} Pole 
     * @param {*} callback 
     * @returns 
     * Cette requête va permettre de mettre à jour un pôle
     */
    updatePole: function(Pole, callback){
        return db.query('UPDATE `pole` SET `nom_pole`= ?', [Pole.nom_pole], callback);
    },




    /**
     * 
     * @param {*} Pole 
     * @param {*} callback 
     * @returns 
     * Cette requête va permettre de supprimer un pôle
     */
    deletePole: function(Pole, callback){
        return db.query('DELETE FROM `pole` WHERE `idPole` = ?', [Pole.idPole], callback);
    },




    /**
     * 
     * @param {*} Pole 
     * @param {*} callback 
     * @returns 
     * Cette requête va permettre de récupérer les infos d'un pôle
     */
    getPoleById: function(Pole, callback){
        return db.query('SELECT * FROM `pole` WHERE `idPole` = ?' [Pole.idPole], callback);
    }
}

module.exports = Pole;