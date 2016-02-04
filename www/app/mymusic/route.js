(function() {
  'use strict';

  angular
  .module('musicHack.mymusic')
  .config(setupRoutes);

  function setupRoutes($stateProvider) {

    $stateProvider
    .state('mymusic', {
      url: '/mymusic',
      templateUrl: 'app/mymusic/view.html',
      controller: 'MymusicCtrl',
      controllerAs: 'vm'
    });

  }
})();
