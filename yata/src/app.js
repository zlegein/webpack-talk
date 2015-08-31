import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import uibootstrap from 'angular-ui-bootstrap'

import routing from './app.config';
import tide from './features/tide';

angular.module('app', [uirouter, uibootstrap, tide])
  .config(routing);



import angular from 'angular';

import router from './router';
import futureRoutes from 'app/routes.json!';

var appModule = angular.module('app', []);

appModule.config(router(appModule, futureRoutes));
appModule.config(routing);

angular.element(document).ready(function() {
  return angular.bootstrap(document.body, [appModule.name], {
    strictDi: true
  });
});

export default appModule;

