(function() {
  'use strict';

  angular
  .module('musicHack.locals')
  .config(setupRoutes);

  function setupRoutes($stateProvider) {

    $stateProvider
    .state('menu.locals', {
      url: '/locals',
      views: {
        'menuContent': {
          templateUrl: 'app/locals/view.html',
          controller: 'LocalsCtrl',
          controllerAs: 'vm'
        }
      }
    })
    .state('add', {
      url: '/add',
      templateUrl: 'app/locals/add/view.html',
      controller: 'AddLocalCtrl',
      controllerAs: 'vm'
    });
  }
})();
