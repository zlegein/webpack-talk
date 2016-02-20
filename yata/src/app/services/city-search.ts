import {Injectable} from 'angular2/core';
import {Jsonp, URLSearchParams} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Headers} from "angular2/http";

@Injectable()
export class CitySearchService {
    constructor(private jsonp: Jsonp){}

    getCityInfo(q) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let params: URLSearchParams = new URLSearchParams();
        params.set('query', q);
        params.set('cb', 'JSONP_CALLBACK');

        let configs = {
            headers:headers,
            search: params
        };

        return this.jsonp.request('http://autocomplete.wunderground.com/aq', configs).map((response) => response.json().RESULTS);
    }
}

