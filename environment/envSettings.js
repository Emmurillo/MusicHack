(function() {
  'use strict';

  angular
    .module('musicHack')
    .constant('env', {
      facebookAppID: '729281253870354',
      // @if ENV == 'DEVELOPMENT'
      firebaseApiUrl: 'https://mhdev.firebaseio.com/'
      // @endif
      // @if ENV == 'TEST'
      firebaseApiUrl: 'https://mhdev.firebaseio.com/'
      // @endif
      // @if ENV == 'PRODUCTION'
      firebaseApiUrl: 'https://musichackapp.firebaseio.com/'
      // @endif
    });
})();
