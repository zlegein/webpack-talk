routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('name', {
      url: '/name',
      template: require('./name.html'),
      controller: 'NameController',
      controllerAs: 'name'
    });
}
