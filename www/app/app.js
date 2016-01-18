(function() {
  'use strict';

  angular
    .module('musicHack', [
      'musicHack.common',

      'musicHack.menu',
      'musicHack.login',
      'musicHack.register',
      'musicHack.home',
      'musicHack.qrscanner'
    ]);
})();
