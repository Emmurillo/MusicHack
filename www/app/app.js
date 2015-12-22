(function() {
  'use strict';

  angular
    .module('musicHack', [
      'ionic',

      'musicHack.login',
      'musicHack.auth',
      'musicHack.register',
      'musicHack.home'
    ]);
})();
