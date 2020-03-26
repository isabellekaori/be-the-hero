const express = require('express'); //importando o express

const OngController = require('./controllers/OngController'); // conexão com o controller da ong
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController'); 

const routes = express.Router(); //usando o router e criando uma váriavel para armaznar minhas rotas

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.post('/session', SessionController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes; //to exportando as rotas para meu index ter acesso