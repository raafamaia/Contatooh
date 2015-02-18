/**
 * Created by rafaelmaia on 2/18/15.
 */
angular.module('contatooh').controller('ContatosController',
    function($scope){
        $scope.total = 0;
        $scope.incrementa = function(){
            $scope.total++;
        };
    }
);