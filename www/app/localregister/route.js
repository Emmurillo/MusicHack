(function() {
  'use strict';

  angular
    .module('musicHack.localregister')
    .config(setupRoutes);

    function setupRoutes($stateProvider) {

      $stateProvider
        .state('localregister', {
          url: '/localregister',
          templateUrl: 'app/localregister/view.html',
          controller: 'LocalRegisterCtrl',
          controllerAs: 'vm'
        });

    }
})();
