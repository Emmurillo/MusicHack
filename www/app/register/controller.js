(function() {
  'use strict';

  angular
    .module('musicHack.register')
    .controller('RegisterCtrl', RegisterCtrl);

  RegisterCtrl.$inject = ['$state'];

  /* @ngInject */
  function RegisterCtrl($state) {
    var vm = this;
    vm.user = {};

    vm.createAccount = createAccount;

    function createAccount() {
      $state.go('side.home');
    }
  }
})();
