(function() {
  'use strict';

  angular
    .module('musicHack')
    .config(setupRoutes);

    function setupRoutes($stateProvider, $urlRouterProvider) {

      $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/view.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'app/register/view.html',
        controller: 'RegisterCtrl',
        controllerAs: 'vm'
      })
      .state('side', {
        url: '/side',
        abstract: true,
        templateUrl: 'app/menu/auth-side-menu.html',
        controller: 'SideMenuCtrl',
        controllerAs: 'vm'
      })
      .state('side.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'app/home/view.html',
            controller: 'HomeCtrl',
            controllerAs: 'vm'
          }
        }
      });
      
      $urlRouterProvider.otherwise('/login');

    }
})();
