import TidesDirective from './tides.directive.js';


describe('Directive: tides', function () {

  let element;
  let scope;
  let $httpBackend;

  beforeEach(angular.mock.module(TidesDirective));

  beforeEach(inject(function ($rootScope, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    scope = $rootScope.$new();

  }));

  it('should not display the table if no tide-data are set', inject(function ($compile) {

    element = angular.element('<tides tide-data=""></tides>');
    element = $compile(element)(scope);

    scope.$digest();

    expect(element.children().length).toEqual(2);
  }));

  it('should display the table with the data', inject(function ($compile) {

    scope.results = {
      tide: {
        "tideInfo": [
          {
            "tideSite": "Newburyport, Merrimack River, Massachusetts",
            "tzname": "America/New_York"
          }
        ],
        "tideSummary": [
          {
            "date": {
              "pretty": "2:12 PM EDT on August 09, 2015",
              "year": "2015",
              "mon": "08",
              "mday": "09",
              "hour": "14",
              "min": "12",
              "tzname": "America/New_York",
              "epoch": "1439143950"
            },
            "data": {
              "height": "0.27 ft",
              "type": "Low Tide"
            }
          }
        ]
      }
    };
    element = angular.element('<tides tide-data="results"></tides>');
    element = $compile(element)(scope);

    scope.$digest();

    expect(element.find('h3').html()).toBe(scope.results.tide.tideInfo[0].tideSite);

  }));
});
