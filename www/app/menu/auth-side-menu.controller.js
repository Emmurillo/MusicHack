(function() {
  'use strict';

  angular
    .module('musicHack')
    .controller('SideMenuCtrl', SideMenuCtrl);

  SideMenuCtrl.$inject = ['$state'];

  /* @ngInject */
  function SideMenuCtrl($state) {
    var vm = this;

    vm.logout = logout

    function logout() {
      $state.go('tabs.login');
    }
  }
})();
