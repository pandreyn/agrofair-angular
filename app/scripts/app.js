'use strict';

/**
 * @ngdoc overview
 * @name agroFairApp
 * @description
 * # agroFairApp
 *
 * Main module of the application.
 */
angular
  .module('agroFairApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'Partitioner'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/activities.html', {
        templateUrl: '/views/activities.html',
        controller: 'ActivitiesCtrl'
      })
      .when('/about.html', {
        templateUrl: '/views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/:techName.html', {
        templateUrl: '/views/activity.html',
        controller: 'ActivityCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
  });
