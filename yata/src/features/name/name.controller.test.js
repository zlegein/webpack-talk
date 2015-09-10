import name from './index';

describe('Controller: Name', function() {
  let $controller;

  beforeEach(angular.mock.module(name));

  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it('name is initialized to World', function() {
    let ctrl = $controller('NameController');
    expect(ctrl.name).toBe('World');
  });
});
