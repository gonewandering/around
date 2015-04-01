'use strict';

/**
 * @ngdoc function
 * @name aroundFrontendApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the aroundFrontendApp
 */
angular.module('aroundFrontendApp')
  .controller('ProfileCtrl', ['$scope', 'Profile', function ($scope, Profile) {
    $scope.profile = Profile;
  }]);
