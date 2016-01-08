(function() {
  'use strict';

  angular
    .module('musicHack')
    .controller('SideMenuCtrl', SideMenuCtrl);

  SideMenuCtrl.$inject = ['$state', '$localStorage'];

  /* @ngInject */
  function SideMenuCtrl($state, $localStorage) {
    var vm = this;

    vm.logOut = logOut

    function logOut() {
      $localStorage.$reset();
      $state.go('login');
    }
  }
})();
