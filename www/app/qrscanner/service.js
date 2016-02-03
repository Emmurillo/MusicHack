(function() {
  'use strict';

  angular
    .module('musicHack.qrscanner')
    .service('QRCodeService', QRCodeService);

  QRCodeService.$inject = ['$firebaseAuth', 'env', '$firebaseArray', '$q'];

  /* @ngInject */
  function QRCodeService($firebaseAuth, env, $firebaseArray, $q) {

    this.fetchLocalFromID = fetchLocalFromID;

    var ref = new Firebase(env.firebaseApiUrl);

    function fetchLocalFromID(localID){
      var deferredResponse = $q.defer();
      var localOwnerPath = ref.child("local-owner");
      var localKeyPath = localOwnerPath.child(localID);
      localKeyPath.on('value', function (snapshot) {
          deferredResponse.resolve(snapshot.val());
        }
      );
      return deferredResponse.promise;
    }

  }
})();
