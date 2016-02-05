(function() {
  'use strict';

  angular
  .module('musicHack.myLocals')
  .config(setupRoutes);

  function setupRoutes($stateProvider) {

    $stateProvider
    .state('menu.myLocals', {
      url: '/myLocals',
      views: {
        'menuContent': {
          templateUrl: 'app/myLocals/view.html',
          controller: 'MylocalsCtrl',
          controllerAs: 'vm'
        }
      }
    });
    $stateProvider
    .state('add', {
      url: '/add',
      templateUrl: 'app/myLocals/add/view.html',
      controller: 'AddMylocalsCtrl',
      controllerAs: 'vm'
    });

  }
})();
