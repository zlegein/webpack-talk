export default class TideController {

  constructor(citySearchService, tideLookupService) {
    this.citySearchService = citySearchService;
    this.data = tideLookupService;
    this.tideLookupService = tideLookupService;
    this.selectedCity = undefined;
  }

  citySearch(q) {
    return this.citySearchService.getCityInfo(q);
  };

  tideLookup() {
    return this.tideLookupService.getTides(this.selectedCity);
  };

}

TideController.$inject = ['citySearchService', 'tideLookupService'];