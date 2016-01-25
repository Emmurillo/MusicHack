(function() {
  'use strict';

  angular
    .module('musicHack.home')
    .controller('PlacesDetailCtrl', PlacesDetailCtrl);

  PlacesDetailCtrl.$inject = [];

  /* @ngInject */
  function PlacesDetailCtrl() {
    var vm = this;

    vm.place = {
      id: 1,
      rating: 3,
      name: 'Antik',
      category: 'Variado',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      img: 'http://puravidaguide.com/wp-content/uploads/antik-logo-180x180.jpg',
      lastVisited: new Date()
    };
  }
})();
