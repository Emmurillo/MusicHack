(function() {
  'use strict';

  angular
  .module('musicHack.localsetting')
  .config(setupRoutes);

  function setupRoutes($stateProvider) {

    $stateProvider
    .state('localsetting', {
      url: '/localsetting',
      templateUrl: 'app/localsetting/view.html',
      controller: 'localSettingCtrl',
      controllerAs: 'vm'
    })
  }
})();
