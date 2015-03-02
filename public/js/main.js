/**
 * Created by rafaelmaia on 2/18/15.
 */
angular.module('contatooh', ['ngRoute', 'ngResource'])
    .config(function($routeProvider, $httpProvider){
        //n Contatos
        $httpProvider.interceptors.push('meuInterceptador');

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

        $routeProvider.when('/auth', {
            templateUrl: 'partials/auth.html'
        });

        //url padrão, caso nenhuma seja encontrada
        $routeProvider.otherwise({redirectTo: '/contatos'});
    }
);
