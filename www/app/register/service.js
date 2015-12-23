(function() {
  'use strict';

  angular
    .module('musicHack.register')
    .service('RegistrationService', RegistrationService);

  RegistrationService.$inject = ['$firebaseAuth', 'env'];

  /* @ngInject */
  function RegistrationService($firebaseAuth, env) {
    this.createUser = createUser;

    var ref = new Firebase(env.firebaseApiUrl);
    var authProvider = $firebaseAuth(ref);

    function createUser(userInfo) {
      return authProvider.$createUser(userInfo);
    }
  }
})();
