import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {JSONP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {YataApp} from './app/yata-app';

import 'jquery';
import 'bootstrap';
import 'bootstrap-material-design';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import 'bootstrap-material-design/dist/css/ripples.min.css';

bootstrap(YataApp, [HTTP_PROVIDERS, JSONP_PROVIDERS, ROUTER_PROVIDERS])
    .then(
        success => {
            console.log('Yata app bootstrapped!');
            //$.material.init();
        },
        error => console.log(error)
    );
