'use strict';

/**
 * @ngdoc service
 * @name agroFairApp.activityDataSvc
 * @description
 * # activityDataSvc
 * Service in the agroFairApp.
 */
angular.module('agroFairApp')
  .service('activityDataSvc', function activityDataSvc($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    return {
      getActivity: function (techName) {
        return $resource('/activities/:tech.json', {tech: '@tech'}).get({tech: techName});
      }
    };
  });
