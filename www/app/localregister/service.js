(function() {
  'use strict';

  angular
    .module('musicHack.localregister')
    .service('RegistrationServicelocalOwner', RegistrationServicelocalOwner);

  RegistrationServicelocalOwner.$inject = ['$firebaseAuth', 'env', '$firebaseArray'];

  /* @ngInject */
  function RegistrationServicelocalOwner($firebaseAuth, env, $firebaseArray) {
    this.createUser = createUser;
    this.createOwnerAdditionalInfo = createOwnerAdditionalInfo;

    var ref = new Firebase(env.firebaseApiUrl);
    var authlocalOwnerProvider = $firebaseAuth(ref);
    var authProviderOwner = ref.child("local-owner");

    function createUser(credentials) {
      return authlocalOwnerProvider.$createUser(credentials);
    }

    function createOwnerAdditionalInfo(localOwnerAdditionalInfo){
      return authProviderOwner.push(localOwnerAdditionalInfo);
    }

  }
})();
