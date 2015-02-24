/**
 * Created by rafaelmaia on 2/20/15.
 */
angular.module('contatooh').controller('ContatoController',
    function($scope, $routeParams, $resource){
        var Contato = $resource('/contatos/:id');
        if ($routeParams.id) {
            Contato.get({id: $routeParams.id},
                function (contato) {
                    $scope.contato = contato;
                },
                function (erro) {
                    $scope.mensagem = {texto: 'Não foi possível obter o contato.'};
                    console.log(erro);
                }
            )
        }else{
            $scope.contato = new Contato;
        }

        $scope.salvar = function(){
            $scope.contato.$save()
                .then(function(){
                    $scope.mensagem = {texto: 'Contato salvo com sucesso!'};
                })
                .catch(function(erro){
                    $scope.mensagem = {texto: 'Ops, não foi possível salvar'};
                });
        };

    }
);