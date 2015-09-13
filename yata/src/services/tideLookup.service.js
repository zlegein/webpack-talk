import angular from 'angular';

export default class TideLookupService {

  constructor($http, $log, ApiKey) {
    this.$http = $http;
    this.$log = $log;
    this.apiKey = ApiKey;
    this.tide = undefined;
  }

  getTides(city) {
    let key = this.apiKey.wu;
    let fetchUrl = ['http://api.wunderground.com/api/', key, '/tide', city.l, '.json'].join('');

    let configs = {
      params: {
        callback: 'JSON_CALLBACK'
      },
      headers: {"Content-Type": "application/json"}
    };
    return this.$http.jsonp(fetchUrl, configs)
        .then(response => this.tide = response.data.tide)
        .catch(error => this.$log.error('XHR Failed for getTides.\n' + angular.toJson(error.data, true)))
  }
}

TideLookupService.$inject = ['$http', '$log', 'ApiKey'];

export default angular.module('services.tideLookup', [])
  .service('tideLookupService', TideLookupService)
  .name;
