import tide from './index';


describe('Controller: Tide', function () {

  let ctrl;
  let rootScope;

  beforeEach(angular.mock.module(tide));

  beforeEach(angular.mock.inject(function($rootScope, $controller) {
    rootScope = $rootScope;
    ctrl = $controller('TideController');
  }));

  describe('calling search with a query', function () {

    let citySearchService;

    beforeEach(inject(function (_citySearchService_) {
      citySearchService = _citySearchService_;
      spyOn(citySearchService, 'getCityInfo');
    }));

    it('should call through to the citySearchService', function () {
      ctrl.citySearch('San Francisco');
      expect(citySearchService.getCityInfo).toHaveBeenCalledWith('San Francisco')
    });
  });
});
