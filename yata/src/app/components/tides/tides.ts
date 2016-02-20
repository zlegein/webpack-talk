import {Component} from 'angular2/core';
import {Input} from "angular2/core";

@Component({
    selector: 'tides',
    templateUrl: 'app/components/tides/tides.html',
    providers: [],
    directives: [],
    pipes: [],
})
export class Tides {
    @Input() tide;
}

