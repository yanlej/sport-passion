var db = require('../connexion');

var Categorie = {


    /**
     * 
     * @param {*} callback 
     * @returns 
     * Cette requête va me permettre d'afficher toutes les catégories
     */
    getCategories: function(callback) {
        return db.query('SELECT * FROM `categorie`', callback);
    },

    
    /**
     * 
     * @param {*} Categorie 
     * @param {*} callback 
     * @returns 
     * Cette requête va me permettre de créer une nouvelle catégorie
     */
    createCategorie: function (Categorie, callback){
        return db.query('INSERT INTO `categorie`(`nom_categorie`) VALUES (?)', [Categorie.nom_categorie], callback);
    },


    /**
     * 
     * @param {*} Categorie 
     * @param {*} callback 
     * @returns 
     * Cette requête va me permettre de modifier le nom d'une catégorie
     */
    updateCategorie: function (Categorie, callback){
        return db.query('UPDATE `categorie` SET `nom_categorie`= ?', [Categorie.nom_categorie], callback);
    },


    /**
     * 
     * @param {*} Categorie 
     * @param {*} callback 
     * @returns 
     * Cette requête va me permettre de supprimer un catégorie
     */
    deleteCategorie: function(Categorie, callback){
        return db.query('DELETE FROM `categorie` WHERE `idcategorie` = ?', [Categorie.idcategorie], callback);
    },


    /**
     * 
     * @param {*} Categorie 
     * @param {*} callback 
     * @returns 
     * Cette requête va me permettre de récupérer les infos d'un catégorie 
     */
    getCategorieById: function(Categorie, callback){
        return db.query('SELECT * FROM `categorie` WHERE `idcategorie` = ?', [Categorie.idcategorie], callback);
    }
}

module.exports = Categorie;