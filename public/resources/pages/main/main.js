'use strict';

angular.module('simple')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'resources/pages/main/main.html',
        controller: 'MainCtrl'
      });
  }])
  .controller('MainCtrl', ['$scope', 'Restangular', function ($scope, rest) {
        $scope.courses = [];

        rest.all('courses').getList().then(function(courses) {
            $scope.courses = courses;
        });

  }]);
