(function() {
  'use strict';

  angular
    .module('musicHack.locals')
    .service('FetchLocalsService', FetchLocalsService);

  FetchLocalsService.$inject = ['$rootScope', 'env', '$firebaseArray'];

  /* @ngInject */
  function FetchLocalsService($rootScope, env, $firebaseArray) {
    this.fetchLocals = fetchLocals;

    var ref = new Firebase(env.firebaseApiUrl);
    var refToUser = ref.child("user");
    var refToUserID = refToUser.child($rootScope.authenticatedUser.uid);
    var refToLocals = refToUserID.child("locals");
    var locals = $firebaseArray(refToLocals);

    function fetchLocals() {
      return locals.$loaded();
    }
  }
})();
