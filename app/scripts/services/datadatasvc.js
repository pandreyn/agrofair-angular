'use strict';

/**
 * @ngdoc service
 * @name agroFairApp.dataDataSvc
 * @description
 * # dataDataSvc
 * Service in the agroFairApp.
 */
angular.module('agroFairApp')
  .service('dataDataSvc', function dataDataSvc($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    return {
      getData: function (dataName) {
        return $resource('/data/:file.json', {file: '@file'}).get({file: dataName});
      }
    };
  });
