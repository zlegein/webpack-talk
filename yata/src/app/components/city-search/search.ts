import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {CitySearchService} from "../../services/city-search";
import {Control} from "angular2/common";
import {FORM_DIRECTIVES} from "angular2/common";
import {NgFor} from "angular2/common";
import {NgIf} from "angular2/common";
import {ChangeDetectionStrategy} from "angular2/core";
import {EventEmitter} from "angular2/core";
import {Output} from "angular2/core";
import {NgFormControl} from "angular2/common";
import {Http} from "angular2/http";

@Component({
    selector: 'city-search',
    templateUrl: 'app/components/city-search/search.html',
    providers: [CitySearchService],
    directives: [FORM_DIRECTIVES, NgFor, NgIf, NgFormControl],
    changeDetection: ChangeDetectionStrategy.OnPush,
    pipes: [],
})
export class CitySearch {
    @Output('selected') selected = new EventEmitter();
    //clear = new EventEmitter();
    searchText = new Control();
    cities: Observable<any[]>;
    citySearchService:CitySearchService;
    constructor(http: Http, citySearchService:CitySearchService) {
        // get a stream of changes from the tickers input
        this.cities = Observable.from(this.searchText.valueChanges)
            // wait for a pause in typing of 200ms then emit the last value
            .debounceTime(200)
            // only accept values that don't repeat themselves
            .distinctUntilChanged()
            // map that to an observable HTTP request, using the TickerLoad
            // service and switch to that
            // observable. That means unsubscribing from any previous HTTP request
            // (cancelling it), and subscribing to the newly returned one here.
            .switchMap((val:string) => citySearchService.getCityInfo(val))
            //.merge(this.clear.mapTo([]));


    }

    onSelect(city){
        this.selected.emit(city);
        //this.clear.emit('')
    }

}

