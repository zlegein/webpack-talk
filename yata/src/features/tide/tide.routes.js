routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('tide', {
      url: '/tide',
      template: require('./search.html'),
      controller: 'TideController',
      controllerAs: 'tide'
    });
}
