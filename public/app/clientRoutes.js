angular.module('geprakRoutes', ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "app/views/pages/home.html",
            controller: "homeCtrl"
        })
        .when('/Humas-CM-7.5-4-17-rev-0', {
            templateUrl: "app/views/pages/monitoring.html",
            controller: 'bamCtrl'
        })
        .when('/dudi-saya', {
            templateUrl: 'app/views/pages/dudi-saya.html',
            controller: 'dudiCtrl'
        })
        .otherwise({
            template: "<h1>Kami Tidak Menemukan Apa Yang Anda Cari</h1>"
        });
    
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

});