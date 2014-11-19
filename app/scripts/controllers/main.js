'use strict';

/**
 * @ngdoc function
 * @name agroFairApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the agroFairApp
 */
angular.module('agroFairApp')
  .controller('MainCtrl', function ($scope, dataDataSvc) {
    $scope.menuList = dataDataSvc.getData('menu');

    $scope.plainMenu = function(data) {
      var o1 = [];
      for (var key in data) {
        o1 = o1.concat(data[key].pages);
      }
      return o1;
    }

  });
