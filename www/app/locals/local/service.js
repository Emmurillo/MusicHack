(function() {
  'use strict';

  angular
  .module('musicHack.locals')
  .service('VenuePlayerService', VenuePlayerService);

  VenuePlayerService.$inject = ['$rootScope', 'env', '$firebaseArray'];

  /* @ngInject */
  function VenuePlayerService($rootScope, env, $firebaseArray) {
    this.fetchQueue = fetchQueue;

    var ref = new Firebase(env.firebaseApiUrl);
    var uid = $rootScope.authenticatedUser.uid;

    function fetchQueue(localID) {
      var refToQueue = ref.child("user/" + uid + "/locals/" + localID + "/queue");
      var queue = $firebaseArray(refToQueue);
      return queue.$loaded();
    }
  }
})();
