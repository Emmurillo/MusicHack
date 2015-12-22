(function() {
  'use strict';

  angular
    .module('musicHack', [
      'ionic',
      'firebase',

      'musicHack.login',
      'musicHack.auth',
      'musicHack.register',
      'musicHack.home'
    ]);
})();
