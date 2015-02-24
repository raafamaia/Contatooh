/**
 * Created by rafaelmaia on 2/18/15.
 */
angular.module('contatooh', ['ngRoute', 'ngResource'])
    .config(function($routeProvider){
        //n Contatos
        $routeProvider.when('/contatos', {
            templateUrl: 'partials/contatos.html',
            controller: 'ContatosController'
        });
        //unico Contato
        $routeProvider.when('/contato/:id', {
            templateUrl: 'partials/contato.html',
            controller: 'ContatoController'
        });
        //novo contato
        $routeProvider.when('/contato', {
            templateUrl: 'partials/contato.html',
            controller: 'ContatoController'
        });
        //url padrão, caso nenhuma seja encontrada
        $routeProvider.otherwise({redirectTo: '/contatos'});
    }
);
