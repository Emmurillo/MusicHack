(function() {
  'use strict';

  angular
  .module('musicHack.myLocals')
  .service('RegistrationServiceAddMylocal', RegistrationServiceAddMylocal);

  RegistrationServiceAddMylocal.$inject = ['$firebaseAuth', 'env', '$firebaseArray'];

  /* @ngInject */
  function RegistrationServiceAddMylocal($firebaseAuth, env, $firebaseArray) {

  }
})();
