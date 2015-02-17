/// Arquivo de configuração do express

/// A responsabilidade do módulo é a de retornar uma isntância configurada do express
/// desta forma teremos a configuração centralizada.

var express = require('express');

module.exports = function(){

	// A váriavel express armazena uma funcção que, ao ser chamada, retorna uma
	//instância do Express
	var app = express();

	// variável de ambiente
	app.set('port', 3000);

	//middleware
	app.use(express.static('./public'));

	return app;
};


