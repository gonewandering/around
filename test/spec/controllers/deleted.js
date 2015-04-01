'use strict';

describe('Controller: DeletedCtrl', function () {

  // load the controller's module
  beforeEach(module('aroundFrontendApp'));

  var DeletedCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeletedCtrl = $controller('DeletedCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
