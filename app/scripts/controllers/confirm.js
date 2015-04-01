'use strict';

/**
 * @ngdoc function
 * @name aroundFrontendApp.controller:ConfirmCtrl
 * @description
 * # ConfirmCtrl
 * Controller of the aroundFrontendApp
 */
angular.module('aroundFrontendApp')
  .controller('ConfirmCtrl', ['$scope', 'Profile', function ($scope, Profile) {
    
    $scope.profile = Profile;

    $scope.register = function () { 
    	$scope.profile.register();
    	$scope.profile.next('thanks');
    }

  }]);
