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
        $scope.input = {
            message: ""
        };

        $scope.output = {
            message: ""
        };

        $scope.submit = function() {
            rest.all('echo').post($scope.input).then(function(response) {
                $scope.output = response;
            });
        };


  }]);
