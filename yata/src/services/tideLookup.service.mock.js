
export default class JSONPCallService {

  /** @ngInject */
  constructor(ApiKey) {
    this.selectedCity = {l: "/q/zmw:94101.1.99999"};
    this.mockResponse = {"tide":{"foo": 2} };
    this.expectedCall = [
      'http://api.wunderground.com/api/',
      ApiKey.wu,
      '/tide',
      this.selectedCity.l,
      '.json?callback=JSON_CALLBACK'
    ].join('');
  }
}

export default angular.module('tideLookupMocks', [])
    .value('ApiKey', {'wu': '1234'})
    .service('JSONPCallService', JSONPCallService)
    .name;
