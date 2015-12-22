(function() {
  'use strict';

  angular
    .module('musicHack.auth')
    .service('AuthService', AuthService);

  AuthService.$inject = [];

  /* @ngInject */
  function AuthService() {
    this.isAuthenticated = isAuthenticated;

    function isAuthenticated() {
      return true;
    }
  }
})();
