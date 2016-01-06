(function() {
  'use strict';

  angular
    .module('musicHack.home')
    .controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = [];

  /* @ngInject */
  function HomeCtrl() {
    var vm = this;
    vm.showSearch = false;

    vm.toggleSearch = toggleSearch;

    function toggleSearch() {
      vm.showSearch = !vm.showSearch;
    }

    vm.visitedPlaces = [{
      id: 1,
      rating: 3,
      name: 'Antik',
      category: 'Variado',
      img: 'http://puravidaguide.com/wp-content/uploads/antik-logo-180x180.jpg',
      lastVisited: new Date()
    },{
      id: 2,
      rating: 4,
      name: '8ctavo',
      category: 'Chill',
      img: 'http://puravidaguide.com/wp-content/uploads/8ctavo-logo-180x180.jpg',
      lastVisited: new Date()
    },{
      id: 3,
      rating: 4.5,
      name: 'Loco\'s',
      category: 'Roots',
      img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRYdb-Gw7rrC62mYgZBti1ftf_qjdToXRcG_syYo80zvwYAjWLxng',
      lastVisited: new Date()
    }];
  }
})();
