(function() {
  'use strict';

  angular
    .module('musicHack.locals')
    .service('RegistrationServiceLocals', RegistrationServiceLocals);

  RegistrationServiceLocals.$inject = ['$firebaseAuth', 'env', '$firebaseArray'];

  /* @ngInject */
  function RegistrationServiceLocals($firebaseAuth, env, $firebaseArray) {

  }
})();
