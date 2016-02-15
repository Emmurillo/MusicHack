(function() {
  'use strict';

  angular
  .module('musicHack.locals')
  .service('AddLocalService', AddLocalService);

  AddLocalService.$inject = ['$rootScope', '$firebaseAuth', 'env', '$firebaseArray'];

  /* @ngInject */
  function AddLocalService($rootScope, $firebaseAuth, env, $firebaseArray) {
    this.createNewUserLocal = createNewUserLocal;
    var ref = new Firebase(env.firebaseApiUrl);
    var refToUser = ref.child("user");

    function createNewUserLocal(localInfo) {
      var refToUserID = refToUser.child($rootScope.authenticatedUser.uid);
      var refToLocal = refToUserID.child("locals");
      return refToLocal.push(localInfo);
    }
  }
})();
