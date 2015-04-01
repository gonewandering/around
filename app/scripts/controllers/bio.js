'use strict';

/**
 * @ngdoc function
 * @name aroundFrontendApp.controller:BioCtrl
 * @description
 * # BioCtrl
 * Controller of the aroundFrontendApp
 */
angular.module('aroundFrontendApp')
  .controller('BioCtrl', ['$scope', 'Profile', function ($scope, Profile) {
   
  	$scope.profile = Profile;

    $scope.bio = function (e) { 
    	if (e.keyCode == 13) { 
    		window.location = "#/confirm";
    	}
    }

    $('input,textarea').first().focus();
  }]);
