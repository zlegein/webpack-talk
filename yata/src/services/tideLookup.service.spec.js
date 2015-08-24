import TideLookupService from './tideLookup.service.js';
import TideLookupMocks from './tideLookup.service.mock.js'

describe('Service: citySearchService', function () {

  let service;
  let $httpBackend;
  let $log;
  let apiKey;

  beforeEach(angular.mock.module(TideLookupService, TideLookupMocks));

  describe('using with out setting', function () {

    beforeEach(angular.mock.inject(function(_$httpBackend_, _$log_, _tideLookupService_, _ApiKey_) {
      $httpBackend = _$httpBackend_;
      $log = _$log_;
      service = _tideLookupService_;
      apiKey = _ApiKey_
    }));

    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    describe('when service is first created', function () {
      it('the service should be defined after injection', function () {
        expect(service).toBeDefined();
      });

      it('should have undefined tide', function () {
        expect(service.tide).toBeUndefined();
        expect($httpBackend).toBeDefined()
      });
    });

    describe('when the findTides function is successfully called with a selected city', function () {

      var mockResponseData;

      beforeEach(inject(function (JSONPCallService) {

        var selectedCity = JSONPCallService.selectedCity;
        var expectedJSONPCall = JSONPCallService.expectedCall;
        mockResponseData = JSONPCallService.mockResponse;

        $httpBackend.expect('JSONP', expectedJSONPCall).respond(function () {
          return [200, mockResponseData]
        });

        service.getTides(selectedCity);

        $httpBackend.flush();
      }));

      it('should set the tides on the service  ', function () {
        expect(service.tide).toEqual({"foo": 2})
      });

    });

    describe('when the findTides functions fails warn the user', function () {
      beforeEach(inject(function (JSONPCallService) {
        spyOn($log, 'error');

        $httpBackend.whenJSONP(JSONPCallService.expectedCall).respond(404);

        service.getTides(JSONPCallService.selectedCity);

        $httpBackend.flush()

      }));

      it('should throw an alert', function () {
        expect($log.error).toHaveBeenCalledWith('XHR Failed for getTides.\n' + undefined);
      });
    });
  });
});



