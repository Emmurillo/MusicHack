(function() {
  'use strict';

  angular
    .module('musicHack.register')
    .service('RegistrationService', RegistrationService);

  RegistrationService.$inject = ['$firebaseAuth', 'env', '$firebaseArray'];

  /* @ngInject */
  function RegistrationService($firebaseAuth, env, $firebaseArray) {
    this.createUser = createUser;
    this.createUserAdditionalInfo = createUserAdditionalInfo;

    var ref = new Firebase(env.firebaseApiUrl);
    var authProvider = $firebaseAuth(ref);

    function createUser(userInfo) {
      return authProvider.$createUser(userInfo);
    }
    var authProviderUser = ref.child("user");
    var authProviderAdditional = authProviderUser.child("userCustomer");

   function createUserAdditionalInfo(userAdditionalInfo) {
     return authProviderAdditional.push(userAdditionalInfo);
   }
  }
})();
