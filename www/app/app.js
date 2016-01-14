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
      'ngCordova',

      'musicHack.login',
      'musicHack.register',
      'musicHack.home',
      'musicHack.qrscanner'
    ]);
})();
