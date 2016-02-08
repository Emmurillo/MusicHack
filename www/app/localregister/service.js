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

    function createUser(credentials) {
      return authlocalOwnerProvider.$createUser(credentials);
    }

    var authProviderOwner = ref.child("local-owner");

    function createOwnerAdditionalInfo(localOwnerInfo){
      var localOwnerID = localOwnerInfo.uid;
      var authProviderID = authProviderOwner.child(localOwnerID);

      var localOwnerAdditionalInfo = localOwnerInfo.info;
      return authProviderID.set(localOwnerAdditionalInfo);
    }

  }
})();
