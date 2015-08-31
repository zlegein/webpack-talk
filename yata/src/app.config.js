routing.$inject = ['$urlRouterProvider', '$httpProvider', '$locationProvider'];

export default function routing($urlRouterProvider, $httpProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  $httpProvider.useApplyAsync(true);
  $urlRouterProvider.otherwise('/');
}
