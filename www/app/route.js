(function() {
  'use strict';

  angular
    .module('musicHack')
    .config(setupRoutes);

    function setupRoutes($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('tabs', {
          url: '/tabs',
          abstract: true,
          templateUrl: 'app/tabs/non-auth.html'
        })
        .state('tabs.login', {
          url: '/login',
          views: {
            'login': {
              templateUrl: 'app/login/view.html',
              controller: 'LoginCtrl',
              controllerAs: 'vm'
            }
          }
        })
        .state('tabs.register', {
          url: '/register',
          views: {
            'register': {
              templateUrl: 'app/register/view.html',
              controller: 'RegisterCtrl',
              controllerAs: 'vm'
            }
          }
        });

      $urlRouterProvider.otherwise('/tabs/login');

    }
})();
