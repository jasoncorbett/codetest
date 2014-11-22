angular.module('simple', ['ngAnimate', 'ngRoute', 'ngCookies', 'restangular', 'ngSanitize', 'ngMaterial'])
  .config(['$locationProvider', 'RestangularProvider', function ($locationProvider, RestangularProvider) {
    $locationProvider.html5Mode(true);
    RestangularProvider.setBaseUrl("api/");
  }]);

