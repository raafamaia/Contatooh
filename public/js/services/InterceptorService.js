/**
 * Created by rafaelmaia on 3/2/15.
 */
angular.module('contatooh')
    .factory('meuInterceptador',
        function($location, $q){
            var interceptor = {
                responseError: function(res){
                    if(res.status == 401) $location.path('/auth');

                    return $q.reject(res);
                }
            }

            return interceptor;
        }
    )