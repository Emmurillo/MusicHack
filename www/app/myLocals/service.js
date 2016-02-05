(function() {
  'use strict';

  angular
    .module('musicHack.myLocals')
    .service('RegistrationServiceMylocals', RegistrationServiceMylocals);

  RegistrationServiceMylocals.$inject = ['$firebaseAuth', 'env', '$firebaseArray'];

  /* @ngInject */
  function RegistrationServiceMylocals($firebaseAuth, env, $firebaseArray) {

  }
})();
