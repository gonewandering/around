'use strict';

/**
 * @ngdoc overview
 * @name aroundFrontendApp
 * @description
 * # aroundFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('aroundFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $sceDelegateProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/info', {
        templateUrl: 'views/info.html',
        controller: 'InfoCtrl'
      })
      .when('/confirm', {
        templateUrl: 'views/confirm.html',
        controller: 'ConfirmCtrl'
      })
      .when('/thanks', {
        templateUrl: 'views/thanks.html',
        controller: 'ThanksCtrl'
      })
      .when('/bio', {
        templateUrl: 'views/bio.html',
        controller: 'BioCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/deleted', {
        templateUrl: 'views/deleted.html',
        controller: 'DeletedCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $sceDelegateProvider.resourceUrlWhitelist([
          // Allow same origin resource loads.
          'self',
          // Allow loading from our assets domain.
          'http://localhost:5000',
          'https://api.instagram.com/**'
      ]);
  });
