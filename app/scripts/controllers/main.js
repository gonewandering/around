'use strict';

/**
 * @ngdoc function
 * @name aroundFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aroundFrontendApp
 */
angular.module('aroundFrontendApp')
  .controller('MainCtrl', ['$scope', 'Profile', '$location', function ($scope, Profile, $location) {
    OAuth.initialize('_vTeGWW_0CzyINGc2l22NFBrhpk');

    $scope.profile = Profile;

  }]);
