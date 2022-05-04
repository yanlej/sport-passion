var mysql = require('mysql');
var connexion = mysql.createConnection({ 
    
    /**
     * Pour créer la connexion vers la base de donnée
     */

    host : 'localhost',
    user : 'root',
    password : '',
    database : 'sports_passions_db' // C'est une base de donnée de test
});

/**
 * Je me connecte à ma base de donnée.
 * Si c'est connecté, ça envois dans la console 
 * "Connecté à la base de données MySQL !"
 */

connexion.connect(function(err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL !");
  });

/**
 * J'exporte la connexion
 */
module.exports = connexion;