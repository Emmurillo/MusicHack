(function() {
  'use strict';

  angular
    .module('musicHack')
    .constant('env', {
      facebookAppID: '729281253870354',
      youtubeAPIURL: 'https://www.googleapis.com/youtube/v3/search',
      youtubeAPIKey: 'AIzaSyAnnJ5Melxseh7lEQ-1yd0p8WREUQTQ3po',
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
