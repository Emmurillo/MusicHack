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
            templateUrl: 'app/home/places/list.html',
            controller: 'HomeCtrl',
            controllerAs: 'vm'
          }
        }
      })
      .state('side.detail', {
        url: '/detail',
        views: {
          'menuContent': {
            templateUrl: 'app/home/places/detail.html',
            controller: 'PlacesDetailCtrl',
            controllerAs: 'vm'
          }
        }
      });

      $urlRouterProvider.otherwise('/login');
    }
})();
