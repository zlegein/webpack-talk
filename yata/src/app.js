import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import uibootstrap from 'angular-ui-bootstrap'

import routing from './app.config';
import tide from './features/tide';

angular.module('app', [uirouter, uibootstrap, tide])
  .config(routing);

