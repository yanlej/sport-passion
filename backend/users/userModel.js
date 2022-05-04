var db = require('../connexion')

var User = {

    /**
     * 
     * @param {} callback 
     * @returns 
     * Je fais ma requête qui va me permettre d'afficher tous les users
     */
    getUsers: function(callback){
        return db.query('SELECT * FROM `users`', callback);
    },

    getCountUsersByRole: function(callback){
        return db.query('SELECT `nom_role`, count(*) as nombre FROM `users` INNER JOIN `role` ON role.idRole = users.Role_idRole GROUP BY `Role_idRole`', callback);
    },


    /**
     * 
     * @param {*} User 
     * @param {*} callback 
     * @returns 
     * Cette requête va me permettre de créer un User
     */
    createUser: function(User, callback){
        return db.query('INSERT INTO `users`(`nom`, `prenom`, `email`, `telephone`, `mot_de_passe`, `Role_idRole`) VALUES (?,?,?,?,?,?)',
        [User.nom, User.prenom, User.email, User.telephone, User.mot_de_passe, User.Role_idRole], callback);
    },


    /**
     * 
     * @param {*} User 
     * @param {*} callback 
     * @returns 
     * Cette requête va me permettre de supprimer un User
     */
    deleteUser: function(User, callback){
        return db.query('DELETE FROM `users` WHERE `idUsers` = ?', [User.idUsers], callback);
    },


    /**
     * 
     * @param {*} User 
     * @param {*} callback 
     * @returns 
     * Cette requête va me permettre de update un User
     */
    updateUser: function(User, callback){
        return db.query('UPDATE `users` SET `nom`= ?,`prenom`= ?,`email`= ?,`telephone`= ?,`mot_de_passe`= ?,`Role_idRole`= ? WHERE `idUsers` = ?',
        [User.nom, User.prenom, User.email, User.telephone, User.mot_de_passe, User.Role_idRole, User.idUsers], callback);
    },


    /**
     * 
     * @param {*} User 
     * @param {*} callback 
     * @returns 
     * Cette requête va permettre de récupérer les infos d'un User
     */
    getUserById: function(User, callback){
        return db.query('SELECT * FROM `users` WHERE `idUsers` = ?', [User.idUsers], callback);
    },

    
    /**
     * 
     * @param {*} User 
     * @param {*} callback 
     * @returns 
     * Cette requête va permettre aux Users de ce connecter 
     */
    connexion: function(User, callback){
        return db.query('SELECT `idUsers` FROM `users` WHERE `email` = ? AND `password` = ?',
        [User.email, User.mot_de_passe], callback)
    }
}

module.exports = User;