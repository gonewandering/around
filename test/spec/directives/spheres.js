'use strict';

describe('Directive: spheres', function () {

  // load the directive's module
  beforeEach(module('aroundFrontendApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<spheres></spheres>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the spheres directive');
  }));
});
