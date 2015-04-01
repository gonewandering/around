'use strict';

/**
 * @ngdoc directive
 * @name aroundFrontendApp.directive:spheres
 * @description
 * # spheres
 */
angular.module('aroundFrontendApp')
  .directive('spheres', ['$interval', function ($interval) {
    return {
      template: '<div class="spheres" style="width: {{ options.width }}px; height: {{ options.height }}px"><div class="sphere" ng-repeat="sphere in spheres" style="animation-delay: {{ sphere.offset }}s; border-width: {{ sphere.border }}px; width: {{ options.radius }}px; height: {{ options.radius }}px;"></div></div>',
      restrict: 'A',
      scope: { 
      	'count': '='
      },
      link: function postLink(scope, element, attrs) {

      	scope.spheres = [];

        scope.options = { 
        	width: window.innerWidth,
        	height: window.innerHeight,
          radius: window.innerHeight > window.innerWidth ? window.innerHeight * .8 : window.innerWidth * .8
        };

        scope.count = scope.count || 3;
        var i = 0;

        while (i < 3) { 
          var options = { 
            border: Math.random() * (scope.options.radius * .05),
            offset: -Math.random() * 6,
            bottom: Math.random() * 100
          }

        	scope.spheres.push(options);
        	i++;
        }

      }
    };
  }]);
