//import './tide.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './tide.routes';
import TideController from './tide.controller';
import citySearch from '../../services/citySearch.service';
import tideLookup from '../../services/tideLookup.service';
import tides    from '../../directives/tides.directive';

export default angular.module('app.tide', [uirouter, citySearch, tideLookup, tides])
  .config(routing)
  .value('ApiKey', {'wu': '48568446dd60e7a0'})
  .controller('TideController', TideController)
  .name;
