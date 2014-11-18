'use strict';

/**
 * @ngdoc service
 * @name agroFairApp.courseDataSvc
 * @description
 * # activityDataSvc
 * Service in the agroFairApp.
 */
angular.module('agroFairApp')
  .service('activityDataSvc', function activityDataSvc($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function

      return {
          getActivities: function(techName) {
            return $resource('/activities/:tech.json', {tech:'@tech'}).get({tech:techName});
          }


      };
  });
