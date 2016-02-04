(function() {
  'use strict';

  angular
    .module('musicHack.localsetting')
    .service('RegistrationServiceLocalSetting', RegistrationServiceLocalSetting);

  RegistrationServiceLocalSetting.$inject = ['$firebaseAuth', 'env', '$firebaseArray'];

  /* @ngInject */
  function RegistrationServiceLocalSetting($firebaseAuth, env, $firebaseArray) {
    
  }
})();
