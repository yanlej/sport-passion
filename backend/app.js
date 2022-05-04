var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());
app.set('view engine', 'ejs');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('Test'));



var UserController = require('./users/usersController');
app.use('/userModel', UserController);
app.get('/countrole', UserController);
app.get('/users', UserController);
app.get('/users/detail/:id', UserController);
app.delete('/users/:id', UserController);
app.put('/users/update/:id', UserController);
app.post('/inscription', UserController);




var CategorieController = require('./categories/categoriesController');
app.use('/categorieModel',CategorieController);
app.get('/categories', CategorieController);
app.get('/ajoutercategorie', CategorieController);
app.delete('/categorie/:id', CategorieController);
app.put('/categorie/update', CategorieController);
app.post('/categorie/details/:id', CategorieController);




var PoleController = require('./poles/polesController');
app.use('/poleModel', PoleController);
app.get('/poles', PoleController);
app.get('/ajouterpole', PoleController);
app.delete('/pole/:id', PoleController);
app.put('/pole/update', PoleController);
app.post('/pole/details/:id', PoleController);




var RoleController = require('./roles/rolesController');
app.use('/roleModel', RoleController);
app.get('/roles', RoleController);
app.get('/ajouterrole', RoleController);
app.delete('/role/:id', RoleController);
app.put('/role/update', RoleController);
app.post('/role/details/:id', RoleController);




var ServiceController = require('./services/servicesController');
app.use('/serviceModel', ServiceController);
app.get('/services', ServiceController);
app.get('/ajouterservice', ServiceController);
app.delete('/service/:id', ServiceController);
app.put('/service/update', ServiceController);
app.post('/service/details/:id', ServiceController);




var ParticipantController = require('./participants/participantsController');
app.use('/participantModel', ParticipantController);
app.get('/participants', ParticipantController);
app.get('/ajouterparticipant', ParticipantController);
app.delete('/participant/:id', ParticipantController);
app.put('/participant/update', ParticipantController);
app.post('/participant/details/:id', ParticipantController);




var EvenementController = require('./evenements/evenementsController');
app.use('/evenementModel', EvenementController);
app.get('/evenements', EvenementController);
app.get('/ajouterevenement', EvenementController);
app.delete('/evenement/:id', EvenementController);
app.put('/evenement/update', EvenementController);
app.post('/evenement/details/:id', EvenementController);




var LieuController = require('./lieux/lieuxController');
app.use('/lieuModel', LieuController);
app.get('/lieux', LieuController);
app.get('/ajouterlieu', LieuController);
app.delete('/lieu/:id', LieuController);
app.put('/lieu/update', LieuController);
app.post('/lieu/details/:id', LieuController);




var ActiviteController = require('./activites/activitesController');
app.use('/activiteModel', ActiviteController);
app.get('/activites', ActiviteController);
app.get('/ajouteractivite', ActiviteController);
app.delete('/activite/:id', ActiviteController);
app.put('/activite/update', ActiviteController);
app.post('/activite/details/:id', ActiviteController);




var EtatController = require('./etats/etatsController');
app.use('/etatModel', EtatController);
app.get('/etats', EtatController);
app.get('/ajouteretat', EtatController);
app.delete('/etat/:id', EtatController);
app.put('/etat/update', EtatController);
app.post('/etat/details/:id', EtatController);


module.exports = app