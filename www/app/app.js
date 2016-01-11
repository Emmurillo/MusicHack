(function() {
  'use strict';

  angular
    .module('musicHack', [
      'ionic',
      'firebase',
      'ngStorage',
      'angular-jwt',
      'ionic-datepicker',
      'ngPasswordStrength',

      'musicHack.login',
      'musicHack.register',
      'musicHack.home'
    ]);
})();
