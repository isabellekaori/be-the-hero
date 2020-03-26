var express = require('express'), // importando o mini frame express
    app = express();

const cors = require('cors');

const routes = require('./routes'); // to importando o arquivo routes
    
    app.use(cors());

    app.use(express.json()); //falando q vou usar o jison, portanto tem q ser antes das rotas

    app.use(routes); // falando q vou usar o routes, portanto tem q estar depois do  jsonn

    var server = app.listen(3333);
