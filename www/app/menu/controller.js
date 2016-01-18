(function() {
  'use strict';

  angular
    .module('musicHack.menu')
    .controller('MenuCtrl', MenuCtrl);

  MenuCtrl.$inject = ['$state', '$localStorage'];

  /* @ngInject */
  function MenuCtrl($state, $localStorage) {
    var vm = this;

    vm.logOut = logOut

    function logOut() {
      $localStorage.$reset();
      $state.go('login');
    }
  }
})();
