'use strict';

/**
 * @ngdoc function
 * @name agroFairApp.controller:CourseCtrl
 * @description
 * # CourseCtrl
 * Controller of the agroFairApp
 */
angular.module('agroFairApp')
  .controller('ActivityCtrl', function ($scope, activityDataSvc, $routeParams, $log) {
        $log.debug('ActivityCtrl: $routeParams.techName:' + $routeParams.techName);
        $scope.activities = activityDataSvc.getActivities($routeParams.techName);

  });
