import {Component} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Observable} from "rxjs/Observable";
import {CitySearch} from "./components/city-search/search";
import {CORE_DIRECTIVES} from "angular2/common";
import {View} from "angular2/core";
import {ViewEncapsulation} from "angular2/core";
import {CitySearchService} from "./services/city-search";
import {Http} from "angular2/http";
import {TideService} from "./services/tide";
import {Tides} from "./components/tides/tides";

@Component({
    selector: 'yata-app',
    providers: [TideService]
})
@View({
    template: `
    <div class="yata-app">
        <div class="container">
            <city-search (selected)="onSelect($event)"></city-search>
        </div>
        <div class="container">
            <tides [tide]="tide"></tides>
        </div>
    </div>`,
    encapsulation: ViewEncapsulation.None,
    directives: [CitySearch, Tides, CORE_DIRECTIVES]
})

export class YataApp {
    tideService:TideService;
    tide:any;
    constructor(http: Http, tideService:TideService) {
        this.tideService = tideService;
        this.tide = {tideInfo: [{tideSite: {}}]}
    }

    onSelect(city){
        this.tideService.getTides(city)
            .subscribe(
                data => {
                    console.log(data);
                    this.tide = data
                },
                err => console.log(err),
                () => console.log('get Tides complete Complete')
        );
    }
}
