//importar modulo do framework express
var express = require('express');

//importar modulo do consign
var consign = require('consign');

//importar body-parser
var bodyParser = require('body-parser');

//importar express-validator
var expressValidator = require('express-validator');

//iniciar o objeto do express
var app = express();

//setar as variáveis 'view engine' e 'views' do express
app.set('view engine', 'ejs');
app.set('views', './app/views');

//configurando os middlewares express.static
app.use(express.static('./app/public'));

//configurando o middleware body-parser
app.use(bodyParser.urlencoded({extended: true}));

//configurando o middleware express-validator
app.use(expressValidator());

//efetua o auto load das rotas, modulos e controlers para o objeto app
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

//exportando o objeto app
module.exports = app;