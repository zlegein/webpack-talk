import {Injectable} from 'angular2/core';
import {Jsonp, URLSearchParams} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Headers} from "angular2/http";

@Injectable()
export class TideService {
    apiKey:string = '48568446dd60e7a0';
    tide:any;
    constructor(private jsonp: Jsonp){}

    getTides(city) {
        let key = this.apiKey;
        let fetchUrl = ['http://api.wunderground.com/api/', key, '/tide', city.l, '.json'].join('');
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let params: URLSearchParams = new URLSearchParams();
        params.set('callback', 'JSONP_CALLBACK');

        let configs = {
            headers:headers,
            search: params
        };

        return this.jsonp.request(fetchUrl, configs).map((response) => response.json().tide);

        //let configs = {
        //    params: {
        //        callback: 'JSON_CALLBACK'
        //    },
        //    headers: {"Content-Type": "application/json"}
        //};
        //return this.$http.jsonp(fetchUrl, configs)
        //    .then(response => this.tide = response.data.tide)
        //    .catch(error => this.$log.error('XHR Failed for getTides.\n' + angular.toJson(error.data, true)))
    }

    //getCityInfo(q) {
    //    let headers = new Headers();
    //    headers.append('Content-Type', 'application/json');
    //
    //    let params: URLSearchParams = new URLSearchParams();
    //    params.set('query', q);
    //    params.set('cb', 'JSONP_CALLBACK');
    //
    //    let configs = {
    //        headers:headers,
    //        search: params
    //    };
    //
    //    return this.jsonp.request('http://autocomplete.wunderground.com/aq', configs).map((response) => response.json().RESULTS);
    //}
}

