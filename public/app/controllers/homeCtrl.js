angular.module('homeCtrl', [])
    .controller('homeCtrl', function($timeout, $scope) {
        $timeout(function() {
            $scope.salam = "Halo";
            // $scope.goright = true;
        }, 2000);
    });