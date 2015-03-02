/// Arquivo de configuração do express

/// A responsabilidade do módulo é a de retornar uma isntância configurada do express
/// desta forma teremos a configuração centralizada.

var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var passport = require('passport');


//Com o express-load não é mais necessário usar require('../app/routes/home');
//var home = require('../app/routes/home');

module.exports = function(){

	// A váriavel express armazena uma funcção que, ao ser chamada, retorna uma
	//instância do Express
	var app = express();

	// variável de ambiente
	app.set('port', 3000);
	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	//middleware
    app.use(express.static('./public'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require('method-override')());

    app.use(cookieParser());
    app.use(session(
        { secret: 'homem avestruz',
            resave: true,
            saveUninitialized: true
        }
    ));

    app.use(passport.initialize());
    app.use(passport.session());

    load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes')
		.into(app);

	return app;
};


