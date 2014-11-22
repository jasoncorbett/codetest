'use strict';

angular.module('simple')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/course/:courseid', {
        templateUrl: 'resources/pages/course/course.html',
        controller: 'CourseCtrl'
      });
  }])
  .controller('CourseCtrl', ['$scope', 'Restangular', "$routeParams", function ($scope, rest, $routeParams) {
        $scope.course = {};

        rest.one('courses', $routeParams['courseid']).get().then(function(course) {
            $scope.course = course;
        });

  }]);
