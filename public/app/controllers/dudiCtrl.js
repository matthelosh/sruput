angular.module('dudiCtrl', [])
    .controller('dudiCtrl', function($http, $scope) {
        $http.get('/api/dudiku')
            .then(function(respon) {
                $scope.dudis = respon.data;
            });
    });