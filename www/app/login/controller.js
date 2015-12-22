(function() {
  'use strict';

  angular
    .module('musicHack.login')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$state'];

  /* @ngInject */
  function LoginCtrl($state) {
    var vm = this;

    vm.user = {};

    vm.authenticate = authenticate;

    function authenticate() {
      $state.go('side.home');
    }
  }
})();
