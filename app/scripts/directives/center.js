'use strict';

/**
 * @ngdoc directive
 * @name aroundFrontendApp.directive:center
 * @description
 * # center
 */
angular.module('aroundFrontendApp')
  .directive('center', ['$window', function ($window) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {

      	var top = ($window.innerHeight - element.height()) / 2;

      	element.css({
      		position: "absolute",
      		top: top,
      		width: "100%"
      	});
      }
    };
  }]);
