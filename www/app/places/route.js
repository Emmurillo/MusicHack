(function() {
  'use strict';

  angular
    .module('musicHack.places')
    .config(setupRoutes);

    function setupRoutes($stateProvider) {

      $stateProvider
        .state('menu.places', {
          url: '/places',
          views: {
            'menuContent': {
              templateUrl: 'app/places/list.html',
              controller: 'PlacesListCtrl',
              controllerAs: 'vm'
            }
          }
        })
        .state('place', {
          url: '/place',
          templateUrl: 'app/places/detail.html',
          controller: 'PlacesDetailCtrl',
          controllerAs: 'vm'
        });

    }
})();
