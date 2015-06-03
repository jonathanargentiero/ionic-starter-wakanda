angular.module('starter', ['wakanda', 'starter.home', 'ionic' ])
    
    .run(function ($ionicPlatform, $rootScope) {
        
        $ionicPlatform.ready(function () {
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
        
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    });