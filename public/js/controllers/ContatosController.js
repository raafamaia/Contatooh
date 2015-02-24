/**
 * Created by rafaelmaia on 2/18/15.
 */
angular.module('contatooh').controller('ContatosController',
    function($scope, Contato){
        $scope.contatos = [];
        $scope.filtro = '';
        $scope.mensagem = {texto: ''};

        //var Contato = $resource('/contatos/:id');
        function buscarContatos() {
            Contato.query(
                function (contatos) {
                    $scope.contatos = contatos;
                    $scope.mensagem = {};
                },
                function (erro) {
                    $scope.mensagem = {
                        texto: 'Ops, não foi possível obter os contatos'
                    };
                    console.log(erro);
                }
            );
        }

        $scope.remove = function(contato){

            //var promise = Contato.delete({id: contato._id}).$promise;
            //
            //promise
            //    .then(buscarContatos)
            //    .catch(function(erro){
            //        console.log("Ops, não foi possível remover contato");
            //        console.log(erro);
            //    }
            //)

            //Açucar sintético para a funçna delete:
            //A funcão delete pode receber mais dois parametros, um callback em caso de sucesso, e outroem caso de falha.
            Contato.delete({id: contato._id},
                buscarContatos,
                function(erro){
                    $scope.mensagem = {
                        texto: 'Ops, não foi possível deletar o contato indicado pelo id: ' + contato._id
                    };
                    console.log(erro);
                }
            );

        };

        buscarContatos();
    }

);