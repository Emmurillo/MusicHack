(function() {
  'use strict';

  angular
    .module('musicHack', [
      'ionic',
      'firebase',
      'ngStorage',
      'angular-jwt',

      'musicHack.login',
      'musicHack.register',
      'musicHack.home'
    ]);
})();
