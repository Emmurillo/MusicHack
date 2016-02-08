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

    // var authProviderUser = ref.child("user");
    // var authProviderAdditional = authProviderUser.child("userCustomer");
    var authProviderAdditional = ref.child("user");

    function createUserAdditionalInfo(userInfo) {
      var userID = userInfo.uid;
      var authProviderID = authProviderAdditional.child(userID);

      var userAdditionalInfo = userInfo.info;
      return authProviderID.set(userAdditionalInfo);
    }
  }
})();
