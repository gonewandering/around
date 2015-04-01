'use strict';

/**
 * @ngdoc function
 * @name aroundFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the aroundFrontendApp
 */
angular.module('aroundFrontendApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
