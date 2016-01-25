(function() {
  'use strict';

  angular
    .module('musicHack.localregister')
    .service('RegistrationService', RegistrationService);

  RegistrationService.$inject = ['$firebaseAuth', 'env'];

  /* @ngInject */
  function RegistrationService($firebaseAuth, env) {
  //   this.createowner = createOwner;
  //   this.creatlocal = createLocal;
  //
  //   var ref = new Firebase(env.firebaseApiUrl);
  //   var authProvider = $firebaseAuth(ref);
  //
  //   function createOwner(ownerInfo) {
  //     return authProvider.$createOwner(ownerInfo);
  //   }
  //
  //   function createLocal(localInfo){
  //     return authProvider.$createLocal(localInfo);
  // }
  }
})();
