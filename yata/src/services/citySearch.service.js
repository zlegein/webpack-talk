import angular from 'angular';

export default class CitySearchService {

  constructor($http) {
    this.$http = $http;
  }

  getCityInfo(q) {
    let configs = {
      params: {
        query: q,
        cb: 'JSON_CALLBACK'
      },
      headers: {"Content-Type": "application/json"}
    };
    return this.$http.jsonp('http://autocomplete.wunderground.com/aq', configs)
        .then(response => response.data.RESULTS)
        .catch(error => console.error('XHR Failed for getCityInfo.\n' + angular.toJson(error.data, true)))

  }
}

CitySearchService.$inject = ['$http'];

export default angular.module('services.citySearch', [])
  .service('citySearchService', CitySearchService)
  .name;
