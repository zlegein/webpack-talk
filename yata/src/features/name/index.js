import './name.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './name.routes';
import NameController from './name.controller';
import randomNames from '../../services/randomNames.service';
import greeting    from '../../directives/greeting.directive';

export default angular.module('app.name', [uirouter, randomNames, greeting])
  .config(routing)
  .controller('NameController', NameController)
  .name;
