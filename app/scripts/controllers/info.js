'use strict';

/**
 * @ngdoc function
 * @name aroundFrontendApp.controller:InfoCtrl
 * @description
 * # InfoCtrl
 * Controller of the aroundFrontendApp
 */
angular.module('aroundFrontendApp')
  .controller('InfoCtrl', ['$scope', 'Profile', '$location', function ($scope, Profile, $location) {

  	$scope.profile = Profile;

    $scope.phone = function () { 
    	var num = $scope.profile.data.phone;
    	if (num && num.length == 3) { num = num + "-"; }
    	if (num && num.length == 7) { num = num + "-"; }
    	$scope.profile.data.phone = num;
    }

    $('input,textarea').first().select();

  }]);
