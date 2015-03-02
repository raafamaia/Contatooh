/**
 * Created by rafaelmaia on 2/26/15.
 */
var mongoose = require('mongoose');

module.exports = function(uri){
    mongoose.connect(uri);

    mongoose.connection.on('connected',
        function(){
            console.log('Mongoose! Conectado em ' + uri);
        }
    );

    mongoose.connection.on('disconnected',
        function(){
            console.log('Mongoose! Desconectado de ' + uri );
        }
    );

    mongoose.connection.on('error',
        function(){
            console.log('Mongoose! Erro na conexão: ' + uri);
        }
    );

    process.on('SIGINT',
        function(){
            mongoose.connection.close();
            console.log('Mongoose! Desconectado para termino da aplicação!');
            process.exit(0);
        }
    );
};
