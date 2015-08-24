import CitySearchService from './citySearch.service.js';

describe('Service: citySearchService', function () {

  let service;
  let $httpBackend;

  beforeEach(angular.mock.module(CitySearchService));

  describe('using with out setting', function () {

    beforeEach(angular.mock.inject(function(_$httpBackend_,_citySearchService_) {
      $httpBackend = _$httpBackend_;
      service = _citySearchService_;
    }));

    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should successfully call the url with a query string via JSONP', function () {

      var queryString = 'Newburyport';
      var expectedCall = 'http://autocomplete.wunderground.com/aq' + "?cb=JSON_CALLBACK&query=" + queryString;
      var expectedResults = {'RESULTS': {'foo': 2}};

      $httpBackend.expectJSONP(expectedCall).respond(function () {
        return [200, expectedResults];
      });
      service.getCityInfo(queryString).then(function (results) {
        expect(results).toEqual(expectedResults.RESULTS);
      });

      $httpBackend.flush()

    });
  });
});
