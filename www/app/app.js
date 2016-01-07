(function() {
  'use strict';

  angular
    .module('musicHack', [
      'ionic',
      'firebase',
      'ngStorage',
      'angular-jwt',
      'ionic-datepicker',    

      'musicHack.login',
      'musicHack.register',
      'musicHack.home'
    ]);
})();
