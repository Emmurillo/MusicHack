(function() {
  'use strict';

  angular
  .module('musicHack.mymusic')
  .service('RegistrationServiceMyMusic', RegistrationServiceMyMusic);

  RegistrationServiceMyMusic.$inject = ['$firebaseAuth', 'env', '$firebaseArray'];

  /* @ngInject */
  function RegistrationServiceMyMusic($firebaseAuth, env, $firebaseArray) {

  }
})();
